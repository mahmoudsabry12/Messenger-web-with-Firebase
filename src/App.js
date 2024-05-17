
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {BrowserRouter , Routes,Route , Navigate} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {

  const {currentUser} =useContext(AuthContext)
  console.log(currentUser)
  const ProtectedRoute = ({children}) => {
        if(!currentUser){
          return <Navigate to= "/login" />
        }
        return children
  }
  console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
          </Route>
        </Routes>
        </BrowserRouter>
      {/*   <Home />
    <Login />
      <Register /> */}
    </div>
  );
}

export default App;
