import { Global, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import globalStyles from "./GlobalStyle";
interface StylesProps {
  children: React.ReactNode;
}

const Styles = ({ children }: StylesProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default Styles;
