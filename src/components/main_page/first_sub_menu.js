import { motion } from "framer-motion"
import  React,{ useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const baseURL = "https://newsapi.org/v2/top-headlines/sources?apiKey=c85227fb62964655a9b5f976448dd132";

function Categories() {
    return (
        <div>
        <ul>
            <li>
                <Link to={{pathname: "/"}}
                      state={'https://newsapi.org/v2/everything?q=russia&apiKey=c85227fb62964655a9b5f976448dd132'}> Russia </Link>
            </li>
            <li>
                <Link to={{pathname: "/hungary"}}
                      state={'https://newsapi.org/v2/everything?q=hungary&apiKey=c85227fb62964655a9b5f976448dd132'}>Hungary </Link>
            </li>
            <li>
                <Link to={{pathname: "/ukraine"}}
                      state={'https://newsapi.org/v2/everything?q=ukraine&apiKey=c85227fb62964655a9b5f976448dd132'}> Ukraine </Link>
            </li>
        </ul>
        </div>
    )

}

export default Categories;