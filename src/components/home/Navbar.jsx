import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a className="navbar-brand logo" href="">
                        <img src={require('../../icon/twitter.png')} alt="" />
                    </a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">

                            <li class="nav-item isearch">
                                <a href="#">
                                    <img clasName="w-10" src={require('../../icon/search.png')} alt="" />
                                </a>
                                <input className="rounded-pill search" type="text" placeholder="Search Twitter" />

                            </li>
                            <li class="nav-item mr-2">
                                <button className=" tombol btn btn-outline-primary rounded-pill mr-1 btn-sm">Log in</button>
                            </li>
                            <li class="nav-item">
                                <button className="tombol btn btn-primary rounded-pill btn-sm">Sign up</button>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;