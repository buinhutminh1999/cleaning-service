import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const GalleryTitle = styled.h2`
  font-size: 2.4rem;
  color: #2D9CDB;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem; /* Giảm kích thước tiêu đề trên thiết bị di động */
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Điều chỉnh minmax cho kích thước nhỏ hơn */
  gap: 1.5rem;
  justify-items: center;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto; /* Đặt chiều cao tự động để duy trì tỷ lệ khung hình */
  max-width: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectGallery = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Dự+án+1",
    "https://via.placeholder.com/300x200?text=Dự+án+2",
    "https://via.placeholder.com/300x200?text=Dự+án+3",
    "https://via.placeholder.com/300x200?text=Dự+án+4",
    "https://via.placeholder.com/300x200?text=Dự+án+5",
    "https://via.placeholder.com/300x200?text=Dự+án+6",
  ];

  return (
    <GalleryContainer>
      <GalleryTitle>Hình Ảnh Dự Án</GalleryTitle>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryImage key={index} src={image} alt={`Dự án ${index + 1}`} />
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default ProjectGallery;
