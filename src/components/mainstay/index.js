import React, { Component, createRef } from "react";
import "./index.css";
import { message } from "antd";
export default class Mainstay extends Component {
  state = {
    hotspace: [
      {
        text: "JAVA",
        url: "http://www.baidu.com",
      },
      {
        text: "IOS",
        url: "www.baidu.com",
      },
      {
        text: "数据",
        url: "www.baidu.com",
      },
      {
        text: "安全 ",
        url: "www.baidu.com",
      },
      {
        text: "搜索 ",
        url: "www.baidu.com",
      },
      {
        text: "算法",
        url: "www.baidu.com",
      },
      {
        text: "运营",
        url: "www.baidu.com",
      },
      {
        text: "视觉",
        url: "www.baidu.com",
      },
      {
        text: "交互",
        url: "www.baidu.com",
      },
      {
        text: "前端",
        url: "www.baidu.com",
      },
    ],
  };
  error = (item) => {
    message.error(item + "服务暂未开放", 0.5);
  };
  render() {
    return (
      <div>
        <div className="menu_box">
          <img
            src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
            alt=""
            className="index-image"
          />
          <div className="index-img-model"></div>
          <div className="seach_box">
            <div
              style={{
                fontSize: "54px",
                color: "#fff",
                fontWeight: "700",
                marginTop: "30px",
              }}
            >
              If not now, when?
            </div>
            <div style={{ fontSize: "54px", color: "#fff", fontWeight: "700" }}>
              If not me, who?
            </div>
            <div style={{ fontSize: "34px", color: "#fff" }}>
              此时此刻，非我莫属！
            </div>
            <div className="seach_box_input_box">
              <input
                type="text"
                placeholder="请输入职位关键词"
                className="seach_box_input"
              />
              <button className="seach_box_btn">搜索</button>
              <ul className="seach_bot_space">
                {this.state.hotspace.map((item, index) => (
                  <li
                    key={index}
                    className="header_ul_li"
                    onClick={() => {
                      alert(item.url);
                    }}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
