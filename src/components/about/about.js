import React, { Component } from 'react'
import { Link } from 'react-router'
import { cutUrl ,underScroll } from '../utils/Utils'

class About extends Component {

    componentDidMount() {
        //导航栏变色
        let originalUrl = window.location.href;
        let getMyRouter = cutUrl(originalUrl);

        if (getMyRouter == 'About') {
            $('#nav-portfolio-menu-id').attr(
                'class', 'nav-portfolio-menu'
            );
            $('#nav-about-menu-id').attr(
                'class', 'nav-about-menu-active'
            );
            $('#nav-media-menu-id').attr(
                'class', 'nav-media-menu'
            );
        } else {
            console.log('获取地址栏错误');
        }

        //载入动画
        $(".ab-part-one-name").animate({
            opacity: '1',
            paddingLeft: '0px'
        }, "500");
        $(".ab-part-right-title").delay(200).animate({
            opacity: '1'
        }, "500");
        $(".ab-part-right-inner").delay(300).animate({
            opacity: '0.3'
        }, "500");
        $(".ab-part-one-text").delay(200).animate({
            opacity: '0.3',
            paddingLeft: '0px'
        }, "500");
        $(".ab-part-two").delay(300).animate({
            opacity: '1'
        }, "500");
        $(".ab-part-three").delay(400).animate({
            opacity: '1'
        }, "500");
        $(".ab-part-four").delay(500).animate({
            opacity: '1'
        }, "500");
        $(".ab-part-five").delay(600).animate({
            opacity: '1'
        }, "500");
        $(".ab-part-six").delay(700).animate({
            opacity: '1'
        }, "500");

        //监听是否到底部
        window.addEventListener('scroll', ()=> {
            underScroll(()=> {
                this.abBottomPart()
            })
        });
    }

    abBottomPart() {
        $(".ab-part-seven").animate({
            opacity:'1'
        },"500");
    }

    render() {
        return (
            <div className="ab-box">
                <div className="ab-part-one">
                    <div className="ab-part-one-left">
                        <span className="ab-part-one-name">盛碧星 | Cellier</span><br/>
                        <span className="ab-part-one-text">
                            Designer,Cellier (b.1990) emphasizes the design of both objects and
                            experiences. Self-taught and obsessively minimal.
                        </span>
                    </div>
                    <div className="ab-part-one-right">
                        <div className="ab-part-one-right-inf1">
                            <span className="ab-part-right-title">Born</span><br/>
                            <span className="ab-part-right-inner">1990.11.19</span>
                        </div>
                    </div>
                    <div className="main-clear-both"></div>
                </div>
                <div className="ab-part-two">
                    <div className="ab-all-left-title">
                        Emploper
                    </div>
                    <div className="ab-part-two-logo">
                        <div className="ab-part-two-1">
                            <img className="ab-part-two-qiniu" src="http://obhsihr83.bkt.clouddn.com/qiniu.svg"/>
                            <img className="ab-part-two-ping" src="http://obhsihr83.bkt.clouddn.com/ping.svg"/>
                            <img className="ab-part-two-naonao" src="http://obhsihr83.bkt.clouddn.com/naonao.svg"/>
                        </div>
                        <div className="ab-part-two-2">
                            <img className="ab-part-two-living" src="http://obhsihr83.bkt.clouddn.com/living.svg"/>
                            <img className="ab-part-two-haowu" src="http://obhsihr83.bkt.clouddn.com/haowu.svg"/>
                            <img className="ab-part-two-lala" src="http://obhsihr83.bkt.clouddn.com/lala.svg"/>
                        </div>
                    </div>
                </div>
                <div className="ab-part-three">
                    <div className="ab-all-left-title">
                        Emploper
                    </div>
                    <div className="ab-part-three-inner">
                        <div>
                            <span>Product designer @ Qiniu</span>
                            <span>November 2015 - Present</span>
                            <span>
                                Aged 16, I opened Photoshop for the first time and never looked.
                                I was Creative Lead at a 360° digital engagement agency, and
                                I have worked at digital product design studios and startups
                                I across London. Over the years, I’ve helped a range of brands.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ab-part-four">
                    <div className="ab-all-left-title">
                        Skills
                    </div>
                    <div className="ab-part-four-inner">
                        <div className='ab-part-four-1'>
                            <div className="ab-part-soft">Sketch</div>
                            <div className="ab-part-soft">Wordpress</div>
                            <div className="ab-part-soft">HTML&CSS</div>
                        </div>
                        <div className='ab-part-four-other'>
                            <div className="ab-part-soft">Sketch</div>
                            <div className="ab-part-soft">Wordpress</div>
                            <div className="ab-part-soft">HTML&CSS</div>
                        </div>
                        <div className='ab-part-four-other'>
                            <div className="ab-part-soft">Sketch</div>
                            <div className="ab-part-soft">Wordpress</div>
                            <div className="ab-part-soft">HTML&CSS</div>
                        </div>
                        <div className='ab-part-four-other'>
                            <div className="ab-part-soft">Sketch</div>
                            <div className="ab-part-soft">Wordpress</div>
                            <div className="ab-part-soft">HTML&CSS</div>
                        </div>
                    </div>
                </div>
                <div className="ab-part-five">
                    <div className="ab-all-left-title">
                        Education
                    </div>
                    <div className="ab-part-five-inner">
                        Harbin Engineering University (HEU) 2009-2014
                    </div>
                </div>
                <div className="ab-part-six">
                    <div className="ab-part-six-btn">
                        Download my chinese resume
                    </div>
                </div>
                <div className="ab-part-seven">
                    <div className="ab-part-seven-title">
                        Next Project.
                    </div>
                    <div className="ab-part-seven-text">
                        Event: Time to money<br/>
                        →
                    </div>
                </div>
            </div>
        )
    }
}


export default About;
