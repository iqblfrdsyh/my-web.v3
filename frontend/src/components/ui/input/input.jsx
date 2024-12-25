import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const FormInput = {
  GeneralInput: ({ type, label, placeholder }) => {
    return (
      <Input
        type={type || "text"}
        label={label}
        placeholder={placeholder}
        className="w-full outline-black"
        variant="underlined"
      />
    );
  },
  InputTextArea: ({ label, placeholder }) => {
    return (
      <Textarea
        label={label}
        placeholder={placeholder}
        className="w-full"
        minRows={3}
        variant="underlined"
      />
    );
  },
};

export default FormInput;
