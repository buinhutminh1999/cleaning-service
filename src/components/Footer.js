import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2D9CDB;
  color: white;
  padding: 2.5rem 1rem;
  text-align: center;
  border-top: 5px solid #FFD700;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const Section = styled.div`
  max-width: 220px;
  text-align: left;

  @media (max-width: 480px) {
    max-width: 100%; /* Đảm bảo các phần mở rộng khi ở chế độ di động */
    margin-bottom: 1.5rem; /* Khoảng cách giữa các phần */
  }
`;

const SectionTitle = styled.h4`
  font-size: 1.4rem;
  color: #FFD700;
  margin-bottom: 0.8rem;
  font-weight: bold;
`;

const LinkItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: #FFD700;
    text-decoration: underline;
  }
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  color: #eee;
  margin: 0.3rem 0;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #FFD700;
    transform: scale(1.1);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 1rem;
  font-style: italic;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <SectionTitle>Về Chúng Tôi</SectionTitle>
          <LinkItem to="/about">Giới thiệu</LinkItem>
          <LinkItem to="/services">Dịch Vụ</LinkItem>
          <LinkItem to="/contact">Liên Hệ</LinkItem>
        </Section>
        <Section>
          <SectionTitle>Liên Hệ</SectionTitle>
          <ContactInfo>Email: info@dichvuvesinh.com</ContactInfo>
          <ContactInfo>Điện thoại: 0123 456 789</ContactInfo>
          <ContactInfo>Địa chỉ: 123 Đường A, TP. HCM</ContactInfo>
        </Section>
        <Section>
          <SectionTitle>Theo Dõi Chúng Tôi</SectionTitle>
          <SocialMediaContainer>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          </SocialMediaContainer>
        </Section>
      </FooterContent>
      <Copyright>&copy; 2024 Dịch Vụ Vệ Sinh. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
