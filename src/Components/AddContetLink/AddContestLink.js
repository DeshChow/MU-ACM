import React, { useState } from 'react';
import swal from 'sweetalert';
const AddContestLink = () => {


     const [info, setInfo] = useState({});
 
     const handleBlur = e => {
         const newInfo = { ...info };
         newInfo[e.target.name] = e.target.value;
         setInfo(newInfo);
     }

     
     const handleSubmit=(e)=>
     {

         

           console.log(info);


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
            })

            e.preventDefault();
     }



    return (
        <section className="container-fluid row">
       
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Doctor</h5>


            <form onSubmit={handleSubmit}>
              
                <div class="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='name' id="exampleInputName1" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contest LINK</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='src' id="exampleInputcontestLink1" placeholder="ContestLink" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">PassWord</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='password' id="exampleInputpassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputDate1">Date</label>
                    <input onBlur={handleBlur} type="date" class="form-control" name='date' id="exampleInputdate1" placeholder="Contest Date" />
                </div>


                <div class="form-group">
                    <label for="exampleInputTime1">Starting Time</label>
                    <input onBlur={handleBlur} type='time' class="form-control" name='startTime' id="exampleInputstarttime1" placeholder="Contest Starting Time" />
                </div>


                <div class="form-group">
                    <label for="exampleInputDuration">Duration</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='duration' id="exampleInputstarttime1" placeholder="Contest Duration" />
                </div>
              
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    </section>
    );
};

export default AddContestLink;