import './SubmitProject.css'

import React, {Component, useEffect, useState} from 'react';
import { Button, Form } from 'react-bootstrap';

function SubmitProject(props) {

    const[project, setProject] = useState({
        projectName:'',
        requesterName: sessionStorage.getItem('userName'),
        license:'',
        state:'Pending',
        url:'',
        summary:'',
    });
    
    const changeValue=(e)=>{
        setProject({
         ...project, [e.target.name]:e.target.value  
        });
    }

    const submitProject =(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/opensource", {
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(project)
        })
        .then(res=>{
            console.log(1,res);
            if(res.status === 201){
              return res.json();
            }else{
              return null;
            }
          })
        .then(res=>{
          console.log(res)
          if(res!==null){
           window.location.href = "/allProjects"
          }else{
            alert('fails');
          }
        });
    
    }

    return (
            <div class="submitPage">
                <div class="SubmitProject">
                    <h1>Submit New Project</h1>

                    <div>
                    <Form onSubmit={submitProject}>
                        <label>
                            Name of Project
                        </label>
                        <p></p>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            onChange={changeValue}
                            name="projectName"
                        />
                        <p></p>
                    
                        <label>
                            URL of Project
                        </label>
                        <p></p>
                        <input
                            id="SingleLine"
                            type="textarea"
                            placeholder= "Enter URL"
                            onChange={changeValue}
                            name="url"
                        />
                        <p></p>

                        <label>
                            License
                        </label>
                        <p></p>
                        <input
                            id="SingleLine"
                            type="textarea"
                            placeholder='Enter License'
                            onChange={changeValue}
                            name = "license"
                        />
                        <p></p>
                        
                    <label>
                            Summary of Project
                        </label>
                        <p>
                        </p>
                        <textarea
                            id='Summary'
                            placeholder="Enter Summary of Project"
                            name = "summary"
                            onChange={changeValue}
                        />
                        <p></p>
                    
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
                
            </div>
            
        );
    }
export default SubmitProject;