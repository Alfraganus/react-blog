import {findImagePath} from  '../../functions.js'
import React, {useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router"

function ShowContent(post)
{
    return (
        <div>
            <div id="templatemo_main">
                <div className="post_section">
                    <span className="comment"><a href="blog_post.html">128</a></span>
                    <div>
                    <h2><a target="_blank" href={post.post.url}>{post.post.title} </a></h2>
                    </div>
                    {post.post.publishedAt} | <strong>Author:</strong> {post.post.author} <strong>Source:</strong> <a href="#">{post.post.source.name}</a>
                    <img width="420px" src={post.post.urlToImage} alt="image 1"/>
                    <p>{post.post.description}</p>
                    <a target="_blank"  href={post.post.url}>
                        Continue reading...
                    </a>
                </div>
            </div>
        </div>
    )
}


function Content() {
    const location = useLocation()

    const [post, setPost] = React.useState([]);
    useEffect(() => {
        axios.get(location.state).then((response) => {
            setPost(response.data['articles'])
        })
    }, [location.state])


    return (
        post.map((newPost, index) =>
            <ShowContent key={index} post={newPost}/>
        )
    )
}

export default Content;