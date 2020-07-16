import { Container, Avatar, Grid } from "@material-ui/core";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledContainer maxWidth='md'>
      <Grid container>
        <Grid item xs={12} sm={3} lg={3}>
          <StyledAvatar
            alt='helenhansson'
            variant='rounded'
            src='/helenhansson.jpg'
          />
        </Grid>
        <Grid item xs={12} sm={9} lg={9}>
          <Title>Helen Hansson</Title>
          <UnderTitle>Humanisterna</UnderTitle>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Description>
            Jag utbildades hösten 2016 till officiant genom Humanisterna och har
            länge ansett det vara viktigt att det finns alternativ till kyrkliga
            ceremonier.
            <br/><br/>
            Ceremonier är viktiga och har stor betydelse, de bidrar till att
            skapa gemenskap och meningsfullhet och kan vara ett vackert minne
            att vila och glädjas i. Min förhoppning är att kunna vara behjälplig
            att kunna skapa en sådan minnesvärd stund.
            <br/><br/>
            Jag delar Humanisternas värderingar kring att ett samhälle ska bygga
            på förnuft och medmänsklighet. Jag tror på tolerans mot oliktänkande
            och på människors förmåga att själv skapa en värld av solidaritet,
            utveckling och tillit till varandra.
            <br/><br/>
            Utformningen av ceremonin gör vi tillsammans vid ett eller om det
            behövs flera personliga möten. Jag utarbetar därefter ett förslag
            som jag skickar för godkännande och som är öppet för korrigeringar.
            Anhöriga har alltid sista ordet i planeringsarbetet.
            <br/><br/>
            Jag bor i Malmö och kan ta uppdrag som officiant för barnvälkomnande
            och begravningar i Malmö och södra Skåne.
          </Description>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Home;

const StyledContainer = styled(Container)`
  position: absolute;
  top: 15%;
  max-width: 100%;
  padding-left: 10%;
  padding-right: 10%;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media screen and (max-width: 600px) {
    top: 10%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const StyledAvatar = styled(Avatar)`
  height: 12rem;
  width: 12rem;

  @media screen and (max-width: 768px) {
    height: 9rem;
    width: 9rem;
  }

  @media screen and (max-width: 600px) {
    margin: auto;
    height: 10rem;
    width: 10rem;
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
  font-size: 1rem;
  text-align: left;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;
