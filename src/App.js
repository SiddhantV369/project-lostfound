
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LostFoundPage from './pages/home';
import LoginForm from './pages/login';
import SignupForm from './pages/signup';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<LostFoundPage/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/signup" element={<SignupForm/>}></Route>
    </Routes>
   </div>
  )
}

export default App;
