import './App.css';
import Header from './Header';
import Canvas from './Canvas';
// import Section from './Section';

function App() {
  return (
    <div className="App">
      <Canvas></Canvas>
      <Header></Header>
      {/* <Section title='🧑🏻‍💻Work experience'></Section>
      <Section title='🛠Skills'></Section>
      <Section title='🎓Education'></Section>
      <Section title='📝Articles and Talks'></Section> */}
    </div>
  );
}

export default App;
