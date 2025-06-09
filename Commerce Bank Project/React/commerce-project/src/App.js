import {Container} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';

import LoginPage from './pages/LoginPage';
import AllProjects from './pages/AllProjects';
import SubmitProject from './pages/SubmitProject';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer';





function setToken(userToken) {
  console.log("tokenTest")
  console.log(userToken)
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App(){

  const token = getToken();

  if(!token){
    return (
      <div>
        <LoginPage setToken = {setToken}></LoginPage>
      </div>
    );

  }

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<LoginPage/>}/> 
        <Route path="/allProjects" exact={true} element={<AllProjects/>}/> 
        <Route path="/submitProject" exact={true} element={<SubmitProject/>}/>
        <Route path="/projectPage" exact={true} element={<ProjectPage/>}/>
      </Routes>
      <Footer/>
    </div>
      
  );
}

export default App;