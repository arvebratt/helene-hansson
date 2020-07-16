import React from "react";
import {
  Container,
  TextField,
  InputAdornment,
  Snackbar,
  Button,
  Grid,
  IconButton,
  Fab,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email,
        subject,
        message,
      }),
    })
      .then(() => setOpen(true))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  return (
    <StyledContainer maxWidth='md'>
      <Title>Contact</Title>
      <Description>
        Send me an email if you are interested in an event
      </Description>

      <FormContainer>
        <form
          onSubmit={handleSubmit}
          name='contact'
          method='post'
          data-netlify='true'
          netlify-honeypot='bot-field'
        >
          <div hidden aria-hidden='true'>
            <label>
              Don’t fill this out if you're human:
              <input name='bot-field' />
            </label>
          </div>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} lg={6}>
              <StyledEmail
                required
                id='email'
                type='email'
                name='email'
                label='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <StyledSubject
                required
                id='subject'
                type='text'
                name='subject'
                label='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
              <StyledMessage
                required
                id='message'
                variant='outlined'
                label='Message'
                static
                multiline
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
        <Description>
          I will come back to you as soon as possible
        </Description>
              <StyledButtonContainer>
                <StyledFab variant="extended" size="small" aria-label='send' type='submit'>
                  Send&nbsp;
                  <SendIcon />
                </StyledFab>
              </StyledButtonContainer>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        message='Thanks for contacting me'
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

const Title = styled.h1`
  color: ${(props) => props.theme.accent4};
  margin-top: 3rem;
  margin-bottom: 0rem;
  font-size: 4rem !important;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem !important;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0rem;
    font-size: 2rem !important;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const About = styled.p`
  margin-top: 0.5rem;
  font-size: 0.6rem;
`;

const StyledButtonContainer = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;
const StyledFab = styled(Fab)`
  color: ${(props) => props.theme.accent2};
  background-color: ${(props) => props.theme.accent4};
  size: small;
`;

const StyledEmail = styled(TextField)`
  margin-top: 2rem;
  width: 80%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .MuiInputBase-input {
    color: ${(props) => props.theme.text};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.accent4};
  }
  .MuiInputLabel-animated {
    color: ${(props) => props.theme.text};
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid ${(props) => props.theme.text};
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid ${(props) => props.theme.accent4};
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid ${(props) => props.theme.accent4};
  }
`;

const StyledSubject = styled(TextField)`
  margin-top: 2rem;

  width: 80%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .MuiInputBase-input {
    color: ${(props) => props.theme.text};
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.accent4};
  }
  .MuiInputLabel-animated {
    color: ${(props) => props.theme.text};
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid ${(props) => props.theme.text};
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid ${(props) => props.theme.accent4};
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid ${(props) => props.theme.accent4};
  }
`;

const StyledMessage = styled(TextField)`
  margin-top: 2rem;

  width: 90%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .MuiInputBase-input {
    color: ${(props) => props.theme.text};
  }
  .MuiInputLabel-animated {
    color: ${(props) => props.theme.text};
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.text};
    border-width: 2px;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.accent4};
    border-width: 2px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.accent4};
    border-width: 2px;
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.accent4};
  }
`;
