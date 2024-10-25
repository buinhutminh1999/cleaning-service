import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2D9CDB;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #247ba0;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Chuyển sang chiều dọc trên thiết bị di động */
    align-items: flex-start; /* Căn trái cho các phần tử */
  }
`;

const Logo = styled(Link)`
  font-size: 2.5rem; /* Tăng kích thước logo */
  font-weight: bold;
  color: #FFD700;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #FFC107;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem; /* Thêm khoảng cách dưới logo */
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Chuyển sang chiều dọc trên thiết bị di động */
    width: 100%; /* Để nav chiếm toàn bộ chiều rộng */
    display: ${props => (props.isOpen ? 'flex' : 'none')}; /* Hiển thị hoặc ẩn nav dựa trên trạng thái */
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem; /* Tăng kích thước chữ */
  font-weight: 500;
  padding: 0.5rem;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 50%;
    background-color: #FFD700;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &:hover {
    color: #FFD700;
  }
`;

const ContactButton = styled(Link)`
  padding: 0.6rem 1.2rem;
  background-color: #FFD700;
  color: #2D9CDB;
  font-weight: bold;
  border-radius: 25px;
  border: 2px solid #2D9CDB;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFC107;
    transform: translateY(-2px) scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%; /* Để nút chiếm toàn bộ chiều rộng trên thiết bị di động */
    text-align: center; /* Căn giữa văn bản */
  }
`;

const MenuToggle = styled.button`
  display: none; /* Ẩn nút menu trên màn hình lớn */
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Hiển thị nút menu trên thiết bị di động */
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái mở/đóng menu

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <HeaderContainer>
      <Logo to="/">Dịch Vụ Vệ Sinh</Logo>
      <MenuToggle onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Biểu tượng menu */}
      </MenuToggle>
      <Nav isOpen={isOpen}>
        <NavLink to="/">Trang Chủ</NavLink>
        <NavLink to="/services">Dịch Vụ</NavLink>
        <NavLink to="/about">Về Chúng Tôi</NavLink>
        <ContactButton to="/contact">Liên Hệ</ContactButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
