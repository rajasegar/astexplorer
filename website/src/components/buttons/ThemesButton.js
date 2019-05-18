import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

export default class ThemesButton extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
    this.state = {
      theme: 'default',
    };
  }

  _onClick({target}) {
    let themeID;
    if (target.nodeName.toLowerCase() === 'li') {
      themeID = target.children[0].value;
    } else {
      themeID = target.value;
    }
    //this.props.onThemeChange(themeID);
    this.setState({ theme: themeID });
    let link = document.createElement('link');
    link.href = `https://codemirror.net/theme/${themeID}.css`;
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
    let editors = [].slice.call(document.querySelectorAll('.CodeMirror'));
    editors.forEach(e => {
      e.classList.add(`cm-s-${themeID}`);
    });
  }


  render() {
    const themes = [{'id':0,'name':'default'},{'id':1,'name':'3024-day'},{'id':2,'name':'3024-night'},{'id':3,'name':'abcdef'},{'id':4,'name':'ambiance'},{'id':5,'name':'base16-dark'},{'id':6,'name':'base16-light'},{'id':7,'name':'bespin'},{'id':8,'name':'blackboard'},{'id':9,'name':'cobalt'},{'id':10,'name':'colorforth'},{'id':11,'name':'darcula'},{'id':12,'name':'dracula'},{'id':13,'name':'duotone-dark'},{'id':14,'name':'duotone-light'},{'id':15,'name':'eclipse'},{'id':16,'name':'elegant'},{'id':17,'name':'erlang-dark'},{'id':18,'name':'gruvbox-dark'},{'id':19,'name':'hopscotch'},{'id':20,'name':'icecoder'},{'id':21,'name':'idea'},{'id':22,'name':'isotope'},{'id':23,'name':'lesser-dark'},{'id':24,'name':'liquibyte'},{'id':25,'name':'lucario'},{'id':26,'name':'material'},{'id':27,'name':'mbo'},{'id':28,'name':'mdn-like'},{'id':29,'name':'midnight'},{'id':30,'name':'monokai'},{'id':31,'name':'neat'},{'id':32,'name':'neo'},{'id':33,'name':'night'},{'id':34,'name':'nord'},{'id':35,'name':'oceanic-next'},{'id':36,'name':'panda-syntax'},{'id':37,'name':'paraiso-dark'},{'id':38,'name':'paraiso-light'},{'id':39,'name':'pastel-on-dark'},{'id':40,'name':'railscasts'},{'id':41,'name':'rubyblue'},{'id':42,'name':'seti'},{'id':43,'name':'shadowfox'},{'id':44,'name':'solarized dark'},{'id':45,'name':'solarized light'},{'id':46,'name':'the-matrix'},{'id':47,'name':'tomorrow-night-bright'},{'id':48,'name':'tomorrow-night-eighties'},{'id':49,'name':'ttcn'},{'id':50,'name':'twilight'},{'id':51,'name':'vibrant-ink'},{'id':52,'name':'xq-dark'},{'id':53,'name':'xq-light'},{'id':54,'name':'yeti'},{'id':55,'name':'yonce'},{'id':56,'name':'zenburn'}];

      
      
      
    return (
      <div className={cx({
        button: true,
        menuButton: true,
        disabled: false,
      })}>
      &nbsp;
          <i
            className={cx({
              fa: true,
              'fa-lg': true,
              'fa-paint-brush': true,
            })}
          />
          &nbsp;{this.state.theme}&nbsp;
        {!!themes.length && <ul>
          {themes.map(theme => (
            <li
              key={theme.id}
              className={cx({
                selected: this.props.theme === theme.name,
              })}
              onClick={this._onClick}>
              <button value={theme.name} type="button" >
                {theme.name}
              </button>
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}

ThemesButton.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.string,
};
