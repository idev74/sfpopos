import React from "react"
import "./Title.css"
import RandomSpace from "../RandomSpace/RandomSpace";
import { NavLink } from 'react-router-dom';


export default function Title() {
  return (
    <section className="Title">
      <header>
        <nav class="account-links">
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/login">Log In</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/signup">Sign Up</NavLink>
        </nav>
        <h1>SFPOPOS</h1>
        <p className="Title-Subtitle">San Francisco's Privately Owned Public Spaces
        </p>

        <nav className="page-links">
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/">List</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/about">About</NavLink>
          <RandomSpace />
        </nav>

      </header >
    </section>
  )
}
