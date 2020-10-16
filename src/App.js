import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { startmarquee } from './my'

const headerUl = ['|','社招官网','首页','社会招聘','校园招聘','了解阿里','个人中心']
const hotspace = [{
  text: 'JAVA',
  url: 'http://www.baidu.com'
},
{
  text: 'IOS',
  url: 'www.baidu.com'
},
{
  text: '数据',
  url: 'www.baidu.com'
},{
  text: '安全 ',
  url: 'www.baidu.com'
}
,{
  text: '搜索 ',
  url: 'www.baidu.com'
},{
  text: '算法',
  url: 'www.baidu.com'
},{
  text: '运营',
  url: 'www.baidu.com'
},{
  text: '视觉',
  url: 'www.baidu.com'
},{
  text: '交互',
  url: 'www.baidu.com'
},{
  text: '前端',
  url: 'www.baidu.com'
}]
const newWorke = [{
  name: '阿里研究院-新商业学堂运营高级专家-北京',
  address: '北京',
  time: '1分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '人力资源部-集团招聘专家（新零售技术）-杭州',
  address: '杭州',
  time: '8分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '人力资源部-招聘专家（技术线）-杭州',
  address: '杭州',
  time: '11分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '人力资源部-集团招聘专家（天猫）-杭州',
  address: '杭州',
  time: '15分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '阿里研究院-新商业学堂运营高级专家-北京',
  address: '北京',
  time: '19分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '阿里研究院-新商业学堂运营高级专家-北京',
  address: '北京',
  time: '19分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '阿里研究院-新商业学堂运营高级专家-北京',
  address: '北京',
  time: '1分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '阿里研究院-新商业学堂运营高级专家-北京',
  address: '北京',
  time: '1分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
},
{
  name: '阿里研究院-新商业学堂运营高级专家-北京',
  address: '北京',
  time: '1分钟前',
  url: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP651014'
}]
function App(){
  return (
    <div className="App">
      {/* 头部 */}
      <header className="header_box">
        <div header_menu className="header_min">
          <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" className="header_box_logo"></img>
          <ul>
            {Object.keys(headerUl).map((item,index) => (
              <li key={index} className="header_ul_li">{headerUl[item]}</li>
            ))} 
          </ul>
          <div className="login_box">欢迎来到阿里巴巴集团招聘！<span className="login_box_span">登录</span> <span className="login_box_span">| 注册</span></div>
        </div>
      </header>
      {/* 主体 */}
      <div className="menu_box">
         <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="" className="index-image"/>
         <div className="index-img-model"></div>
         <div className="seach_box">
            <div style={{fontSize: '54px',color: '#fff',fontWeight: '700',marginTop: '30px'}}>If not now, when?</div>
				    <div style={{fontSize: '54px',color: '#fff',fontWeight: '700'}}>If not me, who?</div>
				    <div style={{fontSize: '34px',color: '#fff'}}>此时此刻，非我莫属！</div>
            <div className="seach_box_input_box">
              <input type="text" placeholder="请输入职位关键词" className="seach_box_input"/>
              <button className="seach_box_btn">搜索</button>
              <ul>
                   {Object.keys(hotspace).map((item,index) => (
                   <li key={index} className="header_ul_li" onClick={() => {
                     alert(hotspace[item].url)
                   }}>{hotspace[item].text}</li>
                 ))} 
              </ul>
            </div>
         </div>
         {/* 最新职位 */}
         <div className="food_box">
           <div className="new_worke">
           <div className="more-positon">
			    	最新职位
			    	<a className="clickMorePosition" >更多</a>
            <ul style={{overflow: 'hidden'}}  id="newworkeList" onMouseOut={() => {
              // const o = document.getElementById('newworkeList')
              // o.innerHTML += o.innerHTML;
              // o.style.marginTop=0;
              // setTimeout(function() {
              //   o.style.marginTop=parseInt(o.style.marginTop)-28+"px"
              // },500)
            }}>
                {Object.keys(newWorke).map((item,index) => (
                <li key={index}>
                  <a href={newWorke[item].url} style={{textDecoration: 'none',color:'#3c99d8'}} className="neworke_a_box">{newWorke[item].name}</a>
                  <em className="address_box">{newWorke[item].address}</em>
						      <em className="time_box">{newWorke[item].time}</em>
                </li>
              ))} 
            </ul>
			     </div>
           </div>
           <div className="alibaba">
            <div class="show-pic pic-1">
              <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt="" style={{width: '179px',height: '60px',position: 'absolute',top: '25%',left: '20%'}}/>
            </div>
            <div class="show-pic pic-2">
              <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="" style={{width: '179px',height: '60px',position: 'absolute',top: '25%',left: '20%'}}/>
            </div>
           </div>
         </div>
         <div className="index-footer">
	        <div className="footer-content" style={{textAlign: 'center'}}>
		        阿里巴巴集团 Copyright ©1999-2020 版权所有
	        </div>
</div>
      </div>
    </div>
  );
}

export default App;