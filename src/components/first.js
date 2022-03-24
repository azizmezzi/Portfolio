import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../assets/css/style.scss';
import '../assets/css/image.css';
import './button/button.css';

import SelfPhoto from '../assets/img/selfphoto.jpg';

export default class First extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="box">
            <div class="title2">
              <span class="block"></span>
              <h1>
                Aziz Mezzi<span></span>
              </h1>
            </div>

            <div class="role">
              <div class="block"></div>
              <p>fullStack Dev</p>
            </div>
          </div>

          <div className="view  view-sixth scale-in-center">
            <img src={SelfPhoto} alt="Logo" />
            <div class="mask">
              <h2>FULLSTACK DEV</h2>
              <p>ReactJs (web) / React native (mobile) / nodeJs </p>
              {/* <a href="#" class="info">
                Read More
              </a> */}
            </div>
          </div>
        </div>

        {/* <a href="https://youtu.be/7d2XsPSjjjI" target="_blank"> */}
        <footer>
          <div class="share-button">
            <span>Contact </span>
            <a href="https://www.facebook.com/aziz.mezzi.12">
              {/* <i class="fab fa-facebook-f"></i> */}
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/aziz-mezzi/">
              <LinkedInIcon />
            </a>
            <a href="#" onClick={() => this.props.contact()}>
              <MailOutlineIcon />
            </a>
          </div>
        </footer>
        {/* </a> */}
      </div>
    );
  }
}
