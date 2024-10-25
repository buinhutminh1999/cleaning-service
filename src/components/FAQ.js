// src/components/FAQ.js
import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Question = styled.h4`
  cursor: pointer;
  margin: 1rem 0;
  color: #2D9CDB;
`;

const Answer = styled.p`
  margin: 0.5rem 0 1rem 0;
  color: #666;
`;

const FAQ = () => {
  const faqs = [
    { question: "Dịch vụ có gì đặc biệt?", answer: "Chúng tôi cung cấp dịch vụ vệ sinh chất lượng cao và đội ngũ chuyên nghiệp." },
    { question: "Làm thế nào để đặt dịch vụ?", answer: "Bạn chỉ cần gọi điện hoặc gửi email cho chúng tôi." },
  ];

  return (
    <FAQContainer>
      <h2>Câu Hỏi Thường Gặp</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Question>{faq.question}</Question>
          <Answer>{faq.answer}</Answer>
        </div>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
