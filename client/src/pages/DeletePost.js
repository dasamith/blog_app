import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

import { Container, Row, Col } from "../components/Grid";
import axios from "axios";

function DeletePost() {

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

    const handleDelete = () => {
        console.log("you got clicked", state)
        axios.post("http://localhost:3001/delete", state).then(function (data) {
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
                    <button onClick={handleSave}>delete</button>
                </Row>
            </Container>
        </div>
    );
}

export default DeletePost;
