import React from 'react';
import { Link,useParams } from 'react-router-dom';
import "../../../src/App.css"
const EditUser = () => {
    const {id}=useParams();
  return (
    <div className="container">
    <div className="row">
        <h1 className='display-3  my-5   text-center'>
           Update Contact {id}
        </h1>
        <div className='col-md-6 shadow mx-auto p-5 my-2'>
            <form>
                <div className='form-group'>
                    <input placeholder='Enter Your Name' type="text" className='form-control'  />
                </div>
                <div className='form-group'>
                    <input placeholder='Enter Your Email' type="email" className='form-control my-2'  />
                </div>
                <div className='form-group'>
                    <input placeholder='Enter Your Phone Number' type="number" className='form-control my-2'  />
                </div>
                <div className='form-group'>
                    <input value="Update Student" type="submit"  className="btn  btn-dark my-2 " />
                    <Link to="/" className="btn btn-danger my-2 ml" >Cancel</Link>
                </div>
              


            </form>
        </div>
    </div>

</div>
  )
};

export default EditUser;
