import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
// import Row from "reactstrap";
// import Col from "reactstrap";

function AmithBio() {
    return (
        <div>
            <header>
                <h1 className="Headername">Amith Das</h1>
                <div className="linkcontainer">

                    <Link className="Links" to="https://github.com/dasamith">Github</Link>
                    <Link className="Links" to="https://www.linkedin.com/in/amith-das-1775b1170">Linkdin</Link>
                </div>
            </header>

            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="index.html">About</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="assets/portfolio.html">Portfolio <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="assets/contact.html">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>


                <section>
                    <nav2>
                        <img src="/assets/image/pic.jpg" width="220" height="220" />
                        <p>2515 W walnut st, Colmar,<br />PA 18915.</p>
                        <p>Cell phone: 267-498-8404</p>
                        <p>Email: amith123.ad@gmail.com</p>
                        <p>A dedicated and inspired web designer and an Information Technology Enthusiast.</p>
                    </nav2>
                    <article>

                        <div className="Education">
                            <p className="edu1">
                                <h3>Penn LPS (College of liberal and Professional studies)</h3>
                                <li>Penn LPS Coding React & Node JS Bootcamp Certification</li>
                                <li>Technologies: Github, html, css, javascript, express, react, bootstrap, SQL, mongodb, devops
                                 </li>
                            </p>
                            <p className="edu2">
                                <h3>Montgomery County Community college, Bluebell PA</h3>
                                <li>Computer Science</li>
                                {/* <li>Graduation Date: Currently enrolled</li>  */}

                            </p>
                        </div>
                        <br />
                        <div className="Experiaence">
                            <hr />
                            <p className="job1">
                                <h3>Assembler/Packer
                                    <br />Curtiss Wright/ EST Group
                                    <br />September 2017- present</h3>
                            </p>
                            <ul>
                                <li>Mark and label containers, containertags, or products, using marking tools.</li>
                                <li>Measure, weigh, and count products and materials.</li>
                                <li>Examine and inspect materials, and products</li>
                            </ul>

                        </div>
                    </article>
                </section>
            </div>

            {/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
                <h1>Pupster</h1>
                <h2>They're the Good Boys and Girls</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome To Pupster!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
                            sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
                            gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
                            turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
                            tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
                            quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
                            volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
                            mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
                            tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
                        <p>
                            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                            malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                            ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                            nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                            Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                            porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
                        <p>
                            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
                            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
                            sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
                            Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
                            congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
                            vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
                            nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
                            Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
                            libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
                            eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
                            interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
                            massa.
            </p>
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default AmithBio;
