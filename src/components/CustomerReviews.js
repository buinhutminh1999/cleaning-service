import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.section`
  padding: 2rem;
  background-color: #f9f9f9; /* Đổi về màu nền giống phần còn lại của trang */
  text-align: center;
`;

const ReviewTitle = styled.h2`
  font-size: 2rem;
  color: #2D9CDB; /* Màu tiêu đề nhất quán với các tiêu đề khác */
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Giảm kích thước tiêu đề cho thiết bị di động */
  }
`;

const ReviewCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Cho phép card chuyển dòng */
  justify-content: center; /* Canh giữa các card */
  gap: 1rem; /* Khoảng cách giữa các card */
`;

const ReviewCard = styled.div`
  background-color: #ffffff; /* Để card trắng giống như các phần khác */
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  flex: 1 1 300px; /* Tăng khả năng mở rộng và chiều rộng tối thiểu */
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem; /* Giảm padding cho card trên thiết bị di động */
  }
`;

const ReviewText = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
  color: #555; /* Màu chữ phù hợp với phần còn lại */
`;

const ReviewerName = styled.h4`
  font-size: 1rem; /* Giữ kích thước phông chữ giống như các phần khác */
  color: #2D9CDB; /* Giữ màu sắc nhất quán với các phần khác */
  margin-top: 0.5rem;
`;

const CustomerReviews = () => {
  const reviews = [
    { text: "Dịch vụ tuyệt vời, tôi rất hài lòng!", name: "Nguyễn Văn A" },
    { text: "Đội ngũ làm việc rất chuyên nghiệp!", name: "Trần Thị B" },
    { text: "Giá cả hợp lý, dịch vụ chất lượng.", name: "Lê Văn C" },
  ];

  return (
    <ReviewsContainer>
      <ReviewTitle>Đánh Giá Khách Hàng</ReviewTitle>
      <ReviewCardContainer>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewText>"{review.text}"</ReviewText>
            <ReviewerName>- {review.name}</ReviewerName>
          </ReviewCard>
        ))}
      </ReviewCardContainer>
    </ReviewsContainer>
  );
};

export default CustomerReviews;
