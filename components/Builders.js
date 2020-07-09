import React from 'react';
import styled from 'styled-components';

export const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
`;

export const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 25px 10px;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  color: ${(props) => (props.selected ? props.theme.accent4 : 'inherit')};
  border-top: 5px solid
    ${(props) => (props.selected ? props.theme.accent4 : 'transparent')};
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  scroll-behavior: smooth;
  position: 'relative';
  background: ${(props) => props.theme[props.background || 'background']};
  & h1 {
    font-size: 2em;
  }
  & span[role='img'] {
    font-size: 4em;
  }
`;

export const NavContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  position: fixed;
  z-index: 1;
  line-height: 65px;
  text-align: center;
`;

export const MainList = styled.div`
  width: 600px;
  height: 65px;
  text-align:right;
  float: right;
  & ul {
      margin: 0
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
  }
  & li {
    width: 120px;
    height: 65px;
  }
  @media screen and (max-width: 768px) {
    width: 300px
    text-align:center;
    margin-right: 5rem;
    & li {
      width: 60px;
      height: 65px;
    }
  }
`;

export const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: space-between;
  align-items: baseline;
  width: calc(100% - 20px);
  margin: 10px;
`;

export const Logo = () => (
  <svg width="250" height="270" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M-1-1h252v272H-1z" />
    <path
      fillRule="evenodd"
      fill="#ff710b"
      d="M138.025.452c-.353.142.185.719 1.37 1.47 2.678 1.699 4.392 4.578 7.257 12.187l2.443 6.489.925-2.023c3.875-8.467-4.505-21.128-11.995-18.123m-36.91 10.832c-22.448 7.206-28.655 9.353-27.64 9.562 5.1 1.05 9.54 8.676 13.458 23.11 3.302 12.168 14.856 38.04 25.597 57.316 6.095 10.938 6.802 16.915 2.646 22.365-1.77 2.319-1.294 2.195 6.622-1.732 13.487-6.69 34.305-15.1 47.352-19.126 8.922-2.754 8.809-12.415-.31-26.681-6.395-10.003-16.738-33.273-26.867-60.444-3.484-9.345-4.783-11.473-7.856-12.87-2.75-1.248-2.174-1.396-33.001 8.5M67.594 23.488c-7.69 1.849-9.313 13.966-2.727 20.362 6.717 6.523 15.328 2.153 15.266-7.747-.048-7.62-6.464-14.075-12.54-12.615m106.268 51.829c3.817 5.796 6.989 14.419 6.689 18.186l-.16 2.016 1.258-1.505c5.264-6.301.065-20.158-7.563-20.158h-1.186l.962 1.46m-73.388 27.062c-8.462 3.013-7.958 18.01.748 22.225 6.785 3.285 12.905-1.873 12.346-10.405-.521-7.948-7.154-13.936-13.094-11.82m-92.997 44.62c-5.111 1.889-7.14 5.066-7.117 11.145.023 6.31.637 7.266 11.356 17.697 9.858 9.593 10.685 10.749 10.7 14.96.02 5.136-2.028 6.879-8.08 6.873-6.734-.007-8.151-1.497-8.455-8.892l-.2-4.852-2.751.132-2.75.132-.136 2.882c-.49 10.39 3.193 15.092 12.264 15.658 11.184.698 16.307-3.378 15.87-12.626-.3-6.39-3.32-10.38-17.578-23.233-7.482-6.744-6.095-15.31 2.53-15.624 6.69-.245 8.436 1.48 8.755 8.654l.21 4.739h5.276v-5.183c0-7.116-1.204-9.694-5.618-12.031-2.531-1.34-11.114-1.6-14.276-.431m77.197.02c-2.804.933-5.663 3.704-6.413 6.216-1.003 3.356-.75 40.825.29 43.094 2.125 4.63 5.464 6.292 12.64 6.292 9.805 0 13.436-3.094 13.845-11.797l.195-4.158h-5.95v3.305c0 5.653-2.17 7.717-8.09 7.693-7.755-.03-7.64.323-7.64-23.525v-19.314l1.114-1.324c1.66-1.973 3.325-2.485 7.325-2.253 6.09.352 7.29 1.926 7.29 9.56v4.735h5.844v-4.863c0-8.331-2.106-12.104-7.68-13.76-3.154-.936-9.812-.884-12.77.1m97.069-.021c-3.358 1.202-5.134 2.672-6.33 5.24l-1.067 2.292.005 20c.007 22.667-.064 22.169 3.609 25.313 5.446 4.66 18.599 3.745 22.445-1.564 2.063-2.848 2.247-4.825 2.247-24.14 0-22.354-.337-23.8-6.194-26.636-2.94-1.423-11.342-1.711-14.715-.505M42.65 174.306v27.19h24.766l-.136-2.36-.136-2.358-9.326-.122-9.326-.121v-20.207H62.875v-4.944H48.493V152.059H66.47v-4.944H42.65v27.19m70.412-26.891c-.165.165-.3 1.27-.3 2.458v2.159l5.506.126 5.505.126.116 24.607.117 24.607h5.835v-49.438h10.786v-4.944h-13.633c-7.498 0-13.768.135-13.932.299m34.756 2.148v2.447l2.135.137 2.135.137.116 22.135.117 22.135h-4.503v4.944H162.2v-4.944h-4.503l.117-22.135.117-22.135 2.134-.137 2.135-.137v-4.894h-14.382v2.447m69.214 24.723v27.212h5.833l.117-20.678.117-20.677 8.963 20.677 8.963 20.678h6.126l-.116-27.08-.116-27.078-2.804-.133-2.805-.134-.117 21.033-.116 21.032-9.076-20.9-9.075-20.898-2.947-.132-2.947-.133v27.21M194 152.342c2.789 2.045 2.806 2.175 2.806 22.189 0 16.436-.077 18.354-.786 19.76-2.322 4.603-12.816 4.84-15.273.345-1.326-2.427-1.204-38.806.137-40.634 2.189-2.984 9.967-3.968 13.116-1.66M25.123 213.408c-6.371 1.443-9.172 5.267-8.892 12.134.244 5.962 1.012 7.123 11.436 17.282 4.752 4.632 9.083 9.172 9.624 10.09 1.28 2.169 1.469 7.143.337 8.872-2.325 3.55-10.408 4.043-13.984.85l-1.443-1.288-.151-5.207-.151-5.206H16.134l.002 4.83c.006 10.486 3.559 13.889 14.38 13.77 9.786-.108 13.7-3.534 13.652-11.947-.037-6.43-.945-7.825-12.046-18.515-10.123-9.747-10.368-10.11-10.063-14.9.282-4.431 2.363-6.12 7.584-6.153 6.183-.038 8.062 2.107 8.063 9.207v4.382H43.66l-.206-5.281c-.435-11.148-6.693-15.558-18.331-12.92m41.348-.033c-4.611 1.058-6.323 2.254-8.164 5.705l-1.05 1.967v40.474l1.149 2.23c2.616 5.086 10.098 7.348 17.746 5.366 5.86-1.518 8.174-4.6 8.62-11.49l.259-3.995h-5.86l-.205 3.528c-.335 5.792-3.063 8.117-8.9 7.588-7.135-.647-7.19-.825-7.19-23.483-.001-22.99.16-23.461 7.929-23.295 6.439.138 7.922 1.858 8.178 9.482l.169 5.056h5.867l-.221-5.506c-.465-11.56-6.802-16.271-18.327-13.627m79.716 0c-4.76 1.085-7.485 3.212-8.77 6.847-.886 2.508-.886 39.593 0 42.1 3.249 9.19 21.42 10.328 26.313 1.647l1.393-2.472V241.72c0-22.497-.021-22.645-3.5-25.623-3.268-2.798-9.941-3.975-15.436-2.723M98.38 241.224v27.239h5.843v-19.326h6.695l5 9.663 5 9.663h6.302l-4.981-9.668c-5.468-10.611-5.378-10.371-4.054-10.791 4.752-1.508 6.038-4.952 6.038-16.17 0-10.777-.521-12.692-4.122-15.17-3.04-2.092-4.018-2.278-13.07-2.483l-8.651-.195v27.238m81.348.048v27.19h21.124v-4.943H185.572V214.08h-5.843v27.19m30.113 0v27.192h21.123v-4.944H215.684V214.08h-5.842v27.19m-53.962-22.32c3.516 1.703 3.4.936 3.4 22.466 0 18.097-.048 19.252-.853 20.44-2.743 4.046-12.737 3.84-15.01-.31-.805-1.468-1.444-33.285-.762-37.944.735-5.021 7.528-7.41 13.225-4.652m-40.497 1.136c2.64 1.404 3.2 3.45 3.213 11.717.015 11.099-.992 12.389-9.668 12.389h-4.704v-25.268l4.83.183c3.48.132 5.25.405 6.329.979"
    />
  </svg>
);