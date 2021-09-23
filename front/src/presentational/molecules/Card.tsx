import React, { VFC } from "react";
import styled from "styled-components";
import theme from "../../globals/theme";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
};

const StyledCard = styled.div<
  Pick<CardProps, "width" | "height" | "borderRadius" | "margin">
>`
  position: relative;
  background-color: ${theme.default.base};
  box-shadow: -5px -5px 20px ${theme.default.brighter},
    5px 5px 20px ${theme.default.darker};
  padding: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
`;

const Card: VFC<CardProps> = ({
  children,
  className,
  width,
  height,
  borderRadius,
  margin = "0 0 0 0",
}): JSX.Element => (
  <StyledCard
    className={className}
    width={width}
    height={height}
    borderRadius={borderRadius}
    margin={margin}
  >
    {children}
  </StyledCard>
);

export default Card;
