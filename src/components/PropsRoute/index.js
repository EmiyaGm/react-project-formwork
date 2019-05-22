import * as React from "react";
import { Route } from "react-router-dom";

const PropsRoute = ({ component: Component, inpageProps, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} {...inpageProps} />}
  />
);

export default PropsRoute;
