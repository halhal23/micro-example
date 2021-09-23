import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    background-color: ${theme.default.base};
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
  }
  .material-icons {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
