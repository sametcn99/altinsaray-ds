"use client";
import React, { useState, useEffect } from "react";

const UpArrowIcon = () => (
  <svg
    enableBackground="new 0 0 32 32"
    height="32px"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 32 32"
    width="32px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
      fill="#fff"
    />
  </svg>
);

/*
This React component creates a "scroll to top" button that becomes visible when the user scrolls down the page. 
It includes a smooth scroll effect when clicked.
*/

export default function ScrollTop() {
  // State to manage the visibility of the "scroll to top" button
  const [visible, setVisible] = useState(false);

  // Function to scroll back to the top of the page smoothly
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add a scroll event listener to track when to show or hide the button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", () => {
        // You can also remove the listener here for cleanup.
      });
    };
  }, []); // An empty dependency array ensures that this effect runs only once when the component is mounted.

  // Render the "scroll to top" button, which is visible or hidden based on the 'visible' state
  return (
    <>
      {visible && (
        <div
          className={`fixed bottom-4 right-4 z-50 flex h-5 w-5 items-center justify-center rounded-lg bg-background-200 p-6 transition-all duration-300 hover:shadow-xl`}
        >
          <button
            aria-label="Scroll to Top"
            onClick={scrollTop}
            className="bg-opacity-30"
          >
            <UpArrowIcon />
          </button>
        </div>
      )}
    </>
  );
}
