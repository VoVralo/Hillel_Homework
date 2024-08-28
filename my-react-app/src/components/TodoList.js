import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  todo: Yup.string()
    .min(5, 'Поле має містити не менше 5 символів')
    .required('Це поле обов\'язкове'),
});

const TodoList = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ todo: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="todo">Todo:</label>
            <Field type="text" id="todo" name="todo" />
            <ErrorMessage name="todo" component="div" className="error" />
          </div>
          <button type="submit">Додати</button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoList;
