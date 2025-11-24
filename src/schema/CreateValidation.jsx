import * as Yup from "yup";
import React from "react";

const CreateValidationSchema = Yup.object().shape({
  name: Yup.string().min(3).required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("please enter your email"),
  age: Yup.number()
    .required("Please enter your age")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old") // Minimum age limit
    .max(120, "Age cannot exceed 120 years"), // Maximum age limit
gender: Yup.string().required("please select your gender")
});


export default CreateValidationSchema;