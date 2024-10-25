// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #2D9CDB;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #FFD700;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;

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
  padding: 0.5rem 1rem;
  background-color: #FFD700;
  color: #2D9CDB;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFC107;
    transform: scale(1.05);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">Dịch Vụ Vệ Sinh</Logo>
      <Nav>
        <NavLink to="/">Trang Chủ</NavLink>
        <NavLink to="/services">Dịch Vụ</NavLink>
        <NavLink to="/about">Về Chúng Tôi</NavLink>
        <ContactButton to="/contact">Liên Hệ</ContactButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
