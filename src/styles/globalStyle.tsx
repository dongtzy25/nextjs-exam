import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   /* Barlow Regular */
  @font-face {
    font-family: 'Barlow';
    src: url('/fonts/Barlow-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Barlow Bold */
  @font-face {
    font-family: 'Barlow';
    src: url('/fonts/Barlow-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* Barlow Bold Italic */
  @font-face {
    font-family: 'Barlow';
    src: url('/fonts/Barlow-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  /* Barlow SemiBold */
  @font-face {
    font-family: 'Barlow';
    src: url('/fonts/Barlow-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Barlow SemiBold Italic */
  @font-face {
    font-family: 'Barlow';
    src: url('/fonts/Barlow-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  /* Global styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;
