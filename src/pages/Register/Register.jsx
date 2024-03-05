import { Form, useForm } from "react-hook-form";
import { useState } from "react";
import "./register.css";
import axios from "axios";

import { FormControl } from "react-bootstrap";
// import imgRegister from "../../assets/register.png";

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  async function onSubmit(values) {

    console.log(values);

    try {
      const response = await axios.post(
        "http://localhost:5000/user/add",
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.data.success) {
        // Assuming the API response has a "success" property
        throw new Error(response.data.message || "Registration failed"); // Handle specific errors or a generic message
      }

      console.log("Data sent to the API:", response.data); // Log the response data for debugging

      // Handle successful registration (e.g., redirect to login or dashboard)
      // ...
    } catch (error) {
      console.error("Error sending data:", error); // Log the error message for debugging

      // Handle errors (e.g., display an error message to the user)
      // ...
    }
  }

  return (
    <>
      <bod>
        <div className="conteiner">
          <div className="text">Register</div>

          {/* start form */}

          <form onSubmit={handleSubmit(onSubmit)} className="form-register">
            <div className="form-row">
              <div className="input-data">
                {/* enput User Name */}
                <label htmlFor="user name" style={{ color: "white" }}>
                  {" "}
                  user name
                </label>

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
                      borderColor: "#ccc", // Set your desired border color
                    },
                    label: {
                      color: "#f60000", // Set your desired label color
                    },
                  }}
                  {...register("fullName", {
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

                {errors.fullName && errors.fullName.type === "required" && (
                  <span style={{ color: "red" }}>This is required</span>
                )}
                {errors.fullName && errors.fullName.type === "maxLength" && (
                  <span style={{ color: "red" }}>Max length exceeded</span>
                )}
                {errors.fullName && errors.fullName.type === "minLength" && (
                  <span style={{ color: "red" }}>Min length 3 Character</span>
                )}
              </div>

              <div className="input-data">
                <label htmlFor="Email" style={{ color: "white" }}>
                  Email
                </label>
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
                  <span style={{ color: "red" }}>
                    Entered value does not match email format
                  </span>
                )}
              </div>
              <div className="input-data">
                <label htmlFor="password" style={{ color: "white" }}>
                  Password
                </label>
                <FormControl
                  id="standard-password-input"
                  type="password"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("password", {
                    required: {
                      value: true,
                      //   massage: "Your password is Required",
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
                  <span style={{ color: "red" }}>
                    Entered value does not match password format
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <label htmlFor="phoneN" style={{ color: "white" }}>
                  Phone Number
                </label>

                <FormControl
                  id="standard-Number-input"
                  type="Number"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("phoneNr", {
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

                {errors.phoneNr && errors.phoneNr.type === "required" && (
                  <span style={{ color: "red" }}>This is required</span>
                )}
                {errors.phoneNr && errors.phoneNr.type === "maxLength" && (
                  <span style={{ color: "red" }}>Max length exceeded</span>
                )}
                {errors.phoneNr && errors.phoneNr.type === "pattern" && (
                  <span style={{ color: "red" }}>
                    Entered value does not match email format
                  </span>
                )}
              </div>
              <div className="input-data">
                <label htmlFor="user name" style={{ color: "white" }}>
                  National Id
                </label>

                <FormControl
                  id="standard-NationalId-input"
                  type="number"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("nationalId", {
                    required: {
                      value: true,
                      // massage: "Your nationalId Id is Required",
                    },
                    maxLength: {
                      value: 14,
                      //  massage:"Max length exceeded"
                    },
                    minLength: {
                      value: 14,
                      //  massage:"Min length 14 Character"
                    },
                  })}
                />

                {errors.nationalId && errors.nationalId.type === "required" && (
                  <span style={{ color: "red" }}>This is required</span>
                )}
                {errors.nationalId &&
                  errors.nationalId.type === "maxLength" && (
                    <span style={{ color: "red" }}>Max length exceeded</span>
                  )}
                {errors.nationalId &&
                  errors.nationalId.type === "minLength" && (
                    <span style={{ color: "red" }}>
                      Min length 14 Character
                    </span>
                  )}
              </div>
              <div className="input-data">
                <label htmlFor="address" style={{ color: "white" }}>
                  Address
                </label>

                <FormControl
                  id="standard-Address-input"
                  type="text"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("address", {
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
                    },
                  })}
                />

                {errors.address && errors.address.type === "required" && (
                  <span style={{ color: "red" }}>This is required</span>
                )}
                {errors.address && errors.address.type === "maxLength" && (
                  <span style={{ color: "red" }}>Max length exceeded</span>
                )}
                {errors.address && errors.address.type === "minLength" && (
                  <span style={{ color: "red" }}>Min length 4 Character</span>
                )}
              </div>
              
            </div>
            <div className="form-row">
            <div className="mydict">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      defaultChecked=""
                      value={"female"}
                      {...register("gender")}
                    />
                    <span>Male</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={"male"}
                      {...register("gender")}
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>
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
