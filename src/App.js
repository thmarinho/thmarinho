import './App.css';
import FileFinder from './components/FileFinder';
import MainArea from './components/MainArea';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="h-screen w-screen flex">
      <NavBar />
      <FileFinder />
      <MainArea />
    </div>
  );
}

export default App;
