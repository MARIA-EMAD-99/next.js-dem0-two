import Link from 'next/link';
import React from 'react';
import {useSession} from 'next-auth/react'
const Header = () => {

const {data:session} = useSession()
if(session)return (
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/home">Home</Link>
        </li>
       
     
          <li>
          <Link className="nav-link" href="/blog">blog</Link>
          </li>

          <li>
          <Link className="nav-link" href="/about"> about </Link>
          </li>

          {/* <li>
          <Link className="nav-link" href="/users">users</Link>
          </li>

          <li>
          <Link className="nav-link" href="/news"> news</Link>
          </li> */}

          <li>
          <Link className="nav-link" href="/dashboard"> dashboard</Link>
          </li>


          <li>
           <Link className="nav-link" href="/api/auth/signout">signout</Link>
           </li>
     
     

       
       
        
      </ul>
    
    </div>

  </div>
</nav>

    );
    else{
      return (
        <nav className="navbar navbar-expand-lg bg-light">
   <div className="container-fluid">
     <a className="navbar-brand" href="#">Navbar</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link className="nav-link active" aria-current="page" href="/home">Home</Link>
         </li>
        
      
           <li>
           <Link className="nav-link" href="/blog">blog</Link>
           </li>

           <li>
           <Link className="nav-link" href="/api/auth/signin">signin</Link>
           </li>
 

      
      
 
        
        
         
       </ul>
     
     </div>
 
   </div>
 </nav>
 
     )
    }
}
 

 
export default Header ;