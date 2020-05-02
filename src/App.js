import React from 'react';
import headshot from './headshot.jpg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Joseph M. Sak</h1>
        <h2>Web Production &amp; Strategy</h2>

        <img
          src={headshot}
          alt="Professional headshot - vibrant gradient color background, blue t-shirt"
        />
      </header>

      <main>
        <h3>Elegance–Oriented</h3>

        <p>
          When you hire a web developer, you need more than just a coding machine.
          You need someone who brings thoughtfulness and intuition to your project.
          Someone who comes to every problem with a holistic approach. With relentless
          resolve, I challenge myself to find elegant solutions.
        </p>

        <h3>15+ years of professional experience</h3>

        <p>
          I am a seasoned technical consultant and web application director who has
          worked with an expansive array of clients and industries. These experiences
          have shaped my ability to draw keen insights into any project.
        </p>

        <h3>Not just a coder</h3>

        <p>
          Refusing to be limited by any narrow role, I take ownership of my
          responsibility to the client, the project, and the end-user. I communicate
          often and with integrity. You will be delighted to work with me on
          your next project.
        </p>

        <h3>A selection of professional highlights</h3>

        <ul>
          <li>
            Authored a set of Ruby on Rails libraries which comprised the foundation
            of a custom CMS offering, which was still in use reliably and profitably
            by a web design agency seven years later
          </li>

          <li>
            Redesigned the UI and UX—while significantly advancing non-tech staff
            participation in the product development—for Technovation, the world’s
            largest tech entrepreneurship program for girls in underserved communities
          </li>

          <li>
            Centralized and standardized technical operations for the digital PR
            team of a globally recognized celebrity brand
          </li>

          <li>
            Revitalizing major parts of a six years old codebase for Kadenze, the best
            online platform for STEAM courses in partnership with leading colleges,
            universities, and industry partners
          </li>

          <li>
            Developing Code From Craft, learning &amp; mentorship community for
            junior and aspiring web developers.
          </li>
        </ul>

        <h3>All of the hats</h3>

        <p>
          As a project contributor, I am versatile. I have excelled at all points
          along the web development pipeline:
        </p>

        <ul>
          <li>Ideation and discovery of technical requirements</li>
          <li>Organizing and prioritizing tasks</li>
          <li>Prototyping and development</li>
          <li>Testing, QA and customer support</li>
          <li>Client demonstrations and training</li>
          <li>Deploying production-fidelity infrastructure in a range of
          server environments and workflows</li>
        </ul>

        <p>
          I am cross-functional, able to translate across teams and bring
          disparate stakeholders together onto the same page.
        </p>

        <h3>A broad landscape of client history</h3>

        <p>
          Among hundreds of clients, both independently and as an employee of web
          design agencies, I have worked for fast-paced startups, city governments,
          airports and transit authorities, nonprofits, customized 3<sup>rd</sup>
          party and fully in-house e-commerce, boutique agencies, corporate enterprise,
          and more.
        </p>

        <h3>Ready to work with me on your next project?</h3>
        <p>
          <a href="mailto:elegance.begins@joesak.com">elegance.begins@joesak.com</a>
        </p>
      </main>
    </>
  );
}

export default App;
