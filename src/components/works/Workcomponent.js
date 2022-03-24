import React, { Component } from 'react';
import '../works/work.css';
import './image.css';
import data from './images';

// const data = [SelfPhoto];

export default class Workcomponent extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '200vw', overflow: 'auto' }}>
        <div style={{ marginTop: '10%', marginLeft: '10%' }}>
          <h1 className="abouttitle">
            Mes réalisations
            <br />
          </h1>
        </div>
        <div style={{ marginLeft: '10%' }}>
          {data.map((item) => {
            return (
              <div
                class="flip-card"
                style={{ display: 'inline-block', marginRight: '2%', marginTop: '2%' }}
              >
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={item.img} alt="Avatar" style={{ width: '100%', height: '400px' }} />
                  </div>
                  <div class="flip-card-back" style={item.style}>
                    <div style={{ margin: '60px' }}>
                      <h1 style={{ fontSize: 35 }}>{item.title}</h1>
                      <p style={{ fontSize: 20 }}>{item.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
