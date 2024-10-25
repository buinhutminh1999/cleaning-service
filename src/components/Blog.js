// src/components/Blog.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f0f4f8;
  text-align: center;
`;

const BlogTitle = styled.h2`
  font-size: 2.4rem;
  color: #2D9CDB;
  margin-bottom: 2rem;
`;

const BlogGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const BlogPost = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 320px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const PostTitle = styled.h3`
  font-size: 1.6rem;
  color: #2D9CDB;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
`;

const PostDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Blog = () => {
  const posts = [
    { id: "1", title: "10 Mẹo Vệ Sinh Nhà Cửa", date: "01/10/2024", description: "Khám phá các mẹo giúp ngôi nhà của bạn luôn sạch sẽ và gọn gàng, không tốn quá nhiều thời gian." },
    { id: "2", title: "Tại Sao Nên Chọn Dịch Vụ Vệ Sinh Chuyên Nghiệp", date: "15/09/2024", description: "Lợi ích của việc thuê dịch vụ vệ sinh chuyên nghiệp và lý do tại sao bạn nên thử." },
  ];

  return (
    <BlogContainer>
      <BlogTitle>Bài Viết Mới Nhất</BlogTitle>
      <BlogGrid>
        {posts.map((post) => (
          <BlogPost key={post.id}>
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date}</PostDate>
              <PostDescription>{post.description}</PostDescription>
            </Link>
          </BlogPost>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
