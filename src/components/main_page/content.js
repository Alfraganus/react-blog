import {findImagePath} from  '../../functions.js'
import React from "react";
import Categories from "./first_sub_menu";
import axios from "axios";
const baseURL = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c85227fb62964655a9b5f976448dd132";

function ShowContent(test)
{
    return (
        <div>
            <div id="templatemo_main">
                <div className="post_section">
                    <span className="comment"><a href="blog_post.html">128</a></span>
                    <div>
                    <h2><a href="blog_post.html">{test.test.title} </a></h2>
                    </div>
                    December 28, 2048 | <strong>Author:</strong> John | <strong>Category:</strong> <a href="#">Freebies</a>

                    <img width="420px" src={test.test.urlToImage} alt="image 1"/>

                    <p>{test.test.description}</p>
                    <a href="blog_post.html">Continue reading...</a>
                </div>
            </div>
        </div>
    )
}


 function Content() {
    const [post, setPost] = React.useState([]);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data['articles'])
        });

    }, []);

    return(
        post.map((newPost,index) =>
            <ShowContent key={index} post={index} test={newPost} />
        )

    )
}

export default Content;