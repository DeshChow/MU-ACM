import React from 'react';
import './DsDetails.css'

const DsDetails = (props) => {

    const data = props.data[0];

    console.log(data.Description2);

    return (
        <div>
            <h1>{data.Header}</h1>
            <br></br>
            <p>{data.Introduction}</p>
            <br></br>
            <p>{data.Description1}</p>
            <br></br>
            <img className="ima" src={data.Img}></img>
             <html>{data.Description2}</html>
            <p>{data.Description3}</p>
            <p>{data.Description4}</p>
            <p>{data.Description5}</p>
            <div className="code">
                <p>This is shojib</p>

            </div>
            <p>{data.Complexity}</p>


          

         
        </div>
    );
};

export default DsDetails;