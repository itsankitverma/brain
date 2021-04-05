import React from "react";
import img from "../img/logo-icon.svg"
import StopIcon from '@material-ui/icons/Stop';

function banner() {

  function Text() {
    const weight = {
      lineHeight:"3.5rem"
    };

    return (
      <>
        <div>
          <h1 style={{ position:"relative", lineHeight:"3.5rem" }}>
            We deliver absolute & <br />
            <strong>growth-oriented</strong> solutions in <br />  <img src={img} style={{ position:"absolute", top:"-70px", right:"-20px" }} alt="" width="140px" height="140px"/>
            <strong style={{ color:"#eb1d42" }}>AI & IoT Development.</strong>
          </h1>
        </div>
      </>
    );
  }

  function Items() {
    return(
        <>  
        <div style={{ marginTop:"10px", fontSize:"15px",fontWeight:"150px" }}>
           <strong> <span><StopIcon style={{ color:"#eb1d42" }}/> Free Life-Time Support </span>  
            <span><StopIcon style={{ color:"#eb1d42" }}/> Assurance of Quality </span>  
            <span><StopIcon style={{ color:"#eb1d42" }}/> FreOn-Time Delivery  </span>  </strong>
            <br/>
            <button style={{ marginTop:"10px", backgroundColor:"transparent", color:"#eb1d42", padding:"5px 10px", border:"#eb1d42 solid 2px" }}>Partner with us & save 50%</button>
        </div>
        </>
    )
  }



const center = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    height:"80vh"
} 

  return (
    <>
    <div style={center}>
      <Text />
      <Items />
    </div>
    </>
  );
}

export default banner;
