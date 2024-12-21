import './App.css';
import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
function App() {
  // Scroll to the top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  }, []); // Empty dependency array ensures it runs only on component mount
  return (
    <>
      <AnimatedCursor
        className='animated-cursor'
        innerSize={8}
        outerSize={8}
        color='177, 188, 199'
        outerAlpha={0.5}
        innerScale={2}
        outerScale={6}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'p', // Add paragraph tags
          'span', // Span tags are often used for inline text
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img',// Header tags for title text
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 5,
              innerScale: 2,
              outerScale: 5
            }
          }
        ]}
      />
      {/* Common Navbar for all pages */}
      {/* This will render child components based on the current route */}
      <Outlet />
    </>
  );
}

export default App;
