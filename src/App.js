import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero.component';
import Showcase from './components/showcase/showcase.component';
import GridGroup from './components/grid-group/grid-group.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Showcase />
      <GridGroup/>
    </div>
  );
}

export default App;

