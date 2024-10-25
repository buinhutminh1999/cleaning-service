// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9; /* Màu nền cho trang */
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2D9CDB; /* Màu tiêu đề */
  margin-bottom: 1rem;
  font-weight: bold;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666; /* Màu chữ mô tả */
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamTitle = styled.h3`
  font-size: 2rem;
  color: #2D9CDB; /* Màu tiêu đề đội ngũ */
  margin-bottom: 1rem;
  font-weight: bold;
`;

const MembersList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem; /* Khoảng cách giữa các thành viên */
`;

const TeamMember = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 200px; /* Chiều rộng của mỗi thành viên */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Hiệu ứng nâng lên khi hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MemberName = styled.h4`
  font-size: 1.2rem;
  color: #2D9CDB; /* Màu tên thành viên */
  margin: 0.5rem 0;
  font-weight: bold;
`;

const MemberRole = styled.p`
  font-size: 0.9rem;
  color: #666; /* Màu vai trò thành viên */
  margin: 0.5rem 0;
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>Giới Thiệu Về Chúng Tôi</SectionTitle>
      <SectionDescription>
        Dịch Vụ Vệ Sinh là công ty cung cấp dịch vụ vệ sinh chuyên nghiệp với hơn 10 năm kinh nghiệm trong ngành. 
        Chúng tôi cam kết mang lại không gian sạch sẽ, an toàn và thoải mái cho khách hàng.
      </SectionDescription>

      <SectionTitle>Sứ Mệnh Của Chúng Tôi</SectionTitle>
      <SectionDescription>
        Sứ mệnh của chúng tôi là cung cấp dịch vụ vệ sinh chất lượng cao với giá cả hợp lý, đáp ứng nhu cầu của mọi khách hàng. 
        Chúng tôi tin rằng môi trường sạch sẽ sẽ góp phần nâng cao chất lượng cuộc sống.
      </SectionDescription>

      <TeamContainer>
        <TeamTitle>Đội Ngũ Của Chúng Tôi</TeamTitle>
        <MembersList>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Nguyễn Văn A" />
            <MemberName>Nguyễn Văn A</MemberName>
            <MemberRole>Quản lý</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Trần Thị B" />
            <MemberName>Trần Thị B</MemberName>
            <MemberRole>Nhân viên vệ sinh</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Lê Văn C" />
            <MemberName>Lê Văn C</MemberName>
            <MemberRole>Nhân viên hỗ trợ</MemberRole>
          </TeamMember>
        </MembersList>
      </TeamContainer>
    </AboutContainer>
  );
};

export default About;
