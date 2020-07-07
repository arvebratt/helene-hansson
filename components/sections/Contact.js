import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Title>Helene Hansson 3</Title>
      <Description>do what u want</Description>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.img`
  margin-top: 8rem;
  height: 30rem;
  @media screen and (max-width: 768px) {
    height: 15rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Status = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #ebcb8b;
`;
const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
`;
