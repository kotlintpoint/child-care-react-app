import React from 'react';
import { 
    BrowserRouter as Route,
    Link,
    Switch,
    Router
} from "react-router-dom";
import { SidebarData } from '../Data/SidebarData';



function Sidebar() {



  return (

<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">DEEP ADMIN</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">DEEP PATEL</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {
          SidebarData.map((linkItem, index) => (
        <li className="nav-item menu-open">
          <Link to={linkItem.to} className="nav-link active">
            <i className="nav-icon fas fa-th"/>
             {linkItem.text}            
          </Link>
          </li>
          ))
          }  
       </ul>
        </nav>
       </div>
    </aside>

    

    

    // {/* Sidebar Menu */}
    // <nav className="mt-2">
    //   <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    //     {
    //       SidebarData.map((linkItem, index)=> (
    //         <li className="nav-item">
    //           <Link to={linkItem.to} className="nav-link">
    //             <i className="nav-icon fas fa-th" />
    //               {linkItem.text}
    //           </Link>
    //         </li>
    //       ))
    //     }  


        /* <li className="nav-item">
          <Link to="/manage-centers" className="nav-link">
            <i className="nav-icon fas fa-th" />
            Manage Centers
          </Link>
         </li>
       
        <li className="nav-item">
          <Link to="/manage-parents" className="nav-link">
            <i className="nav-icon fas fa-th" />
              Manage Parents
          </Link>
//         </li> */
//       </ul>
//     </nav>
//     {/* /.sidebar-menu */}
//   </div>
//   {/* /.sidebar */}
// </aside>

    )
}

export default Sidebar
 
    
       


