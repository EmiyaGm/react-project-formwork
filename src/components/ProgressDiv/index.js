import * as React from "react";
import { Progress } from "antd";

import "./index.less";

class ProgressDiv extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { percent, content, subcontent } = this.props;
    return (
      <div className="progressdiv">
        <Progress showInfo={false} percent={percent} strokeWidth={24} style={{marginBottom: 20}} strokeLinecap='square' strokeColor='#1891FF'/>
        {content}
        <br />
        {subcontent}
      </div>
    );
  }
}

export default ProgressDiv;
