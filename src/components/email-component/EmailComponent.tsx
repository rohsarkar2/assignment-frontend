import { useRef } from "react";
import { InputText } from "primereact/inputtext";
import "./EmailComponent.css";
import { Colors } from "../../configs/Colors";
import * as Yup from "yup";
import { Button } from "primereact/button";
import { Formik, Form, ErrorMessage } from "formik";

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email")
    .email("Invalid email"),
});

export const EmailComponent = () => {
  const formikRef = useRef(null);

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      console.log(values); // You can perform your submit logic here
      setSubmitting(false);
    }, 400);
  };

  return (
    <div
      className="flex flex-column justify-content-center align-items-center px-8 py-8"
      style={{ background: "rgba(254, 188, 148, 0.2)" }}
    >
      <p
        style={{ fontSize: 14, fontWeight: "bolder", color: Colors.lightGreen }}
      >
        Newsletter
      </p>
      <h3 style={{ margin: 0, padding: 0 }}>Watch our Courses</h3>
      <p
        style={{
          fontWeight: "300",
          fontSize: 12,
          textAlign: "center",
        }}
      >
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical Physics: Newtonian mechanics
      </p>
      <Formik
        initialValues={{ email: "" }}
        innerRef={formikRef}
        validationSchema={EmailSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          isSubmitting,
          errors,
          touched,
        }) => (
          <>
            <Form className="p-inputgroup flex-1">
              <InputText
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "p-invalid" : ""}
              />

              <Button
                label={isSubmitting ? "Subscribing..." : "Subscribe"}
                type="submit"
                disabled={isSubmitting}
                style={{ background: Colors.lightGreen }}
              />
            </Form>
            <ErrorMessage name="email" component="div" className="p-error" />
          </>
        )}
      </Formik>
    </div>
  );
};
