/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Computer.jpg";

const imageAltText = "Laptop image - Personal Computer";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Portfolio Website",
    description:
      "This is my portfolio where I write about my experiences and skills.",
    url: "https://khushijain1209.github.io/FlipKart_SocialMedia_SentimentAnalysis/",
  },
  {
    title: "Celestial Biscuit",
    description:
      "Society for creating Web D and ML Projects- cb26- Licence car plate detection.",
    url: "https://khushijain1209.github.io/Celestial_Biscuit-Project/",
  },
  {
    title: "My Leetcode Profile",
    description:
      "It contains my porogress and Dsa Questions I solve and also tells about my performance",
    url: "https://leetcode.com/Khushi_Jain/",
  },
  {
    title: "Linkedin Profile",
    description:
      "My Proffessional Profile contains all my skills nand achievements",
    url: "https://www.linkedin.com/in/khushi-jain-bb3bb9201/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
