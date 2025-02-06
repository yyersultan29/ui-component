import { Navbar } from './components';
import Sidebar from './components/sidebar';
import MazeGame from './components/bot';

function App() {
  return (
    <section style={{ background: '#dddd', padding: '20px' }}>
      <Navbar />
      <Sidebar />

      <MazeGame />
    </section>
  );
}

export default App;
