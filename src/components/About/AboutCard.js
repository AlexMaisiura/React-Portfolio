import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <b><span className="purple">Alex </span></b>
            and my journey has taken me from
            <b><span className="purple"> Ukraine, Kiev </span></b>
            to the beautiful land of&nbsp;
            <b><span className="purple">Canada </span></b>
            back in 2008.
            <br />
            <br />
            First and foremost, my heart belongs to my amazing family. 
            I'm a proud husband and a lucky dad to four awesome kids. 
            Our family wouldn't be complete without our little Frenchie bulldog, 
            who adds a whole lot of cuteness to our everyday chaos.
            <br />
            <br />
            Now, when I'm not busy with family life, you'll usually find me out and about pursuing my passions. 
            Soccer, baseball, and tennis are my jams. There's something magical about kicking a ball on the field, 
            swinging a bat on the diamond, or volleying a tennis ball back and forth. Sports bring out the competitive 
            spirit in me and let me bond with others who share the same love for the game.
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            More about <strong className="purple">Alex </strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            My
            <b><span className="purple"> educational</span></b> background is rooted in
            <b><span className="purple"> Engineering</span></b> at University of Toronto.
            However, I found myself drawn to technology and coding. So, I decided to embark on the ultimate coding journey and pursued the JavaScript, TypeScript, 
            and Angular certification at Seneca College, as well as completed the nano education course on Udemy.
            With these certifications in hand  I started my career as a 
            <b><span className="purple"> Web Developer</span></b>
            at EXECute Inc.,  After two years with EXECute Inc., 
            I moved on to work as a Frontend Developer in a WestTransAuto Inc. company in Toronto. 
            I ended up at TELUS as a Software Developer with a front-end focus. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
