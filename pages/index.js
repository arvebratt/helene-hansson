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
        <a href='https://arvebratt.com'>Copyright © 2020 Alexander Arvebratt</a>
      </Footer>
    </ScrollingProvider>
  );
}