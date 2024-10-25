// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9; /* Màu nền cho trang */
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2D9CDB; /* Màu tiêu đề */
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #666; /* Màu chữ mô tả */
  margin-bottom: 2rem;
`;

const TeamContainer = styled.div`
  margin-top: 2rem;
`;

const TeamTitle = styled.h3`
  font-size: 1.5rem;
  color: #2D9CDB; /* Màu tiêu đề đội ngũ */
  margin-bottom: 1rem;
`;

const TeamMember = styled.div`
  display: inline-block;
  width: 200px; /* Chiều rộng của mỗi thành viên */
  margin: 0 1rem;
  text-align: center;
`;

const MemberName = styled.h4`
  font-size: 1.2rem;
  color: #2D9CDB; /* Màu tên thành viên */
`;

const MemberRole = styled.p`
  font-size: 0.9rem;
  color: #666; /* Màu vai trò thành viên */
`;

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>Giới Thiệu Về Chúng Tôi</SectionTitle>
      <SectionDescription>
        Dịch Vụ Vệ Sinh là công ty cung cấp dịch vụ vệ sinh chuyên nghiệp với hơn 10 năm kinh nghiệm trong ngành. Chúng tôi cam kết mang lại không gian sạch sẽ, an toàn và thoải mái cho khách hàng.
      </SectionDescription>

      <SectionTitle>Sứ Mệnh Của Chúng Tôi</SectionTitle>
      <SectionDescription>
        Sứ mệnh của chúng tôi là cung cấp dịch vụ vệ sinh chất lượng cao với giá cả hợp lý, đáp ứng nhu cầu của mọi khách hàng. Chúng tôi tin rằng môi trường sạch sẽ sẽ góp phần nâng cao chất lượng cuộc sống.
      </SectionDescription>

      <TeamContainer>
        <TeamTitle>Đội Ngũ Của Chúng Tôi</TeamTitle>
        <TeamMember>
          <MemberName>Nguyễn Văn A</MemberName>
          <MemberRole>Quản lý</MemberRole>
        </TeamMember>
        <TeamMember>
          <MemberName>Trần Thị B</MemberName>
          <MemberRole>Nhân viên vệ sinh</MemberRole>
        </TeamMember>
        <TeamMember>
          <MemberName>Lê Văn C</MemberName>
          <MemberRole>Nhân viên hỗ trợ</MemberRole>
        </TeamMember>
      </TeamContainer>
    </AboutContainer>
  );
};

export default About;
