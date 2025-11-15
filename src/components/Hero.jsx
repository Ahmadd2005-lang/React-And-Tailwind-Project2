import React from "react";
import heroImage from "../assets/undraw_data-at-work_3tbf.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto px-6 space-x-6 mt-12 flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-900">
            <h1 className="font-bold text-3xl md:text-5xl">
                Get started with Tailwind CSS
            </h1>
            <p>
                Tailwind CSS works by scanning all of your HTML files, JavaScript
                components, and any other templates for class names, generating the
                corresponding styles and then writing them to a static CSS file.
            </p>
            <a
                href="#"
                className="text-white bg-orange-500 rounded-full py-2 px-6 hover:bg-slate-900 self-center md:self-start"
            >
                Call Me
            </a>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
