import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import axios from "axios"


function Home() {

    const [state, setstate] = useState({
        blogPosts: [],
    });

    useEffect(function () {
        axios.get("http://localhost:3001/allPost").then(function (data) {
            console.log("this is our data", data.data)
            setstate({
                blogPosts: data.data
            })
        })
    }, [])

    const handleDelete = (id) => {
        console.log("you got clicked", id)
        axios.delete("http://localhost:3001/delete/" + id).then(function (data) {
            console.log('we got this back from the backend', data)
        })
    }




    console.log("this is our state, ", state)
    return (
        <div>
            <Nav />
            <Jumbotron />

            <h1> Home page!!!!!!</h1>

            {state.blogPosts.map(function (blog) {
                console.log("Lopping", blog)
                return (
                    <div>
                        <h1>{blog.title}</h1>
                        <button onClick={() => { handleDelete(blog._id) }}>delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
