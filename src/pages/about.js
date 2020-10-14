import React from 'react';
import Header from '../components/Header';
import { Link } from 'gatsby'

export default function About() {
  return (
    <div style={{ color: "teal" }}>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/about-css-modules/">blog post</Link>
      <Header headerText="About Gatsby, now with components" />
      <Header headerText="reusing code like a fucking badass" />
      <p>Very React</p>
    </div>
  )
}