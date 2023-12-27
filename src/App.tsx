import Layout from './components/Layout';
import Profile from './components/Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='home' element={<Profile />} />
          </Route>

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
