import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const FormInput = {
  GeneralInput: ({ type = "text", label, placeholder, ...rest }) => {
    return (
      <Input
        type={type}
        label={label}
        placeholder={placeholder}
        className="w-full outline-white text-white "
        color="primary"
        variant="underlined"
        {...rest}
      />
    );
  },
  InputTextArea: ({ label, placeholder, ...rest }) => {
    return (
      <Textarea
        label={label}
        placeholder={placeholder}
        color="primary"
        className="w-full"
        minRows={3}
        variant="underlined"
        {...rest}
      />
    );
  },
};

export default FormInput;
