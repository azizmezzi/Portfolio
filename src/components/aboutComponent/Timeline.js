import React, { Component, Fragment } from "react";
import "./timeline.scss";
// import "./timeline.css";

export default class Timeline extends Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <Fragment>
        {/* <ol className="olTimeline">
          <li className="liTimeline">
            <p class="diplome">BAC S</p>
            <span class="point"></span>
            <p class="description">Ceci est la description du bac S</p>
          </li>
          <li className="liTimeline">
            <p class="diplome">BTS / DUT</p>
            <span class="point"></span>
            <p class="description">
              En lien avec la biologie et/ou la zoologie
            </p>
          </li>
          <li className="liTimeline">
            <p class="diplome">Licence</p>
            <span class="point"></span>
            <p class="description">
              En lien avec la biologie et/ou la zoologie
            </p>
          </li>
          <li className="liTimeline">
            <p class="diplome">Master</p>
            <span class="point"></span>
            <p class="description">TEST</p>
          </li>
          <li className="liTimeline">
            <p class="diplome">Doctorat</p>
            <span class="point"></span>
            <p class="description">
              Souvent nécessaire pour pouvoir accéder aux concours d’embauche de
              centres de recherche tels que l’INRA ou le CNRS
            </p>
          </li>
        </ol>
      */}
        <div class="timeline" style={{ overflow: "auto", height: "100%" }}>
          <h2 class="timeline__item timeline__item--year">2021</h2>

          <div class="timeline__item">
            <h3 class="timeline__title">
              Freelancer + Développeur Fullstack JavaScript [ Node.js / ReactJs
              / React Native ]
            </h3>
          </div>

          <h2 class="timeline__item timeline__item--year">2020</h2>

          <div class="timeline__item">
            <h3 class="timeline__title">
              Développeur Fullstack JavaScript [ Node.js / ReactJs / React
              Native ]
            </h3>
          </div>

          <h2 class="timeline__item timeline__item--year">2019</h2>

          <div class="timeline__item">
            <h3 class="timeline__title">FreeLancer</h3>
          </div>

          <h2 class="timeline__item timeline__item--year">2018</h2>
        </div>
      </Fragment>
    );
  }
}
