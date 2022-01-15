import {findImagePath} from  '../../functions.js'
import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";


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
                    <Link
                        to={{
                            pathname: "/detail",

                        }}
                        state={{ content:post.post.content }}
                    >
                       Continue reading...
                    </Link>
                </div>
            </div>
        </div>
    )
}


function Content2(path) {
    const [post, setPost] = React.useState([]);
    React.useEffect(() => {
        axios.get( path.path).then((response) => {
            setPost(response.data['articles'])
        });

    }, []);
    console.log(path.path)
    return (
        post.map((newPost, index) =>
            <ShowContent key={index} post={newPost}/>
        )

    )
}

export default Content2;