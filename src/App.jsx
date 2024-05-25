import Header from './components/Header/Header.jsx';
import './App.scss';
import Main from './components/Main/Main.jsx';
import Drawer from './components/Drawer/Drawer.jsx';

function App() {

  return (
    <div>
      <div className='wrapper'>
        <Drawer />
        <Header />
        
      </div>
      <div className='wrapper'>
        <Main />
      </div>
    </div>
    
      
  )
}

export default App
