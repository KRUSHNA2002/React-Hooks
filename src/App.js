import './App.css';
import Home from "./components/Home";
import About from "./components/About";
// import Contact from './components/Contact';
// import Blog from './components/Blog';
// import Services from './components/Services';
// import Course from './components/Course';
// import Student from './components/Student';
// import Traiding from './components/Traiding';
// import Order from './components/Order';
// import FeedBack from './components/FeedBack';
import Login from './components/Login';
import Movies from './components/Movies';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './components/PageNotFound';
import MyNavbar from './components/MyNavbar';

function App() {
  return (

    <>
       {/* <Home/>
       <About/>
       <Contact/>
       <Blog/>
       <Services/>
       <Student/>
       <Order/>
       <FeedBack/>
       <Traiding/>
       <Course/>
       <Login/> */}
       {/* <Movies/> */}

       {/* const userName=window.prompt('Enter uor username');
      const passWord=parseInt(window.prompt('Enter uor password'));


      return userName==="krushna" && passWord===1234 ? <Home/> : <Login/>  */}
    
    <Router>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>


    </>
  );
}

export default App;
