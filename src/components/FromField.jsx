import React from "react";
import { useForm } from "react-hook-form";

const FromField = ({ title, type = "text", fieldName }) => {
  const { register } = useForm();

  return (
    <div className="formField">
      <label className="formTitle">{title}</label>
      <input className="formInput" type={type} {...register(fieldName)} />
    </div>
  );
};

export default FromField;
