import React from "react";

const About = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${violet1})` }}
      name="About"
      className="comp w-full h-screen"
    >
      {/*Container*/}
      <div className="text-white max-w-[1000px] mx-auto px-3 flex flex-col justify-center h-full">
        <br /><br />
        <p className="about text-2xl">About Me ; I am a Computer Science student 💻 at McMaster University with overall 4 years of experience.
        <br /><br />
        I started my journey with python back in high school where I learned the basics of programming, logic, databases and file systems.
        <br /><br />
        In my final year of high school 🎓, I along with 2 of my teammates worked on our first project, a Graphical user interface (GUI) database system - The Hospital Management System 🏥 using Tkinter Python and SQLite which I further improved later in May 2022.
        <br /><br />
        After coming to University, I got the chance to learn multiple languages like Haskell, C and Elm in my first year and covered topics 📝 like Discrete maths, Development basics, Web programming and more.
        <br /><br />
        With that, I also started web development and learned a few other languages and frameworks/technologies like react - JS, Node - JS, Express, MongoDB, HTML/CSS and made multiple projects trying to make use of the new things that I learned.
        <br /><br />
        To conclude, my current goal 🎯 is to gain more experience in the field by working for a company trying to implement what I learned.

        </p>
      </div>
    </div>
  );
};

export default About;
