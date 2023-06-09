import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyles = createGlobalStyle`
    body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1,h2 {
  padding: 0;
  margin: 0;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}
p{
  padding: 0;
  margin: 0;
}
`;
