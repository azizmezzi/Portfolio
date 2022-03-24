import React, { Component } from 'react';
import Timeline from './aboutComponent/Timeline';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `Je suis Ingénieur en Informatique diplômé de l’École Nationale d’ingénieurs de Carthage en 2019. J’ai un an d'éxpérience en développement web et mobile au sein de l’entreprise K2lis Tunisie spécialisée  dans les solutions blockchain (web et/ou mobile). Je suis organisé, sérieux et je suis totalement dévoué à tout ce que j'entreprends. Je suis aussi passionné par le sport, la cuisine et les jeux vidéos. Je suis toujours à la recherche de nouveaux projets en développement web fullstack JS. Particulièrement , node et ExpressJS en backend.`,
    };
  }
  componentDidMount() {
    // var text = document.getElementById("text");
    // var newDom = "";
    // var animationDelay = 6;
    // for (let i = 0; i < text.innerText.length; i++) {
    //   newDom +=
    //     '<span class="char">' +
    //     (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
    //     "</span>";
    // }
    // text.innerHTML = newDom + "</div>";
    // var length = text.children.length;
    // for (let i = 0; i < length; i++) {
    //   text.children[i].style["animation-delay"] = animationDelay * i + "ms";
    // }
  }
  render() {
    const { text } = this.state;
    const res = text.split(' ');
    console.log(res);
    var animationDelay = 15;

    return (
      <div className="content" style={{ overflow: 'auto' }}>
        <div style={{ flexDirection: 'row' }}>
          <div className="title">
            <div style={{ float: 'right' }}>
              <h1 className="abouttitle">
                A propos
                <br />
                de moi
              </h1>
              <div className="center">
                <p id="text" className="pAbout">
                  {res.map((mots, index) => {
                    return (
                      <span
                        class="char"
                        style={{
                          animationDelay: index * animationDelay + 'ms',
                        }}
                      >
                        {mots}&nbsp;
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
