import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "./container/pages";

const Path = {
  top: "/",
};

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Path.top} exact component={Top} />
    </Switch>
  </BrowserRouter>
);

export default Router;
