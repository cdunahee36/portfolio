import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Biography() {
  return (
    <div>
      <Carousel id="caro">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.orangesmile.com/ru/foto/usa/fodder120119.jpg"
            alt="City at night"
            id="caro-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp6980895.jpg"
            alt="Mountains"
            id="caro-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/317804.jpg"
            alt="Forrest"
            id="caro-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/2494711.jpg"
            alt="Beach"
            id="caro-img"
          />
        </Carousel.Item>
      </Carousel>

      <header class="card-header" id="header-bio">
        <div class="card-title h5" id="secondary-text-head">About Me</div>
      </header>

      <article class="bio-text">
        <p id="secondary-text">
          My name is Caleb Dunahee, I live in a small town in central Illinois. I graduated from Prairie Central High School, where I attended many
          agriculture and industrial tech classes. I also took part in a computer programming class. After I graduated, I worked as a garage door
          technician for ten months. I then enrolled in a Northwestern Coding Bootcamp, where I learned many needed skills in today's workforce.
          I am now a certified Web developer, who is proficient in CSS, JavaScript and React.js. Feel free to contact me by any method provided, thanks!
        </p>
      </article>
    </div>
  );
}

export default Biography;