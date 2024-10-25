// src/components/IntroVideo.js
import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Video = styled.iframe`
  width: 80%;
  height: 400px;
  border: none;
`;

const IntroVideo = () => {
  return (
    <VideoContainer>
      <h2>Giới Thiệu Dịch Vụ Của Chúng Tôi</h2>
      <Video src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowFullScreen></Video>
    </VideoContainer>
  );
};

export default IntroVideo;
