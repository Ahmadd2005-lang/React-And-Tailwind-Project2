import React from "react";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container px-5 my-32 mx-auto text-center">
        <h2 className="text-4xl font-bold">
          "Best practices" don't actually work.
        </h2>

        <p className="mt-8 mx-auto max-w-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, praesentium reprehenderit! Ea provident illum deleniti aperiam magni reprehenderit porro pariatur dolores, repellat numquam, molestias soluta.</p>

        <div className="mt-10 flex flex-col  md:flex-row space-x-0 space-y-8 md:space-x-5 md:space-y-0">
          <div className="md:w-1/3 bg-slate-100 flex flex-col p-6 items-center space-y-2 rounded-lg border border-slate-200">
            <img src={person1} className="w-16 rounded-full -mt-12" alt="person1" />

            <h5 className="text-lg font-bold">Adam Sander</h5>
            <p className="leading-5 text-sm text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolorem deserunt doloribus id vero laborum.
            </p>
          </div>

          <div className="md:w-1/3 bg-slate-100 flex flex-col p-6 items-center space-y-2 rounded-lg border border-slate-200">
            <img src={person2} className="w-16 rounded-full -mt-12" alt="person2" />
            <h5 className="text-lg font-bold">Sara Romeo</h5>
            <p className="leading-5 text-sm text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolorem deserunt doloribus id vero laborum.
            </p>
          </div>

          <div className="md:w-1/3 bg-slate-100 flex flex-col p-6 items-center space-y-2 rounded-lg border border-slate-200">
            <img src={person3} className="w-16 rounded-full -mt-12" alt="person3" />
            <h5 className="text-lg font-bold">Henry Welson</h5>
            <p className="leading-5 text-sm text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolorem deserunt doloribus id vero laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
