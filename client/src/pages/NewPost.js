import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

import { Container, Row, Col } from "../components/Grid";
import axios from "axios";

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

        axios.post("http://localhost:3001/save", state).then(function (data) {
            console.log('we got this back from the backend', data)
        })
    }


    console.log("this is our state!", state)
    return (
        <div>
            <Nav />
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
                    <input name="title" onChange={handleTyping}>
                    </input>
                    <textarea name="blog" onChange={handleTyping}></textarea>
                    <button onClick={handleSave}>save</button>
                </Row>
            </Container>
        </div>
    );
}

export default NewPost;
