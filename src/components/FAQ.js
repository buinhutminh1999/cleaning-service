// src/components/FAQ.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQContainer = styled.section`
  padding: 3rem 1rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const FAQTitle = styled.h2`
  font-size: 2.4rem;
  color: #2D9CDB;
  margin-bottom: 2rem;
`;

const QuestionContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f7ff;
  }
`;

const QuestionText = styled.h4`
  font-size: 1.2rem;
  color: #2D9CDB;
  margin: 0;
`;

const Answer = styled.p`
  padding: 0 1rem;
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0 1rem 0;
  max-height: ${({ isOpen }) => (isOpen ? '100px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Dịch vụ của chúng tôi có gì đặc biệt?",
      answer: "Chúng tôi cung cấp dịch vụ vệ sinh chất lượng cao với đội ngũ nhân viên chuyên nghiệp và thân thiện, đảm bảo sự hài lòng của bạn.",
    },
    {
      question: "Làm thế nào để đặt dịch vụ?",
      answer: "Chỉ cần gọi điện thoại hoặc gửi email cho chúng tôi, và đội ngũ của chúng tôi sẽ hỗ trợ bạn trong quá trình đặt lịch hẹn nhanh chóng.",
    },
    {
      question: "Có các gói dịch vụ nào?",
      answer: "Chúng tôi cung cấp các gói dịch vụ linh hoạt từ vệ sinh nhà ở, văn phòng đến các dịch vụ vệ sinh theo yêu cầu riêng biệt.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Câu Hỏi Thường Gặp</FAQTitle>
      {faqs.map((faq, index) => (
        <div key={index}>
          <QuestionContainer onClick={() => toggleAnswer(index)}>
            <QuestionText>{faq.question}</QuestionText>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </QuestionContainer>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </div>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
