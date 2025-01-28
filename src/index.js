import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-10: #EAEDF3;
  --color-grey-50: #f9fafb;
  --color-grey-100: #E5E8ED;
  --color-grey-200: #ECF0F6;
  --color-grey-300: #E7EDF6;
  --color-grey-400: #4E5353;
  --color-grey-500: #555555;
  --color-grey-600: #5D6C76;
  --color-grey-700: #374151;
  --color-grey-800: #4E5353;
  --color-grey-900: #999999;

  --color-blue-100: #e0f2fe;
  --color-blue-200: #53BED2;
  --color-blue-200-rgb: 0, 123, 255;
  --color-blue-700: #0369a1;
 
  /* black */
  --color-black-100: #000000;
  --color-black-200: #080511;
  --color-black-300: #333333;


  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 2px;
  --border-radius-sm: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;
}

body {
  font-family: "Sofia Sans", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background-color: var(--color-grey-50);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  font-size: 21px;
  font-weight: 600px;
  color: var(--color-grey-900);
}

img {
  max-width: 100%;

}

`;

export default GlobalStyles;
