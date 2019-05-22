import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import { loadIronman } from "../utils/ironman";
import PropsRoute from "../components/PropsRoute";
import * as actions from "./modules/actions";
import { customizedConnect } from '../utils'


import Home from "../pages/Home";
import Login from "../pages/Login";

class AppRouter extends Component {
  constructor(props, context) {
    super(props);
  }

  componentDidMount = () => {
    const {initIronman} = this.props
    document.addEventListener("ironmanLoaded", ironmanExtension => {
      loadIronman(
        (ironman, fo, requiredFields, account, foNetwork, identity) => {
          initIronman({ironman, fo, requiredFields, account, foNetwork, identity})
        }
      );
    });
  };

  render() {
    const { ironmanObj } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <PropsRoute
              exact={true}
              path="/login"
              component={Login}
              inpageProps={{ ironmanObj: ironmanObj}}
            />
            <PropsRoute
              exact={false}
              path="/"
              component={Home}
              inpageProps={{ ironmanObj: ironmanObj}}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default customizedConnect('router', actions, hot(module)(AppRouter));
