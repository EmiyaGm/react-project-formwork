import {
  Form,
} from "antd";
import * as React from "react";

import * as actions from "./modules/actions";
import { customizedConnect } from "../../utils";
import './index.less'

class Users extends React.Component {
  constructor(props, context) {
    super(props);
  }

  componentDidMount = () => {

  };


  render() {
    return (
      <div className="trades">
        Users
      </div>
    );
  }
}

export default customizedConnect("users", actions, Form.create()(Users));
