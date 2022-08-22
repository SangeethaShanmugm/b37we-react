import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
  .string()
  .min(5, "Need a longer email 😃")
  .required("Why not fill the email")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter Valid email"),
  password: yup
  .string()
  .min(8, "Need a longer Password 😃")
  .max(12, "Too much Password")
  .required("Why not fill the password")
  
})

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
      id="email"
      name="email"
      value={formik.values.email} 
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      type="email" 
      placeholder="Email" />
      <br />
      {formik.touched.email && formik.errors.email? formik.errors.email : ''}
      <br />
      <input 
      id="password"
      name="password"
      value={formik.values.password} 
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      type="password" 
      placeholder="Password" />
      <br />
      {formik.touched.password && formik.errors.password? formik.errors.password : '' }
     
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
