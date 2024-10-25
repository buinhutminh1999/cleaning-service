// src/components/Promotions.js
import React from 'react';
import styled from 'styled-components';

const PromotionsContainer = styled.section`
  padding: 2rem;
  background-color: #f9f9f9; /* Giữ màu nền nhất quán */
  text-align: center;
`;

const PromotionTitle = styled.h2`
  font-size: 2rem;
  color: #2D9CDB; /* Màu tiêu đề phù hợp với phần còn lại */
  margin-bottom: 1.5rem;
`;

const PromotionCard = styled.div`
  background-color: #FFD700; /* Màu vàng nổi bật cho các khuyến mãi */
  border-radius: 12px; /* Bo tròn hơn cho cảm giác mềm mại */
  padding: 2rem; /* Tăng không gian bên trong card */
  margin: 1rem;
  display: inline-block;
  width: 280px; /* Đặt chiều rộng cố định để đồng nhất */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Thêm đổ bóng cho card */
  transition: transform 0.3s ease; /* Hiệu ứng hover */
  
  &:hover {
    transform: translateY(-5px); /* Nâng card lên khi hover */
  }
`;

const PromotionText = styled.h3`
  font-size: 1.2rem;
  color: #2D9CDB; /* Màu chữ phù hợp với tiêu đề */
  text-align: center; /* Căn giữa văn bản */
`;

const Promotions = () => {
  const promotions = [
    { title: "Giảm 20% cho lần sử dụng dịch vụ đầu tiên!" },
    { title: "Khuyến mãi: Đặt dịch vụ vệ sinh 3 lần, nhận 1 lần miễn phí!" },
  ];

  return (
    <PromotionsContainer>
      <PromotionTitle>Khuyến Mãi</PromotionTitle>
      <div>
        {promotions.map((promo, index) => (
          <PromotionCard key={index}>
            <PromotionText>{promo.title}</PromotionText>
          </PromotionCard>
        ))}
      </div>
    </PromotionsContainer>
  );
};

export default Promotions;
