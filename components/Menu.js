import React from 'react';
import Head from 'next/head';
import { Item, Nav, NavContainer, MainList } from './Builders';
import { SectionLink } from 'react-scroll-section';

const CONFIRM_KEYS = [13, 32];

const A11yItem = (props) => (
  <Item
    onKeyDown={(e) => {
      if (CONFIRM_KEYS.includes(e.keyCode)) {
        e.preventDefault();
        props.onClick();
      }
    }}
    tabIndex='1'
    {...props}
  />
);

const MenuSection = ({ section, children }) => (
  <SectionLink section={section}>
    {(link) => (
      <A11yItem onClick={link.onClick} selected={link.isSelected}>
        {children}
      </A11yItem>
    )}
  </SectionLink>
);

const Menu = () => (
  <>
    <Head>
      <title>Helene Hansson</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav>
      <NavContainer>
        <MainList>
          <MenuSection section='home'>HOME</MenuSection>
          <MenuSection section='faq'>FAQ</MenuSection>
          <MenuSection section='contact'>CONTACT</MenuSection>
        </MainList>
      </NavContainer>
    </Nav>
  </>
);

export default Menu;