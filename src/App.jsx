import React from 'react';
import {
  Benefits,
  Footer,
  Hero,
  Ingredients,
  Lifestyle,
  Nav,
  Products,
  Testimonials,
  useReveal,
  Why,
} from './components.jsx';

export default function App() {
  useReveal();
  return (
    <>
      <div className="page-bg"></div>
      <Nav/>
      <Hero/>
      <Products/>
      <Benefits/>
      <Ingredients/>
      <Why/>
      <Testimonials/>
      <Lifestyle/>
      <Footer/>
    </>
  );
}
