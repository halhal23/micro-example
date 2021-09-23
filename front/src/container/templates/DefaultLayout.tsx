import { FC, ReactNode } from "react";
import GlobalStyle from "../../globals/Style";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }): JSX.Element => (
  <>
    <GlobalStyle />
    <div>header</div>
    {children}
    <div>footer</div>
  </>
);

export default DefaultLayout;
