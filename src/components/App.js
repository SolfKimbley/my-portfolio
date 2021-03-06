import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../images/logoSebas.png';

class App extends Component {
  state={
    menuName: "menu",
  }

  onActiveMenu = () =>{
    if(this.state.menuName === "menu"){
      this.setState({menuName: "menu is-active"})
    }else{
      this.setState({menuName: "menu"})
    }
  }

  render() {
    const menuName = this.state.menuName;
    return (
      <div className="App">
        <i className="icon-menu burger-button" onClick={this.onActiveMenu}></i>
        <header className="App-header">
          <div className= "container header">
            <figure className="logo">
              <img src={logo} alt="Logo" height="50"/>
            </figure>
            <nav className={menuName}>
              <ol>
                <li>
                  <a className="link soft" href="#portafolio" onClick={this.props.handleSoft}>Software</a>
                </li>
                <li>
                  <a className="link soft" href="#portafolio" onClick={this.props.handleGames}>Games</a>
                </li>
                <li>
                  <a className="link experiencia" href="#experiencia">Experiencia</a>
                </li>
                <li>
                  <a className="link contacto" href="#contacto">Trabajemos Juntos</a>
                </li>
              </ol>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
