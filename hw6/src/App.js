import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import { Footer, Header } from './widgets';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/category' element={<Category />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
