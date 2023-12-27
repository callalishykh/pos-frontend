import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";

let adminSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required().min(8).max(25),
});

const AdminCreatePage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: adminSchema,
    onSubmit: (values) => console.log("This is submitted values", values),
  });

  return (
    <FormikProvider value={formik}>
      <form>
        <label>Name</label>
        <Field name='name' />
        <ErrorMessage name='name' />
        <br />

        <label>Email</label>
        <Field name='email' />
        <ErrorMessage name='email' />
        <br />

        <label>Password</label>
        <Field name='password' />
        <ErrorMessage name='password' />
        <br />
        <button onClick={formik.handleSubmit}>Create</button>
      </form>
    </FormikProvider>
  );
};
export default AdminCreatePage;
