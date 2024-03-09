import Button from "@/src/components/ui/Button";
import { LabelledInput } from "@/src/components/ui/LabelledInput";
import React from "react";

const Signup = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <LabelledInput label="Name" placeholder="Ramanuj" />
      <LabelledInput label="Email" placeholder="ramanuj@gmail.com" />
      <LabelledInput label="Password" type={"password"} placeholder="123456" />
      <Button label="Sign up" />
    </div>
  );
};

export default Signup;
