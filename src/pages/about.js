import React from 'react';
import Header from '../components/Header';

export default function About() {
  return (
    <div style={{ color: 'teal' }}>
      <Header headerText = "About Gatsby, now with components" />
      <Header headerText = "reusing code like a fucking badass" />
      <p>Very React</p>
    </div>
  )
}