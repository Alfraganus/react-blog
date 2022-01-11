import React from "react";
import axios from "axios";
const baseURL = "https://newsapi.org/v2/top-headlines/sources?apiKey=c85227fb62964655a9b5f976448dd132";


export var Categories =  function categories() {
    return <div>
        <ul>
            <li><a href="index.html" className="current">post</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>;
}