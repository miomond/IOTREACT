import { Form, useForm } from "react-hook-form";
import { useState } from "react";
import "./register.css";
import { FormControl } from "react-bootstrap";
// import imgRegister from "../../assets/register.png";

function Register() {




    const { register, handleSubmit,getValues ,formState: { errors } } = useForm();

    function onSubmit(values) {
        localStorage.setItem("registrationData", JSON.stringify(values));
    console.log("Data stored in local storage");
        console.log(values);
    } 


    return (
        <>
            <bod >
                <div className="conteiner">
                    <div className="text">Register</div>

                    {/* start form */}

                    <form onSubmit={handleSubmit(onSubmit)} className="form-register">
                        <div className="form-row">
                            <div className="input-data">
                                {/* enput User Name */}
                                <label htmlFor="user name" style={{color:'white'}}> user name</label>

                                <FormControl
                                className="input-con"
                                    id="standard-user-input"
                                    type="text"
                                    size="large"
                                    // name='username'
                                    autoComplete="current-password"
                                    variant="standard"
                                    styles={{
                                        underline: {
                                          borderColor: '#ccc', // Set your desired border color
                                        
                                        },
                                        label: {
                                          color: '#f60000', // Set your desired label color
                                          
                                        },
                                      }}
                                  

                                    {...register('username', {
                                        required: {
                                            value: true,
                                            //   massage: "Your Name is Required",
                                        },
                                        maxLength: {
                                            value: 30,
                                            //   massage: " Max length exceeded",
                                        },
                                        minLength: 3,
                                        // massage: "Minimum 3 characters",
                                    })}
                                />

                                {errors.username && errors.username.type === "required" && (
                                    <span style={{ color: "red",  }} >This is required</span>
                                )}
                                {errors.username && errors.username.type === "maxLength" && (
                                    <span style={{ color: "red" }}>Max length exceeded</span>
                                )}
                                {errors.username && errors.username.type === "minLength" && (
                                    <span style={{ color: "red" }}>Min length 3 Character</span>
                                )}
                            </div>

                            <div className="input-data">
                            <label htmlFor="Email" style={{color:'white'}}>Email</label>
                               <FormControl
                                    id="standard-Email-input"
                                    type="email"
                                    helperText="This Input is Required"
                                    autoComplete="current-password"
                                    variant="standard"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            //   massage: "Your Email is Required",
                                        },
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Entered value does not match email format",
                                        },
                                    })}
                                />
                                {errors.email && errors.email.type === "required" && (
                                    <span style={{ color: "red" }}>This is required</span>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <span style={{ color: "red" }}>Entered value does not match email format</span>
                                )}
                            </div>
                            <div className="input-data">
                            <label htmlFor="password" style={{color:'white'}}>Password</label>
                               <FormControl
                                    id="standard-password-input"
                                    
                                    type="password"
                                    helperText="This Input is Required"
                                    autoComplete="current-password"
                                    variant="standard"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            //   massage: "Your Password is Required",
                                        },
                                        minLength: {
                                            value: 8,
                                            //   massage: "Minimum 8 characters",
                                        },
                                        maxLength: {
                                            value: 30,
                                            //   massage: " Max length exceeded",
                                        },
                                        pattern: {
                                            value:
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Entered value does not match password format",
                                        },
                                    })}
                                />
                                {errors.password && errors.password.type === "required" && (
                                    <span style={{ color: "red" }}>This is required</span>
                                )}
                                {errors.password && errors.password.type === "maxLength" && (
                                    <span style={{ color: "red" }}>Max length exceeded</span>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <span style={{ color: "red" }}>Min length 8 Character</span>
                                )}
                                {errors.password && errors.password.type === "pattern" && (
                                    <span style={{ color: "red" }}>Entered value does not match password format</span>
                                )}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                            <label htmlFor="user name" style={{color:'white'}}>Phone Number</label>

                               <FormControl
                                    id="standard-Number-input"
                                    type="Number"
                                    helperText="This Input is Required"
                                    autoComplete="current-password"
                                    variant="standard"
                                    {...register("phonenumber", {
                                        required: {
                                            value: true,
                                            //   massage: "Your Number is Required",
                                        },
                                        maxLength: {
                                            value: 11,
                                            //   massage: "Max length exceeded",
                                        },
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            //   massage: "Entered value does not match Number format",
                                        },
                                    })}
                                />

                                {errors.phonenumber && errors.phonenumber.type === "required" && (
                                    <span style={{ color: "red" }}>This is required</span>
                                )}
                                {errors.phonenumber && errors.phonenumber.type === "maxLength" && (
                                    <span style={{ color: "red" }}>Max length exceeded</span>
                                )}
                                {errors.phonenumber && errors.phonenumber.type === "pattern" && (
                                    <span style={{ color: "red" }}>Entered value does not match email format</span>
                                )}
                            </div>
                            <div className="input-data">
                            <label htmlFor="user name" style={{color:'white'}}>National Id</label>

                               <FormControl
                                    id="standard-NationalId-input"
                                    type="number"
                                    helperText="This Input is Required"
                                    autoComplete="current-password"
                                    variant="standard"
                                    {...register('national', {
                                        required: {
                                            value: true,
                                            // massage: "Your National Id is Required",
                                        },
                                        maxLength: {
                                            value: 14,
                                            //  massage:"Max length exceeded"
                                        },
                                        minLength: {
                                            value: 14,
                                            //  massage:"Min length 14 Character"
                                        }
                                    })}

                                />

                                {errors.national && errors.national.type === "required" && (
                                    <span style={{ color: "red" }} >This is required</span>
                                )}
                                {errors.national && errors.national.type === "maxLength" && (
                                    <span style={{ color: "red" }} >Max length exceeded</span>
                                )}
                                {errors.national && errors.national.type === "minLength" && (
                                    <span style={{ color: "red" }} >Min length 14 Character</span>
                                )}

                            </div>
                            <div className="input-data">
                            <label htmlFor="user name" style={{color:'white'}}>Address</label>

                               <FormControl
                                    id="standard-Address-input"
                                    type="text"
                                    helperText="This Input is Required"
                                    autoComplete="current-password"
                                    variant="standard"

                                    {...register('address', {
                                        required: {
                                            value: true,
                                            // massage: "Your Address is Required",
                                        },
                                        maxLength: {
                                            value: 30,
                                            // massage:"Max length exceeded"
                                        },
                                        minLength: {
                                            value: 4,
                                            // massage:"Min length 4 Character"
                                        }
                                    })}



                                />

                                {errors.address && errors.address.type === "required" && (
                                    <span style={{ color: "red" }} >This is required</span>
                                )}
                                {errors.address && errors.address.type === "maxLength" && (
                                    <span style={{ color: "red" }} >Max length exceeded</span>
                                )}
                                {errors.address && errors.address.type === "minLength" && (
                                    <span style={{ color: "red" }} >Min length 4 Character</span>
                                )}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="submit-btn">
                                <div className="input-data">
                                    <div className="inner" />
                                    <button className="btn-register">
                                        Register
                                        <div className="arrow-wrapper">
                                            <div className="arrow" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </bod>
        </>
    );
}

export default Register;

const top100Films = [
    { title: "A+" },

    { title: "A-" },

    { title: "B+" },

    { title: "B-" },

    { title: "AB+" },

    { title: "AB-" },

    { title: "O+" },

    { title: "O-" },
];
