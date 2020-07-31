import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

function App() {

  const [state, setstate] = useState({
    title: "",
    blog: "",
  });
  const [recipeSearch, setRecipeSearch] = useState("");

  const handleTyping = (event) => {
    console.log("we are typing", event.target.value);
    setstate({
      title: event.target.value
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
          <input onChange={handleTyping}>

          </input>
          <textarea></textarea>
          <button>save</button>


        </Row>
      </Container>
    </div>
  );
}

export default App;
