// src/components/Promotions.js
import React from 'react';
import styled from 'styled-components';

const PromotionsContainer = styled.section`
  padding: 3rem 2rem;
  background-color: #f7fafc;
  text-align: center;
`;

const PromotionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2D9CDB;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const PromotionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const PromotionCard = styled.div`
  background: linear-gradient(135deg, #FFD700 30%, #FFC107 100%);
  color: #2D9CDB;
  border-radius: 12px;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const PromotionText = styled.h3`
  font-size: 1.3rem;
  color: #2D9CDB;
  text-align: center;
  font-weight: 500;
`;

const Promotions = () => {
  const promotions = [
    { title: "Giảm 20% cho lần sử dụng dịch vụ đầu tiên!" },
    { title: "Đặt dịch vụ vệ sinh 3 lần, nhận 1 lần miễn phí!" },
    { title: "Ưu đãi mùa thu: Giảm giá 10% cho tất cả các dịch vụ!" },
  ];

  return (
    <PromotionsContainer>
      <PromotionTitle>Khuyến Mãi</PromotionTitle>
      <PromotionsWrapper>
        {promotions.map((promo, index) => (
          <PromotionCard key={index}>
            <PromotionText>{promo.title}</PromotionText>
          </PromotionCard>
        ))}
      </PromotionsWrapper>
    </PromotionsContainer>
  );
};

export default Promotions;
