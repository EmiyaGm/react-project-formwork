import { Button, Icon, Layout, Menu, Breadcrumb } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";

import HomeRouter from "./homeRouter.js";
import "./index.less";
import { customizedConnect } from "../../utils";
import * as actions from "./modules/actions";

import logoutImg from "../../img/logout.svg";
import orderIcon from "../../img/orderIcon.svg"
import userIcon from '../../img/userIcon.svg'


const { SubMenu } = Menu;
const { Content, Header, Sider } = Layout;

const menuConfig = {
  trades: {
    name: '订单列表',
    father: '订单管理',
    grandFather: ''
  },
  users: {
    name: '用户列表',
    father: '用户管理',
    grandFather: ''
  },
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ["trades"],
      collapsed: false
    };
    props.history.listen(() => {
      this.changeCurrent();
    });
  }

  componentDidMount = () => {
    // tslint:disable-next-line
    this.changeCurrent();
  };

  changeCurrent = () => {
    const array = window.location.pathname.split("/");
    if (array[1]) {
      this.setState({
        current: [array[1]]
      });
    } else {
      this.setState({
        current: ["trades"]
      });
      this.props.history.push({ pathname: "/trades" });
    }
  };

  logout = () => {
    const { logout } = this.props;
    logout();
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { ironmanObj } = this.props;
    const { current, collapsed } = this.state
    return (
      <div className="home">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
                {collapsed ? null : <span>React</span>}
            </div>

            <Menu
              mode="inline"
              defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5"]}
              selectedKeys={this.state.current}
              style={{ borderRight: 0 }}
              theme="dark"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon component={orderIcon} alt="" className="menuIcon"/>
                    <span>订单管理</span>
                  </span>
                }
              >
                <Menu.Item key="trades">
                  <Link to="/trades">订单列表</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon component={userIcon} alt="" className="menuIcon"/>
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="users">
                  <Link to="/users">用户列表</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header className="header">
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              <div className="account">
                {this.state.account === "" ? (
                  <Button
                    type="primary"
                    onClick={this.login}
                    className="loginButton"
                  >
                    登录Ironman
                  </Button>
                ) : (
                  <div className="logout">
                    <span>{this.state.account}</span>
                    <span className="logout-button" onClick={this.logout}>
                      <Icon component={logoutImg} alt="" className="logoutImg" />
                      退出
                    </span>
                  </div>
                )}
              </div>
            </Header>
            <Breadcrumb style={{ padding: "16px 0px 16px 42px", background: '#fff' }}>
                  {menuConfig[current[0]].grandFather ? (<Breadcrumb.Item>{menuConfig[current[0]].grandFather}</Breadcrumb.Item>) : ('')}
              <Breadcrumb.Item>{menuConfig[current[0]].father}</Breadcrumb.Item>
              <Breadcrumb.Item>{menuConfig[current[0]].name}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <HomeRouter ironmanObj={ironmanObj} />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default customizedConnect("home", actions, Home);
