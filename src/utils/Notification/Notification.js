import React, { useState, useEffect } from "react";
import { getFCMToken } from "../../firebase";
import axios from "axios";

const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);

  console.log("Token found", isTokenFound);

  // To load once
  useEffect(() => {
    let data;

    async function tokenFunc() {
      data = await getFCMToken(setTokenFound);
      if (data) {
        console.log("Token is", data);

        console.log(props.data);
        if (props.data) {
          axios
            .put(`/auth/setToken/${props.data}`, { fcm_token: data }, {})
            .then((res) => {
              console.log(res);
              window.close();
            })
            .catch((error) => {
              console.log(error.status);
            });
        }
      }
      return data;
    }

    tokenFunc();
  }, [setTokenFound]);

  return <></>;
};

Notifications.propTypes = {};

export default Notifications;
