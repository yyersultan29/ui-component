import { Navbar } from './components';
import MazeGame from './components/bot';

function App() {
  return (
    <section style={{ background: '#dddd', padding: '20px' }}>
      <Navbar />

      <MazeGame />
    </section>
  );
}

export default App;
