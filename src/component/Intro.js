import React from 'react'; 
 
const Intro = (props) => { 
  return ( 
    <> 
      <p> 
        <strong>Nama:</strong>{props.nama} 
      </p> 
      <p> 
        <strong>Sekolah:</strong> SMK Bina Nusantara {props.sekolah} 
      </p> 
      <p> 
        <strong>Kelas:</strong> X TJKT{props.kelas} 
      </p> 
    </> 
  ); 
}; 
 
export default Intro;