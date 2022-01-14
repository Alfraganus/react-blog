import {findImagePath} from  '../../functions.js'
import React from "react";
import Categories from "./first_sub_menu";
import axios from "axios";
const baseURL = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c85227fb62964655a9b5f976448dd132";

function ShowContent(post)
{
    return (
        <div>
            <div id="featured_project">
                <img src={findImagePath('slider/1.jpg')}/>
            </div>

            <div id="templatemo_main">
                <div className="post_section">
                    <span className="comment"><a href="blog_post.html">128</a></span>
                    <div>
                    <h2><a href="blog_post.html">{post.post.title} </a></h2>
                    </div>
                    {post.post.publishedAt} | <strong>Author:</strong> {post.post.author} <strong>Source:</strong> <a href="#">{post.post.source.name}</a>
                    <img width="420px" src={post.post.urlToImage} alt="image 1"/>
                    <p>{post.post.description}</p>
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

    return (
        post.map((newPost, index) =>
            <ShowContent key={index} post={newPost}/>
        )

    )
}

export default Content;