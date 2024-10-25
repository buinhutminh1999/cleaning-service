// src/components/ProjectGallery.js
import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

const GalleryImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  margin: 1rem;
`;

const ProjectGallery = () => {
  const images = [
    "image1_url.jpg",
    "image2_url.jpg",
    "image3_url.jpg"
  ];

  return (
    <GalleryContainer>
      <h2>Hình Ảnh Dự Án</h2>
      <div>
        {images.map((image, index) => (
          <GalleryImage key={index} src={image} alt={`Project ${index + 1}`} />
        ))}
      </div>
    </GalleryContainer>
  );
};

export default ProjectGallery;
