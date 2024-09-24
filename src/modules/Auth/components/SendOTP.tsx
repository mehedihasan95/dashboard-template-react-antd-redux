import React from "react";
import AuthHeader from "./AuthHeader";

const SendOTP: React.FC = () => {
  return (
    <React.Fragment>
      <AuthHeader
        title='Send otp'
        description='Enter your email and password to login'
      />
    </React.Fragment>
  );
};

export default SendOTP;
