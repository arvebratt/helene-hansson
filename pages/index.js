import styled from 'styled-components';
import { ScrollingProvider } from 'react-scroll-section';
import Menu from '../components/Menu';
import { Footer } from '../components/Builders';
import Sections from '../components/Sections';

export default function Home() {
  return (
    <ScrollingProvider scrollBehavior='smooth'>
      <Menu />
      <Sections />
      <Footer>
        <a href='https://filipahfelt.se'>Copyright © 2020 Filip Åhfelt</a>
      </Footer>
    </ScrollingProvider>
  );
}