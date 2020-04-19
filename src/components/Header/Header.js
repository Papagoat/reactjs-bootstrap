import React from 'react';

import './Header.css';

import Navlinks from './Navlinks/Navlinks';
import Button from '../Button/Button';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <Navlinks link="/" name="Home"></Navlinks>
                        <Navlinks link="/about/" name="About"></Navlinks>
                        <Navlinks link="/info/" name="Info"></Navlinks>
                    </ul>
                    <Search name="Search"></Search>
                </div>
            </nav>
        </div>
    );
}

function Search(props) {
    return (
        <div>
            <form className="form-inline mt-2 mt-md-0">
                <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"/>
                <Button className="btn btn-outline-success my-2 my-sm-0" type="submit" name={props.name}></Button>
            </form>
        </div>
    )
}

export default Header;
