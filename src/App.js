import logo from './logo.svg';
import './App.css';
import SuperInfo from './components/Superinfo';
import Header from './components/Header';
import Introducao from './components/Introducao';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Preco from './components/Preco';
import Qualidade from './components/Qualidade';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <SuperInfo/>
      <Header/>
      <Introducao/>
      <Sobre/>
      <Produtos/>
      <Preco/>
      <Qualidade/>
      <Newsletter/>
      <Footer/>
    </div>
  );

  
}

export default App;
