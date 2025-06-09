import './ProjectPage.css'
import React, {useEffect, useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

var projectName, requesterName, requesterID, url, desc, license, state;

var userName, role, userID;
var user;

var activeName = sessionStorage.getItem('userName');

function ProjectPage(props){

    const[users, setUser] = useState([]);


    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const userRole = userToken.role;


    const CancelProject =(e)=>
    {

        e.preventDefault();
        console.log("cancel");

        fetch("http://localhost:8080/opensource/" + projectId, {method:"DELETE"})
        .then(res=>res.text()
        )
        .then(res=>{
            if(res==='ok'){

                console.log("history");
                window.location.href='/allProjects';
            }else{
                alert('fail');
            }

        });
    }

    const ApproveProject =(e)=>
    {
        e.preventDefault();
        console.log("approve");

        fetch("http://localhost:8080/opensource/" + projectId + "/0", {method:"PUT"})
        .then(res=>res.text()
        )
        .then(res=>{
                window.location.href='/allProjects';
        });
    }

    const DenyProject =(e)=>
    {
        e.preventDefault();
        console.log("deny");

        fetch("http://localhost:8080/opensource/" + projectId + "/1", {method:"PUT"})
        .then(res=>res.text()
        )
        .then(res=>{
                window.location.href='/allProjects';

        });
    }

    const[projects, setProject] = useState([]);

    useEffect(()=>{
        
        fetch("http://localhost:8080/opensource", {method:"GET"})
         .then(res => res.json())
         .then(res =>{setProject(res);})

    },[]);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectId = urlParams.get("id");
    

    projects.map(prj=>
        {
            if(prj.id == projectId)
            {
                requesterName = prj.requesterName;
                projectName = prj.projectName;
                requesterID = prj.requesterID;
                url = prj.url;
                desc = prj.summary;
                license = prj.license;

                if(prj.state == "Approved")
                {
                    state = 2;
                }
                else if(prj.state == "Denied")
                {
                    state = 1;
                }
                else
                {
                    state = 0;
                }

                return;
            }
        }
    );

    console.log(activeName + requesterName);

    render() 
    {
        return (
            <div class="projectPage">
                <div class="ProjectPage">
                    <h1>Project Description</h1>

                    <div>
                    <Form>
                        <label class = "labels">
                            Name of Project:
                        </label>
                        <p></p>
                        <text class="data" id="projectName">
                            {projectName}
                        </text>
                        <p></p>
                    
                        <label>
                            URL of Project :
                        </label>
                        <p></p>
                        <text class="data">
                            <a href={"https://" + url}>
                                {url}
                            </a>
                        </text>
                        <p></p>

                        <label>
                            License :
                        </label>
                        <p></p>
                        <text class="data">
                            {license}
                        </text>
                        <p></p>

                        <label>
                            Summary of Project:
                        </label>
                        <p></p>
                        <textarea class="data" id="textArea" value={desc} readOnly>

                        </textarea>
                        <p></p>

                        {state == 0 && userRole == 2 && activeName != requesterName &&
                            <Button
                                variant="primary"
                                type="submit"
                                id = 'Approve_Button'
                                class ="buttons"
                                onClick={ApproveProject}
                            >
                                Approve Project
                            </Button>
                        }
                        {state == 0 && userRole == 2 && activeName != requesterName &&
                            <Button
                                variant="primary"
                                type="submit"
                                id = 'Deny_Button'
                                class ="buttons"
                                onClick={DenyProject}
                            >
                                Deny Project
                            </Button>
                        }
                        {state == 0 && activeName == requesterName &&
                            <Button
                                variant="primary"
                                type="submit"
                                id = 'Cancel_Button'
                                class ="buttons"
                                onClick={CancelProject}
                            >
                                Cancel Project
                            </Button>
                        }
                    </Form>
                    </div>
                </div>
                
            </div>
        );
    }}

export default ProjectPage;