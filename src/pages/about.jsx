import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-pp1 font-semibold text-3xl">About page</h2>
      <div className="bg-ss1 dark:bg-background-dark text-p5  dark:text-text-dark shadow-xl font-inter p-6 rounded-xl">
        <h1 className="text-2xl font-heading text-primary">
          Tailwind-style Design System and routing example
        </h1>
        <p className="text-text-subtle">
          This matches Tailwind’s own website style .
        </p>
      </div>
    </div>
  );
}
export default About;
