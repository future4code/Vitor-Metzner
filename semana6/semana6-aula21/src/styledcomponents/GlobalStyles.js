import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color: black;
  font-family: 'Squada One', cursive;

}

body {
    background-color: #ffffff;
    background-attachment: fixed;
    background-size: cover;

}



button {
 cursor: pointer;
}`;
