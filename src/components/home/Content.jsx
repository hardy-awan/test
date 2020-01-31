import React, { Component } from 'react';
import './style.css';
import Comment from './Comment';
import SidebarRight from './SidebarRight';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Content extends Component {
render() {
return (
<div class="container contenttop">

    <div class="row">
        <div class="col-sm-7">
            <div class="card">

                <img className="banner" src={require('../../gambar/banner.jpg')} alt="" />
                <img className="profile img-thumbnail rounded-circle" src={require('../../gambar/profile.png')}
                    alt="" />

            </div>
            <button className="follow btn btn-outline-primary rounded-pill float-right">Follow</button>
            <div className="text">
                <img src={require('../../icon/ceklist.PNG')} alt="" />
                <h5><strong>Adobe</strong></h5>
                <p>@Adobe</p>

                <p>Changing the world through digital experiences. Need help? Visit us at <a
                        href="#">http://helpx.adobe.com/support.html</a> or reach out to
                    @AdobeCare
                    .</p>
            </div>

            <div class="row linkcontent tex-center">
                <div class="col-sm-0,5 space">
                    <img src={require('../../icon/location.PNG')} alt="" />
                </div>
                <div class="col-sm-3,5 space">
                    <p>Location: All Over the word</p>
                </div>
                <div class="col-sm-0,5 space">
                    <img src={require('../../icon/link.PNG')} alt="" />
                </div>
                <div class="col-sm-3,5 space">
                    <p><a href="">theblog.adobe.com</a></p>
                </div>
                <div class="col-sm-0,5 space">
                    <img src={require('../../icon/date.PNG')} alt="" />
                </div>
                <div class="col-sm-3,5 space">
                    Joined Agustus 2009
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <p><strong>185</strong> Following</p>
                </div>
                <div class="col-sm-3">
                    <p><strong>652.1K</strong> Follower</p>
                </div>
            </div>

            <Comment />

        </div>


        <SidebarRight />
    </div>
</div>
);
}
}

export default Content;