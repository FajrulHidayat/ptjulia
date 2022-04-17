import {Typography} from "antd"
const {Title} = Typography
export default function JustView(props){
    const dataServices = {
        id: "asdasd13123",
        title: "Pendirian Badan Usaha",
        services: [
          {
            id: "pt",
            title: "Pendirian PT (Perseroan Terbatas)",
            items: {
              id: "asdasd123123",
              packages: [
                {
                  id: "asdasd13123",
                  title: "Paket Pendirian PT",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: false,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: false,
                    },
                    {
                      title: "SIUP",
                      isAvailable: false,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: false,
                    },
                  ],
                  price: 5500000,
                  isTerlaris: true,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap PT",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "SIUP",
                      isAvailable: true,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: false,
                    },
                  ],
                  price: 9000000,
                  isTerlaris: false,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap PT & Virtual Office",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "SIUP",
                      isAvailable: true,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: true,
                    },
                  ],
                  price: 11000000,
                  isTerlaris: false,
                },
              ],
            },
            terms: [
              "Nama Perusahaan (Siapkan 1 Nama Cadangan)",
              "KTP dan NPWP Para Pendiri Minimal 2 Orang",
              "Sub Bidang Usaha",
              "Modal Awal",
              "Pembagian Persenan Saham",
              "Domisili Perusahaan",
              "Nomor Telpon dan Email Para Pendiri",
              "Kartu Keluarga",
              "Fotocopy Sertifikat Rumah/Tempat Usaha Apabila Disewa Maka Akan di Ganti Dengan Surat Keluasan Atau Keterangan Sewa Rumah",
              "IMB dan PBB Terakhir",
              "Surat Pengantar RT/RW untuk Surat Keterangan Domisili Perusahaan",
              "Email Perusahaan",
              "Stempel Perusahaan",
            ],
          },
          {
            id: "cv",
            title: "Pendirian CV",
            items: {
              id: "asdasdas2312",
              packages: [
                {
                  id: "asdasd13123",
                  title: "Paket Pendirian CV",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: false,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: false,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: false,
                    },
                    {
                      title: "SIUP (Surat Izin Usaha)",
                      isAvailable: false,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: false,
                    },
                  ],
                  price: 2500000,
                  isTerlaris: false,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap CV",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "SIUP (Surat Izin Usaha)",
                      isAvailable: true,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: false,
                    },
                  ],
                  price: 5000000,
                  isTerlaris: true,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap CV & Virtual Office",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "SIUP (Surat Izin Usaha)",
                      isAvailable: true,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: true,
                    },
                  ],
                  price: 7500000,
                  isTerlaris: false,
                },
              ],
            },
            terms: [
              "Nama Perusahaan (Siapkan 1 Nama Cadangan)",
              "KTP dan NPWP Para Pendiri Minimal 2 Orang",
              "Sub Bidang Usaha",
              "Modal Awal",
              "Pembagian Persenan Saham",
              "Domisili Perusahaan",
              "Nomor Telpon dan Email Para Pendiri",
              "Kartu Keluarga",
              "Fotocopy Sertifikat Rumah/Tempat Usaha Apabila Disewa Maka Akan di Ganti Dengan Surat Keluasan Atau Keterangan Sewa Rumah",
              "IMB dan PBB Terakhir",
              "Surat Pengantar RT/RW untuk Surat Keterangan Domisili Perusahaan",
              "Email Perusahaan",
              "Stempel Perusahaan",
            ],
          },
          {
            id: "startup",
            title: "Pendirian Startup",
            items: {
              id: "sadsad213123",
              packages: [
                {
                  id: "asdasd13123",
                  title: "Paket Pendirian Startup PT",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: false,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: false,
                    },
                    {
                      title: "SIUP (Surat Izin Usaha)",
                      isAvailable: false,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: false,
                    },
                  ],
                  price: 5500000,
                  isTerlaris: false,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap Startup PT",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "SIUP (Surat Izin Usaha)",
                      isAvailable: true,
                    },
                    {
                      title: "Virtual Office Selama 1 Tahun",
                      isAvailable: true,
                    },
                  ],
                  price: 10500000,
                  isTerlaris: true,
                },
              ],
            },
            terms: [
              "Nama Perusahaan (Siapkan 1 Nama Cadangan)",
              "KTP dan NPWP Para Pendiri Minimal 2 Orang",
              "Sub Bidang Usaha",
              "Modal Awal",
              "Pembagian Persenan Saham",
              "Domisili Perusahaan",
              "Nomor Telpon dan Email Para Pendiri",
              "Kartu Keluarga",
              "Fotocopy Sertifikat Rumah/Tempat Usaha Apabila Disewa Maka Akan di Ganti Dengan Surat Keluasan Atau Keterangan Sewa Rumah",
              "IMB dan PBB Terakhir",
              "Surat Pengantar RT/RW untuk Surat Keterangan Domisili Perusahaan",
              "Email Perusahaan",
              "Stempel Perusahaan",
            ],
          },
          {
            id: "yayasan",
            title: "Pendirian Yayasan",
            items: {
              id: "asdasd213123",
              packages: [
                {
                  id: "asdasd13123",
                  title: "Paket Pendirian Yayasan",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Yayasan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: false,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: false,
                    },
                    {
                      title: "Izin Operasional",
                      isAvailable: false,
                    },
                  ],
                  price: 4000000,
                  isTerlaris: true,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap Yayasan",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Yayasan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "Izin Operasional",
                      isAvailable: true,
                    },
                  ],
                  price: 7500000,
                  isTerlaris: false,
                },
              ],
            },
            terms: [
              "Nama Yayasan (Siapkan Satu Nama Cadangan)",
              "KTP dan NPWP Para Pengurus Yayasan",
              "Domisili Yayasan",
              "Bidang Kegiatan Yayasan",
              "Nomor Telpon dan Email Para Pengurus Yayasan",
              "Fotocopy Sertifikat Rumah/Tempat Yayasan Apabila Disewa Maka Akan Diganti Dengan Surat Keluasan Atau Keterangan Sewa Rumah",
              "IMB dan PBB Terakhir",
            ],
          },
          {
            id: "firma",
            title: "Firma",
            items: {
              id: "sadasdq312",
              packages: [
                {
                  id: "asdasd13123",
                  title: "Paket Pendirian Firma",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "Izin Usaha",
                      isAvailable: false,
                    },
                  ],
                  price: 7000000,
                  isTerlaris: true,
                },
              ],
              terms: [
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
              ],
            },
            terms: [
              "Data Nama para pendiri Firma sesuai KTP",
              "Nama perusahaan",
              "Tempat dan kedudukan perusahaan (kota/kabupaten)",
              "Maksud dan tujuan perusahaan yaitu bidang usaha dan lingkup kegiatan usaha",
              "Nama susunan pengurus Firma (Direktur)",
              "NPWP Para Pendiri",
            ],
          },
          {
            id: "konstruksi",
            title: "Pendirian Konstruksi / Konsultan",
            items: {
              id: "sadqw3123",
              packages: [
                {
                  id: "asdasd13123",
                  title: "Paket Kecil Konstruksi / Konsultan CV",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "SIUJK (Perizinan Online)",
                      isAvailable: true,
                    },
                    {
                      title: "Izin Usaha Jasa Konstruksi",
                      isAvailable: false,
                    },
                    {
                      title: "SBU",
                      isAvailable: false,
                    },
                    {
                      title: "SKA/SKT",
                      isAvailable: false,
                    },
                    {
                      title: "Virtual Office 1 Tahun",
                      isAvailable: false,
                    },
                  ],
                  price: 5000000,
                  isTerlaris: true,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap Konstruksi / Konsultan CV",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "Izin Usaha Jasa Konstruksi",
                      isAvailable: true,
                    },
                    {
                      title: "SBU",
                      isAvailable: true,
                    },
                    {
                      title: "SKA/SKT",
                      isAvailable: true,
                    },
                    {
                      title: "Virtual Office 1 Tahun",
                      isAvailable: true,
                    },
                  ],
                  price: 16000000,
                  isTerlaris: false,
                },
                {
                  id: "asdasd13123",
                  title: "Paket Lengkap Konstruksi / Konsultan PT",
                  obtaineds: [
                    {
                      title: "Akta Pendirian",
                      isAvailable: true,
                    },
                    {
                      title: "SK MENKUMHAM",
                      isAvailable: true,
                    },
                    {
                      title: "NPWP Perusahaan",
                      isAvailable: true,
                    },
                    {
                      title: "NIB",
                      isAvailable: true,
                    },
                    {
                      title: "SKDP (Surat Izin Domisili)",
                      isAvailable: true,
                    },
                    {
                      title: "BPJS Ketenagakerjaan",
                      isAvailable: true,
                    },
                    {
                      title: "Izin Usaha Jasa Konstruksi",
                      isAvailable: true,
                    },
                    {
                      title: "SBU",
                      isAvailable: true,
                    },
                    {
                      title: "SKA/SKT",
                      isAvailable: true,
                    },
                    {
                      title: "Virtual Office 1 Tahun",
                      isAvailable: true,
                    },
                  ],
                  price: 20000000,
                  isTerlaris: false,
                },
              ],
              terms: [
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
                "Pendirian PT (Perseroan Terbatas)",
              ],
            },
          },
        ],
      };
    return(
        <div>
            {dataServices.services.map(service=>{
                return(
                <div>
                    <Title>{service.title}</Title>
                    {service.items.packages.map((pack,index)=>{
                        console.log(pack);
                        return(
                            <div style={{margin:"8px",marginLeft:"36px"}}>
                            <Title level={3}>{index+1}  {pack.title}</Title>
                            {pack.obtaineds.map(obtained=>{
                                if (obtained.isAvailable) {
                                    return(<p style={{marginLeft:"16px"}}>{obtained.title}</p>)
                                }else{
                                    return(false)
                                }
                                
                            })}
                            <Title level={5}>Harga = {pack.price}</Title>
                            </div>
                        )
                    })}
                    

                </div>)

                
            }
            )}
            {console.log(dataServices)}
        </div>
    )
} 