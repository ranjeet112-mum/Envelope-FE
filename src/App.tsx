import Layout from './components/Layout';
import Profile from './components/Profile';
import NotFound from './components/NotFound'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={<Home />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound />} />


          </Route>

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
