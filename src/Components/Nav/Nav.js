import React , {Component} from 'react';

import './Nav.css';
import navLogo from './image/navLogo.png';
class Nav extends Component {
    state = {
        navbarToggle : false,

        navbarListLink : [
            {
                name : "Home" , src:"./",
            },
            {
                name : "Order" , src:"./",
            },
            {
                name : "Sign In" , src:"./",
            },
            {
                name : "Contact" , src:"./",
            },
            {
                name : "About" , src:"./",
            }
        ]
    }

    navbarToggleHandler = () => {
        this.setState({
            navbarToggle : !this.state.navbarToggle
        });
    }

    overlayEffectHandler = () => {
        this.setState({
            navbarToggle : !this.state.navbarToggle
        });
    }

    componentDidMount = () => {
        window.addEventListener('scroll',this.overlayScrollEfffectHandler);
    }

    overlayScrollEfffectHandler = () => {
        
        if(this.state.navbarToggle){
            this.setState({
                navbarToggle : !this.state.navbarToggle
            })
        }
    }

    render () {
        const toggleNavBar = this.state.navbarToggle?"navbar show":"navbar";

        const togglebar1 = this.state.navbarToggle?"changebar1 bar1":"bar1";
        const togglebar2 = this.state.navbarToggle?"changebar2 bar2":"bar2";
        const togglebar3 = this.state.navbarToggle?"changebar3 bar3":"bar3";

        const navbarOverlayEffect = this.state.navbarToggle?"overlay show":"overlay";

        return (
            <div className="Nav">
                <div className={navbarOverlayEffect} onClick={this.overlayEffectHandler}></div>
                <div className="menu-bar" onClick = {this.navbarToggleHandler}>
                    <span className={togglebar1}></span>
                    <span className={togglebar2}></span>
                    <span className={togglebar3}></span>
                </div>
                <div className="logo">
                    <img src={navLogo} alt="Dinnergise Logo" className="navLogo"/>
                </div>
                <div className={toggleNavBar}>
                    <ul className="navbar-nav">
                        <li className="navbar-list">
                            <a className="nav-link active" href={this.state.navbarListLink[0].src}>
                                {this.state.navbarListLink[0].name}
                            </a>
                        </li>
                        <li className="navbar-list">
                            <a className="nav-link" href={this.state.navbarListLink[1].src}>
                                {this.state.navbarListLink[1].name}
                            </a>
                        </li>
                        <li className="navbar-list">
                            <a className="nav-link" href={this.state.navbarListLink[2].src}>
                                {this.state.navbarListLink[2].name}
                            </a>
                        </li>
                        <li className="navbar-list">
                            <a className="nav-link" href={this.state.navbarListLink[3].src}>
                                {this.state.navbarListLink[3].name} us
                            </a>
                        </li>
                        <li className="navbar-list">
                            <a className="nav-link" href={this.state.navbarListLink[4].src}>
                                {this.state.navbarListLink[4].name}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;