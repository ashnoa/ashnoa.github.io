import React from "react";
import Header from "./Header";
import Canvas from "./Canvas";
// import Section from './Section';

function Home() {
  return (
    <div className="Home">
      <Canvas></Canvas>
      <Header></Header>
      {/* <Section title='🧑🏻‍💻Work experience'></Section>
      <Section title='🛠Skills'></Section>
      <Section title='🎓Education'></Section>
      <Section title='📝Articles and Talks'></Section> */}
    </div>
  );
}

export default Home;
