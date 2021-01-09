import React from 'react'
import { CenterData } from '../Data/CenterData'
import {
    Link
} from "react-router-dom";

function ManageCenters() {
    return (
        <>
          <h1>Display Centers</h1>
          <Link to="/new-center">New Center</Link>
          <table>
              {CenterData.map(center=>{
                  return <tr key={center.id}>
                       <td>{center.name}</td>
                       <td>{center.address}</td>
                       <td>{center.email_id}</td> 
                       <td>{center.phone}</td>
                       <td>{center.description}</td>
                       </tr>
              })}
              </table>  
        </>
    )
}

export default ManageCenters
