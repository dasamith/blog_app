import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

import { Container, Row, Col } from "../components/Grid";
import axios from "axios";
import Axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function NewPost() {

    const [state, setstate] = useState({
        title: "",
        blog: "",
    });
    const [recipeSearch, setRecipeSearch] = useState("");

    const handleTyping = (event) => {
        console.log("we are typing", event.target.name);
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSave = () => {
        console.log("you got clicked", state)
        //https://api.giphy.com/v1/gifs/search?api_key=gkXrF127UWQRI7iw1V1p3i0c2ypkBsHS&q=dog&limit=25&offset=0&rating=g&lang=en

        axios.get("https://api.giphy.com/v1/gifs/search?api_key=gkXrF127UWQRI7iw1V1p3i0c2ypkBsHS&q=" + state.title + "&limit=25&offset=0&rating=g&lang=en").then(function (data) {
            console.log("dtaa", data.data.data[2].images.original.url)
            state.pic = data.data.data[2].images.original.url

            axios.post("/save", state).then(function (data) {
                console.log('we got this back from the backend', data)
            })
        })
    }

    const customStyles = {
        text: {
            display: 'block'
        }
    }

    console.log("this is our state!", state)
    return (
        <div>
            <Nav />
            <Link to="/">Go Home </Link>
            <Jumbotron />
            <Container>
                <Row>
                    <Col size="md-12">
                        <form>
                            <Container>
                            </Container>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <div class="textspot">
                        <input name="title" onChange={handleTyping}>
                        </input>
                        <textarea style={customStyles.text} name="blog" onChange={handleTyping}></textarea>
                        <div class="savebtn">
                            <button onClick={handleSave}>save</button>
                        </div>
                    </div>

                </Row>
            </Container>
        </div>
    );
}

export default NewPost;
