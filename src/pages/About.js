import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {profile_pic_name}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Juan Pablo Roa</div>
        <div className="brief_description">
          I am into sports, especially soccer, golf, and track and field. My favorite food are empanadas 
          and my favorite color is green. I like to play video games and watch television.
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}