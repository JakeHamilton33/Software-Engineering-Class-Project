import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import './AllProjects.css'; 
import '../components/SortableTable.js';

//fetch or axios
 
function AllProjects() {
    var refreshPage = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                window.location.reload(false);
            }
        };
    })();

    const[projects, setProject] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/opensource", {method:"GET"})
         .then(res => res.json())
         .then(res =>{setProject(res);})
    },[]);

        return (
            <div class = "allProjectPage">
            <div style={{width: 1000, margin:'auto', backgroundColor:'white'}}>
                <table class="sortable">
                    <thead>
                        <tr>
                        <th>
                            <button>
                            Project ID
                            <span aria-hidden="true"></span>
                            </button>
                        </th>
                        <th>
                            <button>
                            Project Name
                            <span aria-hidden="true"></span>
                            </button>
                        </th>
                        <th aria-sort="ascending">
                            <button>
                            Requester
                            <span aria-hidden="true"></span>
                            </button>
                        </th>
                        <th>
                            <button>
                            License
                            <span aria-hidden="true"></span>
                            </button>
                        </th>
                        <th>
                            <button>
                            State
                            <span aria-hidden="true"></span>
                            </button>
                        </th>
                        <th>
                            <button>
                            Date Requested
                            <span aria-hidden="true"></span>
                            </button>
                        </th>
                        <th>
                            <button>
                            Date Approved
                            <span aria-hidden="true"></span>
                            </button>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(prj=>
                        <tr>
                            <td class="num">{prj.id}</td>
                            <td>
                                <a
                                    href = {"./projectPage?id=" + prj.id}>
                                    {prj.projectName}                               
                                </a></td>
                            <td>{prj.requesterName}</td>
                            <td>{prj.license}</td>
                            <td>{prj.state}</td>
                            <td>{prj.dateRequested}</td>
                            <td>{prj.dateApproved}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
 
        );
}
export default AllProjects;