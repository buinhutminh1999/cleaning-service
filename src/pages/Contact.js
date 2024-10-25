// src/pages/Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2D9CDB;
  margin-bottom: 1rem;
`;

const ContactForm = styled(Form)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Input = styled(Field)`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const TextArea = styled(Field)`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #2D9CDB;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1b7bbf;
  }
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng nhập tên của bạn'),
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phone: Yup.string().required('Vui lòng nhập số điện thoại'),
  message: Yup.string().required('Vui lòng nhập nội dung tin nhắn'),
});

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert(`Cảm ơn ${values.name}, chúng tôi sẽ liên hệ với bạn sớm nhất có thể.`);
    resetForm();
  };

  return (
    <Container>
      <Title>Liên Hệ Với Chúng Tôi</Title>
      <Formik
        initialValues={{ name: '', email: '', phone: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <ContactForm>
            <Label htmlFor="name">Tên của bạn</Label>
            <Input id="name" name="name" type="text" />
            <ErrorMessage name="name" component={ErrorText} />

            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" />
            <ErrorMessage name="email" component={ErrorText} />

            <Label htmlFor="phone">Số điện thoại</Label>
            <Input id="phone" name="phone" type="text" />
            <ErrorMessage name="phone" component={ErrorText} />

            <Label htmlFor="message">Nội dung tin nhắn</Label>
            <TextArea id="message" name="message" as="textarea" />
            <ErrorMessage name="message" component={ErrorText} />

            <SubmitButton type="submit">Gửi Tin Nhắn</SubmitButton>
          </ContactForm>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;