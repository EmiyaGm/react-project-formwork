import {
  Form,
} from "antd";
import * as React from "react";
import * as actions from "./modules/actions";
import { customizedConnect } from "../../utils";

import "./index.less";


class Trades extends React.Component {
  constructor(props, context) {
    super(props);
  }

  componentDidMount = () => {

  };

  render() {
    return (
      <div className="trades">
        Trades
      </div>
    );
  }
}

export default customizedConnect("trade", actions, Form.create()(Trades));
