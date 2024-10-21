import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContactThunk } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    // const newContact = {
    //   name: values.name,
    //   number: values.number,
    // };

    dispatch(addContactThunk(values));
    options.resetForm();
  };

  // const nameRe = /^[ a-zA-Z\-\’]+$/;
  const numberRe = /^[0-9.-]*$/;

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      // .matches(nameRe, "Name is invalid")
      .min(3, "Name is too short!")
      .max(50, "Name should contain max 50 symbols")
      .required("Name is required"),
    number: Yup.string()
      .matches(numberRe, "Number is invalid")
      .min(3, "Number is too short!")
      .max(50, "Number should contain max 50 symbols")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.form}>
        <label className={s.lable}>
          <span>Name</span>
          <Field type="text" name="name" className={s.input}></Field>
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={s.lable}>
          <span>Number</span>
          <Field name="number" className={s.input}></Field>
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
