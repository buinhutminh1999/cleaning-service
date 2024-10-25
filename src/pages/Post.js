// src/pages/Post.js
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const PostContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  max-width: 800px;
  margin: auto;
`;

const PostTitle = styled.h2`
  font-size: 2.4rem;
  color: #2D9CDB;
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Post = () => {
  const { id } = useParams();
  
  // Thay thế bằng dữ liệu thực tế hoặc API
  const posts = [
    {
      id: '1',
      title: "10 Mẹo Vệ Sinh Nhà Cửa",
      date: "01/10/2024",
      content: "Chi tiết về mẹo vệ sinh nhà cửa..."
    },
    {
      id: '2',
      title: "Tại Sao Nên Chọn Dịch Vụ Vệ Sinh Chuyên Nghiệp",
      date: "15/09/2024",
      content: "Chi tiết về lợi ích của việc thuê dịch vụ vệ sinh chuyên nghiệp..."
    }
  ];

  const post = posts.find(post => post.id === id);

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date}</PostDate>
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
};

export default Post;
