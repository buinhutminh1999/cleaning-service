// src/components/IntroVideo.js
import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f0f4f8;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: #2D9CDB;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 600px;
  line-height: 1.6;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const IntroVideo = () => {
  return (
    <VideoContainer>
      <Title>Giới Thiệu Dịch Vụ Của Chúng Tôi</Title>
      <Description>
        Khám phá dịch vụ vệ sinh chuyên nghiệp của chúng tôi qua video giới thiệu ngắn gọn này.
        Tận hưởng không gian sạch sẽ và gọn gàng với đội ngũ của chúng tôi.
      </Description>
      <VideoWrapper>
        <Video 
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          allowFullScreen 
        />
      </VideoWrapper>
    </VideoContainer>
  );
};

export default IntroVideo;
