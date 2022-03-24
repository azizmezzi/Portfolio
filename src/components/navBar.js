import React, { Component, Fragment } from 'react';
import '../assets/css/style.css';
import First from './first';
import About from './about';
import Work from './Work';
import ContactMe from './ContactMe';

export default class navBar extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: 0 };
  }

  content = () => {
    const { nav } = this.state;
    switch (nav) {
      case 0:
        return <First contact={this.contact} />;
      case 1:
        return <About />;
      case 2:
        return <Work />;
      default:
        return <ContactMe />;
    }
  };

  contact = () => {
    this.setState({ nav: 3 });
  };

  render() {
    return (
      <Fragment>
        <div className="body">
          <nav>
            <ul>
              <li onClick={() => this.setState({ nav: 0 })}>
                <div class="home-icon">
                  <div class="roof">
                    <div class="roof-edge"></div>
                  </div>
                  <div class="front"></div>
                </div>
              </li>
              <li onClick={() => this.setState({ nav: 1 })}>
                <div class="about-icon">
                  <div class="head">
                    <div class="eyes"></div>
                    <div class="beard"></div>
                  </div>
                </div>
              </li>
              <li onClick={() => this.setState({ nav: 2 })}>
                <div class="work-icon">
                  <div class="paper"></div>
                  <div class="lines"></div>
                  <div class="lines"></div>
                  <div class="lines"></div>
                </div>
              </li>
              <li onClick={() => this.setState({ nav: 3 })}>
                <div class="mail-icon">
                  <div class="mail-base">
                    <div class="mail-top"></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        {this.content()}
      </Fragment>
    );
  }
}
