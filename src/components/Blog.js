// src/components/Blog.js
import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const BlogPost = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  display: inline-block;
  width: 300px;
`;

const Blog = () => {
  const posts = [
    { title: "10 Mẹo Vệ Sinh Nhà Cửa", date: "01/10/2024" },
    { title: "Tại Sao Nên Chọn Dịch Vụ Vệ Sinh Chuyên Nghiệp", date: "15/09/2024" },
  ];

  return (
    <BlogContainer>
      <h2>Bài Viết Mới Nhất</h2>
      <div>
        {posts.map((post, index) => (
          <BlogPost key={index}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </BlogPost>
        ))}
      </div>
    </BlogContainer>
  );
};

export default Blog;
