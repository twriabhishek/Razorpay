import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cards from './component/Cards';
import SuccessPage from './component/SuccessPage';
import ProductList from './component/ProductList';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/card' element={<ProductList/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
