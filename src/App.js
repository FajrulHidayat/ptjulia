
import './App.css';
import 'antd/dist/antd.css';
import './style/costum.scss';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {components} from './components'
import {arep} from './components/arep'
import {operator} from './components/operator'
import {pimpinan} from './components/pimpinan'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<components.Dashboard/>}/> */}
        <Route path="/" element={<components.Login/>}/>
        <Route  path="/arep" element={<components.Dashboard/>}>
          <Route index element={<arep.UnduhBOA/>}/>
          <Route path='TambahLaporan' element={<arep.TambahLaporan/>}/>
          <Route path='StatusLaporan' element={<arep.StatusLaporan/>}/>
        </Route>
        <Route  path="/operator" element={<components.Dashboard/>}>
          <Route index element={<operator.index/>}/>
          <Route path="PenanggungJawab" element={<operator.listArep/>}/>
          <Route path="WilayahKerja" element={<operator.listWilayah/>}/>
          <Route path="DataWilayah" element={<operator.dataWilayah/>}/>
          <Route path="LaporanMasuk" element={<operator.laporanMasuk/>}/>
          <Route path="LaporanKoreksi" element={<operator.laporanRevisi/>}/>
          <Route path="LaporanSetuju" element={<operator.laporanSetuju/>}/>
          <Route path="DetailArep" element={<operator.detailArep/>}/>
        </Route>
        <Route  path="/pimpinan" element={<components.Dashboard/>}>
          <Route index element={<pimpinan.index/>}/>
          <Route path="PenanggungJawab" element={<pimpinan.listArep/>}/>
          <Route path="LaporanSetuju" element={<pimpinan.laporanSetuju/>}/>
          <Route path="LaporanPajak" element={<pimpinan.laporanPajak/>}/>
        </Route>
        
        <Route exact path="/Registration" element={<components.Regis/>}/>
        <Route exact path="/laporan" element={<components.Pdf/>}/>
        <Route exact path="/UnduhBOA" element={<components.UnduhBOA/>}/>
        <Route exact path="/PeriksaLaporan" element={<components.PdfOperator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
