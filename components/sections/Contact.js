import React from 'react';
import {
  Container,
  TextField,
  InputAdornment,
  Snackbar,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        email,
      }),
    })
      .then(() => setOpen(true))
      .catch((error) => alert(error));
  };
  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <StyledContainer maxWidth="md">
      <SubTitle>Contact</SubTitle>

      <Description>Contact me for events</Description>
      <FormContainer>
        <form
          onSubmit={handleSubmit}
          name="newsletter"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div hidden aria-hidden="true">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>
          <StyledInput
            required
            type="email"
            id="email"
            name="email"
            label="Email address"
            value={email}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Button type="submit">Subscribe</Button>
                </InputAdornment>
              ),
            }}
          />
          {/* <Button type='submit'>Subscribe</Button> */}
        </form>
        <About>
          <b>Notice of Non-Affiliation and Disclaimer </b>
          <br />
          <Container maxWidth="xs">
            Budgie Stream is not affiliated, associated, authorized, endorsed
            by, or in any way officially connected with Sonos, or any of its
            products.
          </Container>
        </About>
      </FormContainer>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        message="Thanks for subscribing to the newsletter"
      />
    </StyledContainer>
  );
};

export default Contact;

const StyledContainer = styled(Container)`
  padding: 4rem;
  text-align: center;
`;
const FormContainer = styled(Container)`
  justify-content: center;
  text-align: center;
`;
const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;

const About = styled.p`
  margin-top: 0.5rem;
  font-size: 0.6rem;
`;

const SubTitle = styled.h2`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledInput = styled(TextField)`
  margin-top: 2rem;

  width: 80%;
  .MuiFormLabel-root.Mui-focused {
    color: #2e3440;
  }
  .MuiInputLabel-animated {
    color: #2e3440;
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid #2e3440;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #8fbcbb;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #ebcb8b;
  }
`;