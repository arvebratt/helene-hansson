import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";

const Faq = () => {
  return (
    <StyledContainer>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <Title>Om mig</Title>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Description>
            Jag arbetar som socionom i det offentligas tjänst och har arbetat
            inom de flesta områdena inom socialtjänsten varav de senaste tio
            åren med äldreomsorg. Sedan i höstas arbetar jag med innovation av
            hälso- och sjukvård.
            <br/><br/>
            Jag och min familj tillbringar gärna vår fritid i naturen, antingen
            i vår koloni eller i Härjedalen där vi har en stuga. Musik, kultur
            och natur är mina största intressen.
            <br/><br/>
            Jag är enklast att nå via epost: Helen.hansson55@gmail.com
            <br/><br/>
            Välkommen att ta kontakt!
          </Description>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Faq;

const StyledContainer = styled(Container)`
  position: absolute;
  top: 115%;
  max-width: 100%;
  padding-left: 10%;
  padding-right: 10%;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media screen and (max-width: 600px) {
    top: 110%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accent4};
  margin-top: 3rem;
  margin-bottom: 0rem;
  font-size: 4rem !important;
  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2.5rem !important;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0rem;
    text-align: center;
    font-size: 2rem !important;
  }
`;

const UnderTitle = styled.h1`
  color: ${(props) => props.theme.accent5};
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-size: 3rem !important;
  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.75rem !important;
  }

  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 1.75rem !important;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  text-align: left;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;
