import './App.css';
import './assets/s3slider.css'
import './assets/templatemo_style.css'
import {findImagePath} from './functions.js'
import React from "react";
import Content from './components/main_page/content.js'
import {SubCategories} from './components/main_page/second_sub_menu.js'
import Categories from './components/main_page/first_sub_menu.js'

function App() {
    return (
        [
            <div className="App">
                <div id="templatemo_wrapper">
                    <div id="templatemo_menu">
                        {/*first sub categories*/}
                        <Categories/>,
                    </div>

                    <div id="templatemo_left_column">
                        <div id="templatemo_header">
                            <div id="site_title">
                                <h1><a href="http://www.templatemo.com"
                                       target="_parent">Clean <strong>Blog</strong><span>Free HTML-CSS Template</span></a>
                                </h1>
                            </div>
                        </div>

                        <div id="templatemo_sidebar">

                            <div id="templatemo_rss">

                                <a href="#">SUBSCRIBE NOW <br/><span>to our rss feed</span></a>

                            </div>

                            <h4>Categories</h4>
                            <ul className="templatemo_list">
                                <li><a href="http://www.templatemo.com/page/1" target="_parent">Curabitur sed</a></li>
                                <li><a href="http://www.templatemo.com/page/2" target="_parent">Praesent adipiscing</a>
                                </li>
                                <li><a href="http://www.templatemo.com/page/3" target="_parent">Duis sed justo</a></li>
                                <li><a href="http://www.templatemo.com/page/4" target="_parent">Mauris vulputate</a>
                                </li>
                                <li><a href="#">Nam auctor</a></li>
                                <li><a href="#">Aliquam quam</a></li>
                            </ul>

                            <div className="cleaner_h40"></div>

                            <h4>Friends</h4>
                            {/*second sub categories*/}
                            <SubCategories/>,
                        </div>

                    </div>

                    <div id="templatemo_right_column">

                        <div id="featured_project">
                            <div id="slider">
                                <ul id="sliderContent">
                                    <li className="sliderImage">
                                        <a href=""><img src={findImagePath('slider/1.jpg')}/></a>
                                        <span className="top"><strong>Project 1</strong><br/>Suspendisse turpis arcu, dignissim ac laoreet a, condimentum in massa.</span>
                                    </li>
                                    <li className="sliderImage">
                                        <a href=""><img src="images/slider/2.jpg" alt="2"/></a>
                                        <span className="bottom"><strong>Project 2</strong><br/>uisque eget elit quis augue pharetra feugiat.</span>
                                    </li>
                                    <li className="sliderImage">
                                        <img src="images/slider/3.jpg" alt="3"/>
                                        <span className="left"><strong>Project 3</strong><br/>Sed et quam vitae ipsum vulputate varius vitae semper nunc.</span>
                                    </li>
                                    <li className="sliderImage">
                                        <img src="images/slider/4.jpg" alt="4"/>
                                        <span className="right"><strong>Project 4</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </li>
                                    <li className="clear sliderImage"></li>
                                </ul>
                            </div>
                        </div>

                        {/*content component*/}
                        <Content/>,

                        <div className="cleaner"></div>
                    </div>
                    <div className="cleaner_h20"></div>

                    <div id="templatemo_footer">

                        Copyright © 2048 <a href="#">Your Company Name</a> |
                        <a href="http://www.iwebsitetemplate.com" target="_parent">Website Templates</a> by <a
                        href="http://www.templatemo.com" target="_parent">Free CSS Templates</a>
                    </div>
                    <div className="cleaner"></div>
                </div>
            </div>
        ]
    );
}

export default App;
