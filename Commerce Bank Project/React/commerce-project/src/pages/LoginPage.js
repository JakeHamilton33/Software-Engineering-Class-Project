import './LoginPage.css';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { BrowserRouter,useNavigate } from 'react-router-dom';



function LoginPage({setToken}){
    var refreshPage = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                window.location.reload(false);
            }
        };
    })();

    let history = useNavigate();
    
    const LoginSubmit =(e) =>{
    e.preventDefault();
    history.push('/allProjects')
        
    }

    const[name, setUserName] = useState();
    const[password, setPassword] = useState();
    const[role, setRole] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, password };
        fetch('http://localhost:8080/jpa/login', {
       
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' },
          body: JSON.stringify(user),
          credentials : 'same-origin',
          }).then((res) => {
            console.log(res)     
            return res.json(); 
          }).then((res) =>{
            console.log(res);
            setToken(res);
            sessionStorage.setItem('userName', name);
            window.location.href="/allProjects"
          });
    
    }
        return (
            <div class="page">
                <img src="https://chambermaster.blob.core.windows.net/images/customers/2064/members/5099/logos/MEMBER_PAGE_HEADER/2018cbcagreenverticalfdic.png" alt="logo" id="logo-img"></img>
                <div class="Login">
                    <h1>Login</h1>
                    
                    <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" onChange = {(e)=> setUserName(e.target.value)}/>
                        <Form.Text className="text-muted">
                            Username and Password are Confidential and Private
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange = {(e)=> setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button 
                        variant="primary"
                        type="submit"
                        id="button"
                    >
                        Submit
                    </Button>
                    </Form>
                </div>
            </div>
        );
}

export default LoginPage;
