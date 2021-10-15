import {Header} from './components/Header'
import {Main} from './components/Main'
import {Footer} from './components/Footer'
import './App.css'

function App() {
  console.log('The App component has (re)rendered')
  return (
    <div id="body">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
