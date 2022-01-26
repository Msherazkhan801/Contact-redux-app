import React from 'react';

const Adduser = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className='display-3   text-center'>
                    Add Contact
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
                            <input value="Add Student" type="submit"  className="btn btn-block btn-dark my-2 " />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
};

export default Adduser;
