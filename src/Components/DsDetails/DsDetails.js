import React from 'react';

import './DsDetails.css'

const DsDetails = (props) => {

    const data = props.data[0];

    //console.log(data.Description2);

    const {code}=props.data[0];

    console.log(data);

    return (

       
        <div style={{marginLeft: '70px'}}>
            <h1>{data.Header}</h1>
            <br></br>
            <p>{data.Introduction}</p>
            <br></br>
            <p>{data.Description1}</p>
            <br></br>
            <img className="ima" src={data.Img}></img>
            <br></br>
            <p>{data.Description2}</p>
            
            <p>{data.Description3}</p>
         
            <p>{data.Description4}</p>
           
            <p>{data.Description5}</p>

           <pre style={{backgroundColor:'#e0e0e0', width: '100%',paddingTop:'10px',paddingBottom:'10px',paddingLeft:'10px'}}>
             {
                 code
             }

           </pre>
          <br/>
         
        </div>

      
    );
};

export default DsDetails;