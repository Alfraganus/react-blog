import './App.css';
import './assets/s3slider.css'
import './assets/templatemo_style.css'
import {findImagePath} from './functions.js'
import React from "react";
import Content from './components/main_page/content.js'
import {SubCategories} from './components/main_page/second_sub_menu.js'
import Categories from './components/main_page/first_sub_menu.js'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function App() {
    return (
        <Router>
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
                        {/*content component*/}
                            <Routes>
                                <Route exact path="/" element={<Content/>}/>
                                <Route exact path="/test" element={ <Categories/>}/>
                            </Routes>
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
        </Router>
    );

}

export default App;
