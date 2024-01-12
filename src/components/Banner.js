import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {

    const myName="Hi! I'm Aryan Khatri..."
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const positionsToRotate = ["Software Engineer", "Android Developer", "MERN Stack Developer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        
        return (() => clearInterval(ticker)) //cleanup on unmount
    },[text])

    const tick = () => {
        let i = loopNum % positionsToRotate.length;
        let fullText = positionsToRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        
        if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    }
    return (
        <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7} className="textPad">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__fadeIn" :""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{myName} <span className="txt-rotate"><br></br><span className="wrap">{text}</span></span></h1>
                                    <p></p>
                                    <button onClick={() => window.location.href = '#footer'}>Let’s Connect <ArrowRightCircle size={20} /></button>
                                </div>}    
                        </TrackVisibility>
                    </Col>
            <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
            </Col>
          </Row>
        </Container>
      </section>
    )
}