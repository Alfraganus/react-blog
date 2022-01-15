import  React,{ useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const baseURL = "https://newsapi.org/v2/top-headlines/sources?apiKey=c85227fb62964655a9b5f976448dd132";


var data = [];
function Car() {
    return <h2>I am a Car!</h2>;
}
function Categories() {
    const [post, setPost] = React.useState([]);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data['sources'])
            data.push(response.data['sources']);
        });

    }, []);
    return (
            <ul>
                <li>
                    <Link  to={{ pathname: "/" }}> Everything </Link>
               </li>
                <li>
                    <Link  to={{ pathname: "/entertainment" }}> Entertainment </Link>
                </li>
                <li><a href="about.html">general</a></li>
            </ul>
    )

}

export default Categories;