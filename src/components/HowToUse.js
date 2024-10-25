// src/components/HowToUse.js
import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaCalendarAlt, FaBroom, FaStar } from 'react-icons/fa';

const HowToUseContainer = styled.section`
  padding: 3rem 1.5rem;
  background-color: #f7fafc;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2D9CDB;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`;

const StepCard = styled.div`
  background-color: white;
  width: 100%;
  max-width: 250px;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const StepIcon = styled.div`
  font-size: 2rem;
  color: #FFD700;
  margin-bottom: 1rem;
`;

const StepText = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`;

const HowToUse = () => {
  return (
    <HowToUseContainer>
      <Title>Cách Sử Dụng Dịch Vụ</Title>
      <StepsWrapper>
        <StepCard>
          <StepIcon><FaPhoneAlt /></StepIcon>
          <StepText>Bước 1: Liên hệ với chúng tôi qua số điện thoại hoặc email.</StepText>
        </StepCard>
        <StepCard>
          <StepIcon><FaCalendarAlt /></StepIcon>
          <StepText>Bước 2: Chọn dịch vụ bạn cần và đặt lịch hẹn.</StepText>
        </StepCard>
        <StepCard>
          <StepIcon><FaBroom /></StepIcon>
          <StepText>Bước 3: Đội ngũ của chúng tôi sẽ đến và thực hiện dịch vụ.</StepText>
        </StepCard>
        <StepCard>
          <StepIcon><FaStar /></StepIcon>
          <StepText>Bước 4: Đánh giá dịch vụ và cho chúng tôi biết ý kiến của bạn!</StepText>
        </StepCard>
      </StepsWrapper>
    </HowToUseContainer>
  );
};

export default HowToUse;
