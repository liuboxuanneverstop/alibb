import React,{ Component,createRef } from "react";
import './index.css'
import {
    message ,
  } from "antd";
export default class Header extends Component {
    state = {
      navs: ['|','社招官网','首页','社会招聘','校园招聘','了解阿里','个人中心'],
    };
    error = (item) => {
        message.error(item + '服务暂未开放',0.5);
    }
    render() {
      return (
        <div>
           <header className="header_box">
            <div header_menu className="header_min">
              <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" className="header_box_logo"></img>
              <ul className="header_ul">
                {this.state.navs.map((item,index) => (
                  <li key={index} className="header_ul_li" onClick={() => {
                    message.error(item + '服务暂未开放',0.5);
                  }}>{item}</li>
                ))} 
              </ul>
              <div className="login_box">欢迎来到阿里巴巴集团招聘！<span className="login_box_span" onClick={() => this.error('登录')}>登录</span> <span className="login_box_span" onClick={() => this.error('注册')}>| 注册</span></div>
            </div>
          </header>
        </div>
      );
    }
  }