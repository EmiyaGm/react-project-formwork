import * as React from "react";
import * as actions from "./modules/actions";
import { customizedConnect } from "../../utils";

import "./index.less";

class Login extends React.Component {
  constructor(props, context) {
    super(props);
  }

  login = () => {

  }

  render() {
    const { ironmanObj } = this.props;
    return (
      <div className="login">
        <div className="out">
          <h3>Welcome</h3>
        </div>
      </div>
    );
  }
}

export default customizedConnect("login", actions, Login);
