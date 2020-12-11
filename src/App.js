import React from "react";
import "./styles.css";
import { useState } from "react";

const db = {
  HTML: [
    {
      Title: "Getting started with HTML5",
      Description:
        "You don't know anything about web development? Good, you have come to the right place. Not only you'll learn the language of the web: HTML, you'll learn how to make your site pretty with CSS.",
      Link: "https://youtu.be/No8qdcVYiQw"
    },
    {
      Title: "HTML Crash Course For Absolute Beginners",
      Description:
        "In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. ",
      Link: "https://youtu.be/UB1O30fR-EE"
    },
    {
      Title: "HTML Tutorial For Beginners",
      Description:
        "This Edureka video on HTML Tutorial will provide you with a detailed and comprehensive knowledge about HTML. In this HTML Tutorial for Beginners you will learn HTML concepts from scratch and also how to create your first web page using HTML Tags. ",
      Link: "https://youtu.be/88PXJAA6szs"
    }
  ],
  CSS: [
    {
      Title: "CSS Crash Course For Absolute Beginners",
      Description:
        "In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a CSS cheat sheet that you can keep as a resource and we will also create a basic website layout.",
      Link: "https://youtu.be/yfoY53QXEnI"
    }
  ],
  VanillaJS: [
    {
      Title: "Namaste 🙏 JavaScript",
      Description:
        "Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of JavaScript in detail and everything about how JS works behind the scenes inside the JavaScript engine.",
      Link:
        "https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP"
    }
  ],
  React: [
    {
      Title: "ReactJS for Beginners",
      Description: "A really good youtube playlist for learning react",
      Link:
        "https://youtube.com/playlist?list=PLzvhQUIpvvuhRWpaMj-2iHjkL1kUBK7yW"
    }
  ],
  Tools: [
    {
      Title: "Getting started with Git, VSCode and Hosting",
      Description:
        "A good tutorial to learn Git, Github and VsCode. Also you will learn about Netlify hosting services in this video",
      Link: "https://www.youtube.com/watch?v=MMEIVh49pS8"
    }
  ],
  Design: [
    {
      Title: "Intro to Figma - Beginners guide to Figma Basics",
      Description:
        "Figma is one of my favorite digital design softwares of all time. If you're just starting out with Figma or debating on whether you should make the switch this tutorial is for you.",
      Link: "https://youtu.be/jk1T0CdLxwU"
    }
  ]
};

var topicList = Object.keys(db);

export default function App() {
  const [topic, setTopic] = useState("HTML");
  function skillClickHandler(event) {
    setTopic(event);
  }

  return (
    <div className="App">
      <h1>CONSUME WEB DEVELOPMENT</h1>
      <p style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
        Get web-development learning resources at one place. Top quality content
        from some best Youtube, Instagram, Twitter, Github and Blogging handles.
        No need to keep eye on every social media platform, you won't miss
        anything beacause you will get everything here.
      </p>
      <div>
        <ul>
          {topicList.map((topic) => {
            return (
              <li className="list-item-inline">
                <button
                  className="primary-button"
                  onClick={() => skillClickHandler(topic)}
                >
                  {topic}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <section className="section">
        <div className="container">
          <ul>
            {db[topic].map((item) => {
              return (
                <li>
                  <div className="container-skill">
                    <h2>{item.Title}</h2>
                    <p>{item.Description}</p>
                    <a
                      className="secondary-button"
                      href={item.Link}
                      target="blank"
                    >
                      Know More
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer>
        <p>
          {" "}
          Made with{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>{" "}
          by rushi
        </p>
      </footer>
    </div>
  );
}
