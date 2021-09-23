import { VFC } from "react";
import styled from "styled-components";
import { Card } from "../../presentational/molecules";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top: VFC = () => (
  <Wrapper>
    <Card width="300px" height="400px">
      card
    </Card>
  </Wrapper>
);

export default Top;
