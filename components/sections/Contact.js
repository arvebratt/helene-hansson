import React from "react";
import {
  Container,
  TextField,
  InputAdornment,
  Snackbar,
  Button,
} from "@material-ui/core";
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
      <SubTitle>Contact</SubTitle>
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

          <StyledEmail
            required
            type='email'
            id='email'
            name='email'
            label='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <StyledSubject
            required
            type='text'
            id='subject'
            name='subject'
            label='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <StyledMessage
            required
            type='text'
            id='message'
            name='message'
            label='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button type='submit'>Send</Button>
        </form>
        <About>
          <b>I will come back to you as soon as possible </b>
        </About>
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

const StyledEmail = styled(TextField)`
  margin-top: 2rem;

  width: 80%;
  .MuiFormLabel-root.Mui-focused {
    color: #414042;
  }
  .MuiInputLabel-animated {
    color: #414042;
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid #2e3440;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #d8e2dc;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #9d8189;
  }
`;

const StyledSubject = styled(TextField)`
  margin-top: 2rem;

  width: 40%;
  .MuiFormLabel-root.Mui-focused {
    color: #414042;
  }
  .MuiInputLabel-animated {
    color: #414042;
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid #2e3440;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #d8e2dc;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #9d8189;
  }
`;

const StyledMessage = styled(TextField)`
  margin-top: 2rem;

  width: 80%;
  .MuiFormLabel-root.Mui-focused {
    color: #414042;
  }
  .MuiInputLabel-animated {
    color: #414042;
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid #2e3440;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #d8e2dc;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #9d8189;
  }
`;
