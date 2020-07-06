import { ScrollingProvider, SectionLink, Section } from "react-scroll-section";

const App = () => (
  <ScrollingProvider>
    <div>
      <SectionLink section="home">
        {({ onClick, isSelected }) => (
          <Item onClick={onClick} selected={isSelected}>
            Home
          </Item>
        )}
      </SectionLink>
      <SectionLink section="about">
        {({ onClick, isSelected }) => (
          <Item onClick={onClick} selected={isSelected}>
            About
          </Item>
        )}
      </SectionLink>
    </div>
    <Section id="home">Home section</Section>
    <Section id="about">About section</Section>
  </ScrollingProvider>
);

export default App;
