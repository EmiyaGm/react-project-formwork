import * as React from "react";
import { Route } from "react-router-dom";

import Trades from "../Trades";
import Users from "../Users";

import PropsRoute from '../../components/PropsRoute'

const propsRouteArray = [
  {
    path: '/users',
    component: Users
  }
]

class HomeRouter extends React.Component {

  render() {
    const { ironmanObj } = this.props;
    return (
      <div>
        <Route exact={true} path="/trades" component={Trades} />
        {
          propsRouteArray.map((item, index) => {
            return <PropsRoute exact={true} path={item.path} component={item.component} inpageProps={{ironmanObj: ironmanObj}} key={index}/>
          })
        }
      </div>
    );
  }
}

export default HomeRouter;
