// src/components/HowToUse.js
import React from 'react';
import styled from 'styled-components';

const HowToUseContainer = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

const Steps = styled.ul`
  list-style: none;
  padding: 0;
`;

const Step = styled.li`
  margin: 1rem 0;
`;

const HowToUse = () => {
  return (
    <HowToUseContainer>
      <h2>Cách Sử Dụng Dịch Vụ</h2>
      <Steps>
        <Step>Bước 1: Liên hệ với chúng tôi qua số điện thoại hoặc email.</Step>
        <Step>Bước 2: Chọn dịch vụ bạn cần và đặt lịch hẹn.</Step>
        <Step>Bước 3: Đội ngũ của chúng tôi sẽ đến và thực hiện dịch vụ.</Step>
        <Step>Bước 4: Đánh giá dịch vụ và cho chúng tôi biết ý kiến của bạn!</Step>
      </Steps>
    </HowToUseContainer>
  );
};

export default HowToUse;
