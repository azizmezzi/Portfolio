import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MapsComponent from './MapsComponent/MapsComponent';
import './button/button2.css';
import './contactme/stylecontact.css';
import * as emailjs from 'emailjs-com';
import axios from 'axios';
var nodemailer = require('nodemailer');

export default class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      subject: '',
    };
  }

  componentDidMount() {
    // function([string1, string2],target id,[color1,color2])
    consoleText(
      [
        `Je suis intéressée par toute opportunité de freelance et par des projets originaux et intéressants. Pour toute information veuillez me contacter via le formulaire ci-dessous.`,
        // "Console Text",
        // "Made with Love.",
      ],
      'text',
      ['white', 'rebeccapurple', 'lightblue']
    );

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute('style', 'color:' + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0]);
            letterCount += x;
            waiting = false;
          }, 500);
        }
        //  if (letterCount === words[0].length + 1 && waiting === false) {
        //   waiting = true;
        //   window.setTimeout(function () {
        //     x = -1;
        //     letterCount += x;
        //     waiting = false;
        //   }, 1000);
        // } else
        else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 80);
      window.setInterval(function () {
        if (visible === true) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';

          visible = true;
        }
      }, 400);
    }
  }
  render() {
    return (
      <div className="content" style={{ overflow: 'auto', height: '100vh' }}>
        <div style={{ float: 'right', width: '150%' }}>
          <div className="title">
            <h1 className="abouttitle">
              About
              <br />
              Me
            </h1>
            {/* <div className="center"> */}
            <div class="console-container" className="pAbout2">
              <span id="text"></span>
              <div class="console-underscore" id="console">
                &#95;
              </div>
            </div>

            {/* <p
              id="text"
              className="pAbout2"
              style={{ justifyContent: "flex-start" }}
            >
              Je suis intéressé par votre offre d'emploi ou vos opportunités de
              freelance - particulièrement ambitieux ou grand projet. howerver,
              si vous avez une demande ou une question, n'hésitez pas à me
              contacter via le formulaire ci-dessous ou mon email
            </p> */}
            <div
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              <TextField
                className="slide-in-fwd-center"
                id="filled-basic"
                label="name"
                variant="filled"
                onChange={(e) => this.setState({ name: e.target.value })}
                style={{
                  background: 'white',
                  marginTop: 50,
                  marginRight: 100,
                  display: 'inline-block',
                }}
              />
              <TextField
                onChange={(e) => this.setState({ email: e.target.value })}
                className="slide-in-fwd-center"
                id="filled-basic"
                label="email"
                variant="filled"
                style={{
                  background: 'white',
                  marginTop: 50,
                  display: 'inline-block',
                }}
              />
            </div>
            <div
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              <TextField
                onChange={(e) => this.setState({ subject: e.target.value })}
                className="slide-in-fwd-center"
                id="filled-basic"
                label="subject"
                variant="filled"
                style={{
                  background: 'white',
                  marginTop: 50,
                  width: 550,
                }}
              />
            </div>
            <div
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              <TextField
                onChange={(e) => this.setState({ message: e.target.value })}
                className="slide-in-fwd-center"
                style={{
                  background: 'white',
                  marginTop: 50,
                  // marginRight: 100,
                  width: 550,
                }}
                id="outlined-multiline-static"
                label="message"
                multiline
                rows={4}
                variant="filled"
              />
            </div>
            <div
              style={{
                cursor: 'pointer',

                marginTop: 50,
                marginLeft: '50%',
                width: 550,
              }}
              className="navBu"
              onClick={() => {
                const { subject, name, email, message } = this.state;
                console.log(this.state);
                var data = {
                  to_email: email,
                  message: message,
                };

                emailjs.send('1', 'template_073le9k', data, 'user_ulAEFJGLJcvUkgKJ8SQxO').then(
                  function (response) {
                    console.log(response.status, response.text);
                  },
                  function (err) {
                    console.log(err);
                  }
                );
              }}
            >
              <ul className="ulBu slide-in-fwd-center ">
                <li className="liBu">
                  envoyer
                  <span className="spanBu" className="span"></span>
                  <span className="spanBu"></span>
                  <span className="spanBu"></span>
                  <span className="spanBu"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MapsComponent />

        {/* </div> */}
      </div>
    );
  }
}
