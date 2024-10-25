// src/pages/Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9; /* Màu nền giống như các phần khác */
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #2D9CDB; /* Màu tiêu đề */
  margin-bottom: 1.5rem;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  width: 300px; /* Chiều rộng của card */
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Hiệu ứng nâng lên khi hover */
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2D9CDB; /* Màu tiêu đề dịch vụ */
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666; /* Màu chữ mô tả dịch vụ */
`;

const Services = () => {
  const services = [
    { title: "Vệ Sinh Nhà Ở", description: "Dọn dẹp nhà cửa, đảm bảo không gian sống sạch sẽ và thoải mái." },
    { title: "Vệ Sinh Văn Phòng", description: "Đảm bảo môi trường làm việc sạch sẽ, chuyên nghiệp cho công ty bạn." },
    { title: "Vệ Sinh Cửa Kính", description: "Làm sạch cửa kính, mang lại vẻ sáng bóng và chuyên nghiệp." },
    { title: "Dọn Dẹp Sau Xây Dựng", description: "Dịch vụ dọn dẹp hoàn hảo sau khi xây dựng hoặc sửa chữa." },
    { title: "Vệ Sinh Thảm", description: "Dịch vụ giặt thảm, loại bỏ bụi bẩn và mùi hôi." },
  ];

  return (
    <ServicesContainer>
      <SectionTitle>Dịch Vụ Của Chúng Tôi</SectionTitle>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceList>
    </ServicesContainer>
  );
};

export default Services;
