import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Navui from "../components/navui";
import axios from "axios"
import AmithBio from './AmithBio'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function Home() {

    const [state, setstate] = useState({
        blogPosts: [],
    });

    useEffect(function () {
        axios.get("/allPost").then(function (data) {
            console.log("this is our data", data.data)
            setstate({
                blogPosts: data.data
            })
        })
    }, [])

    const handleDelete = (id) => {
        console.log("you got clicked", id)
        axios.delete("/delete/" + id).then(function (data) {
            console.log('we got this back from the backend', data)
        })
    }




    console.log("this is our state, ", state)
    return (
        <div>
            {/* <Navui /> */}
            {/* <Link to="/store">Store </Link>
            <Link to="/about">About</Link>
            <Nav />
            <Jumbotron />
            <Link to="/newpost"> New Blog Post Page! </Link>
            <h2> Home page!</h2> */}


            {state.blogPosts.map(function (blog) {
                console.log("Lopping", blog)
                return (
                    <div key={blog._id} className="post">
                        <h1>{blog.title}</h1>
                        <img src={blog.pic}></img>

                        <div className="deletebtn">
                            <button onClick={() => { handleDelete(blog._id) }}>delete</button></div>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
