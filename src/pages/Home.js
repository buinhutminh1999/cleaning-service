import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomerReviews from '../components/CustomerReviews';
import Promotions from '../components/Promotions';
import HowToUse from '../components/HowToUse';
import Blog from '../components/Blog';
import IntroVideo from '../components/IntroVideo';
import ProjectGallery from '../components/ProjectGallery';
import FAQ from '../components/FAQ';

const Container = styled.div`
  padding: 2rem;
  background-color: #f0f4f8;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem; /* Giảm padding cho thiết bị di động */
  }
`;

const HeroSection = styled.section`
  background-image: url('/path/to/background-image.jpg');
  background-size: cover;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Giảm padding cho thiết bị di động */
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(45, 156, 219, 0.7);
  border-radius: 12px;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.2rem; /* Giảm kích thước tiêu đề cho thiết bị di động */
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Giảm kích thước phụ đề cho thiết bị di động */
  }
`;

const ServiceButton = styled(Link)`
  padding: 0.8rem 2.5rem;
  background-color: #FFD700;
  color: #2D9CDB;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFC107;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.8rem; /* Giảm padding cho nút trên thiết bị di động */
  }
`;

const ServicesSection = styled.section`
  margin: 2rem 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: #2D9CDB;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem; /* Giảm kích thước tiêu đề cho thiết bị di động */
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  width: 280px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 90%; /* Để card chiếm 90% chiều rộng trên thiết bị di động */
    max-width: 300px; /* Giới hạn chiều rộng tối đa */
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2D9CDB;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const AdditionalInfoSection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #e1f5fe;
  text-align: center;
  border-radius: 12px;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  color: #2D9CDB;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Giảm kích thước tiêu đề thông tin cho thiết bị di động */
  }
`;

const InfoDescription = styled.p`
  font-size: 1rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Giảm kích thước văn bản cho thiết bị di động */
  }
`;

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Chào Mừng Đến Với Dịch Vụ Vệ Sinh Chuyên Nghiệp</HeroTitle>
          <HeroSubtitle>
            Chúng tôi cung cấp dịch vụ vệ sinh chất lượng cao cho nhà ở, văn phòng và các khu vực công cộng.
          </HeroSubtitle>
          <ServiceButton to="/contact">Liên Hệ Ngay</ServiceButton>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>Dịch Vụ Nổi Bật</SectionTitle>
        <ServiceList>
          <ServiceCard>
            <ServiceTitle>Vệ Sinh Nhà Ở</ServiceTitle>
            <ServiceDescription>
              Dọn dẹp nhà ở, đảm bảo không gian sống sạch sẽ và thoải mái.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Vệ Sinh Văn Phòng</ServiceTitle>
            <ServiceDescription>
              Đảm bảo môi trường làm việc sạch sẽ, chuyên nghiệp cho công ty bạn.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Vệ Sinh Cửa Kính</ServiceTitle>
            <ServiceDescription>
              Làm sạch cửa kính, mang lại vẻ sáng bóng và chuyên nghiệp.
            </ServiceDescription>
          </ServiceCard>
        </ServiceList>
      </ServicesSection>

      <AdditionalInfoSection>
        <InfoTitle>Tại Sao Chọn Chúng Tôi?</InfoTitle>
        <InfoDescription>
          Chúng tôi tự hào về chất lượng dịch vụ và cam kết mang lại không gian sống và làm việc sạch sẽ cho mọi
          khách hàng. Với đội ngũ chuyên nghiệp và quy trình làm việc khoa học, dịch vụ của chúng tôi đảm bảo mang
          lại sự hài lòng tuyệt đối.
        </InfoDescription>
      </AdditionalInfoSection>

      <CustomerReviews />
      <Promotions />
      <HowToUse />
      <Blog />
      <IntroVideo />
      <ProjectGallery />
      <FAQ />
    </Container>
  );
};

export default Home;
