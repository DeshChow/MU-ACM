import React, { useState } from 'react';
import BodyClassName from 'react-body-classname';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './AddContestLink.css';
const AddContestLink = () => {


     const [info, setInfo] = useState({});
 
     const handleBlur = e => {
         const newInfo = { ...info };
         newInfo[e.target.name] = e.target.value;
         setInfo(newInfo);
     }

     const history=useHistory();

     
     const handleSubmit=(e)=>
     {

         

           //console.log(info);


           fetch('http://localhost:5000/addContestLink',
           {
               method:'POST',
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify(info)
           })
           .then(res=>res.json())
           .then(result=>
            {
                if(result)swal("Good job!", "Successfully Post Your Contest!", "success");

                history.replace('/ContestLink');
            })

            e.preventDefault();
     }



    return (
        <BodyClassName className="set">
        <section className="container">
       
        <div className="col-md-10 p-4 pr-5" style={{marginLeft:'100px',marginTop:'20px',backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a POST</h5>


            <form onSubmit={handleSubmit}>
              
                <div className="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='name' id="exampleInputName1" placeholder="Name" required />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contest LINK</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='src' id="exampleInputcontestLink1" placeholder="ContestLink" required />
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">PassWord</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='password' id="exampleInputpassword1" placeholder="Password" required />
                </div>

                <div className="form-group">
                    <label for="exampleInputDate1">Date</label>
                    <input onBlur={handleBlur} type="date" class="form-control" name='date' id="exampleInputdate1" placeholder="Contest Date" required />
                </div>


                <div className="form-group">
                    <label for="exampleInputTime1">Starting Time</label>
                    <input onBlur={handleBlur} type='time' class="form-control" name='startTime' id="exampleInputstarttime1" placeholder="Contest Starting Time" required />
                </div>


                <div className="form-group">
                    <label for="exampleInputDuration">Duration</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='duration' id="exampleInputstarttime1" placeholder="Contest Duration" required />
                </div>
              
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    </section>
    </BodyClassName>
    );
};

export default AddContestLink;