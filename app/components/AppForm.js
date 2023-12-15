import { Formik } from "formik";
import React from "react";


const AppForm = ({intialValues, onSubmit, validationSchema, children}) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
        {() => (<>{children}</>)}
        {/* children just makes it work for all components without having to retype anything making it truly reusable */}
    </Formik>
  );
};

export default AppForm;
