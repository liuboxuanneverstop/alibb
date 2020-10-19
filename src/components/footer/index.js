import React, { Component, createRef } from "react";
import "./index.css";
import { message } from "antd";
export default class Footer extends Component {
  state = {
    newWorke: [
      {
        name: "阿里研究院-新商业学堂运营高级专家-北京",
        address: "北京",
        time: "1分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "人力资源部-集团招聘专家（新零售技术）-杭州",
        address: "杭州",
        time: "8分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "人力资源部-招聘专家（技术线）-杭州",
        address: "杭州",
        time: "11分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "人力资源部-集团招聘专家（天猫）-杭州",
        address: "杭州",
        time: "15分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "阿里研究院-新商业学堂运营高级专家-北京",
        address: "北京",
        time: "19分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "阿里研究院-新商业学堂运营高级专家-北京",
        address: "北京",
        time: "19分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "阿里研究院-新商业学堂运营高级专家-北京",
        address: "北京",
        time: "1分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "阿里研究院-新商业学堂运营高级专家-北京",
        address: "北京",
        time: "1分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
      {
        name: "阿里研究院-新商业学堂运营高级专家-北京",
        address: "北京",
        time: "1分钟前",
        url:
          "https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014",
      },
    ],
    mymarginTop: 0
  };
  error = (item) => {
    message.error(item + "服务暂未开放", 0.5);
  };
  
    //计时器执行
    indexChange(){
      if(this.state.mymarginTop == (this.state.newWorke.length-5) * 40){
          this.setState({
            mymarginTop:0
          })
      }else{
          // this.state.index++;
          this.setState({
            mymarginTop:this.state.mymarginTop+ 40
          })
          console.log(this.state.mymarginTop);
      }
  }
  componentDidMount(){
    setInterval(()=>{
        this.indexChange();
    },1000)
}
  render() {
    return (
      <div>
        <div className="food_box">
          <div className="new_worke">
            <div className="more-positon">
              最新职位
              <a className="clickMorePosition">更多</a>
              <ul
                style={{ overflow: "hidden" }}
                id="newworkeList"
                onMouseOut={() => {
                  // const o = document.getElementById('newworkeList')
                  // o.innerHTML += o.innerHTML;
                  // o.style.marginTop=0;
                  // setTimeout(function() {
                  //   o.style.marginTop=parseInt(o.style.marginTop)-28+"px"
                  // },500)
                }}
              >
                {this.state.newWorke.map((item, index) => (
                  <li key={index} style={{marginTop: -this.state.mymarginTop}}>
                    <a
                      href={item.url}
                      style={{ textDecoration: "none", color: "#3c99d8" }}
                      className="neworke_a_box"
                    >
                      {item.name}
                    </a>
                    <em className="address_box">{item.address}</em>
                    <em className="time_box">{item.time}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="alibaba">
            <div className="show-pic pic-1">
              <img
                src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png"
                alt=""
                style={{
                    width: "179px",
                    height: "60px",
                    position: "absolute",
                    top: "25%",
                    left: "20%"
                }}
              />
            </div>
            <div className="show-pic pic-2">
              <img
                src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"
                alt=""
                style={{
                    width: "179px",
                    height: "60px",
                    position: "absolute",
                    top: "25%",
                    left: "20%"
                }}
              />
            </div>
          </div>
        </div>
        <div className="index-footer">
            <div className="footer-content" style={{ textAlign: "center" }}>
              阿里巴巴集团 Copyright ©1999-2020 版权所有
            </div>
        </div>
      </div>
    );
  }
}
