import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import charts from "../../Assets/Projects/barras-app.png";
import synonymous from "../../Assets/Projects/synonymous.png";
import minigame from "../../Assets/Projects/minigame.png";
import kings from "../../Assets/Projects/kings.png";
import web3 from "../../Assets/Projects/web3.png";
import npmtiger from "../../Assets/Projects/npmtiger.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synonymous}
              isBlog={false}
              title="TELUS My Account"
              description="Transformed Telus' My Account login page, providing an enhanced user experience. Using Angular, React, and ES6, I created an intuitive interface seamlessly integrated with Telus' backend systems, allowing secure account access, service management, bill viewing, and payments. I also implemented Two-Factor Authentication (2FA) for added security and integrated an API for real-time data.
              Performance optimization, efficient code, and robust error handling ensured fast loading and broad browser compatibility."
              demoLink="https://www.telus.com/en/my-telus-app?linkname=My_TELUS&linktype=ge-mainnav"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kings}
              isBlog={false}
              title="TELUS Offer and Promotions"
              description="I led front-end development using Angular, React, and ES6 to create a user-friendly portal for cell phone plans, promotions, and offers. My work included real-time data integration, personalized content, and advanced search features. I prioritized performance, cross-browser compatibility, and responsive design for accessibility. Collaboration with QA teams ensured a bug-free experience. My documentation supported teamwork, and continuous improvements incorporated user feedback, delivering an informed and seamless user experience in the competitive cell phone plan market."
              demoLink="https://www.telus.com/en/business/small/mobility/cell-phone-plans?cmp=BAC_s7759343_cTelusSBS-PFCnvrsnPMaxENMob2023-FY_bBUS_kw=_placement=_device=c_network=x&inv=1&gad=1&gclid=Cj0KCQjwxuCnBhDLARIsAB-cq1rKPP--Av2J1SYbU40-m-2mROOw1i52QP11z0o8aaRH64b8qQk0mBsaApJgEALw_wcB&gclsrc=aw.ds"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minigame}
              isBlog={false}
              title="TELUS AWS cloud integration"
              description=" I played a key part in a crucial project focused on the integration and deployment of AWS cloud services for our latest product offerings. Leveraging my expertise in Angular, React, ES6, and MySQL. Contributed to streamlining the deployment process on AWS, enhancing product availability and scalability while providing users with a smooth and efficient experience."
              demoLink="https://www.telus.com/en/business/small/deals-and-offers?linkname=Back_to_Business_deals&linktype=ge-mainnav"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="West Trans Auto"
              description="Transformed the outdated westtrans.ca homepage into a modern, responsive design. I also rebuilt the client-side/drivers portal data flow code for the new Account web app, migrating it to Angular4/Redux/Rx.js and optimizing API connectivity. This streamlined deployment through GitHub and Google Closure Compiler.
                           
                           My contributions led to a 27% increase in cross-border transportation services by resolving site crashes and improving design features. Site stickiness rose by 21%, and load times decreased by 17%. I added interactive elements like apps, social media feeds, and forms, enhancing the user experience and bolstering West Trans Auto Inc.'s online presence."
              demoLink="https://www.westtrans.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npmtiger}
              isBlog={false}
              title="King Town Denture"
              description="As the sole developer, I crafted King Town Denture's website from scratch during my tenure as a Web Developer. I oversaw its entire development, from concept to execution, ensuring responsiveness, optimal performance, and accessibility. This hands-on approach tailored the site to King Town Denture's needs, establishing a robust online presence. King Town Denture's website stands as a testament to my comprehensive web development skills, showcasing my ability to transform concepts into functional, visually appealing sites. Witness my dedication and expertise in building it from scratch."
              demoLink="https://kingtowndenture.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charts}
              isBlog={false}
              title="BlueBird IT"
              description="This is a kickass web app that compares player stats using super sleek bar charts. The app includes smooth animations when loading the bars and buttons that let you switch between different time ranges (7 days, 30 days, 90 days, 180 days). It's built using React.js, Vite.js, and Styled Components, so you know it's top quality. Go ahead and give it a try!."
              demoLink="https://www.bluebirdinc.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
