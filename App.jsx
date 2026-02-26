
import { useState } from "react";
import "./assets/style.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";


function App(){
  const [activePage,setActivePage]=useState("home");

  const changPage =(el,page)=>{
       el.preventDefault();
      setActivePage(page)
  }

  return (
    <>
       <div className="container">
       <ul className="header_menu">
          <li><a href="" onClick={(el)=>changPage(el,"home")   }>Home</a></li>
          <li><a href="" onClick={(el)=>changPage(el,"products") }>Products</a></li>
          <li><a href=""  onClick={(el)=>changPage(el,"about")  }>About</a></li>
          <li><a href=""  onClick={(el)=>changPage(el,"contact")  }>Contact</a></li>
        </ul>
      
       </div>
      
      {activePage==="home" && (<Home />)}
      {activePage==="products" && (<Products onChangePage={changPage}/>)}
      {activePage==="about" && (<About onChangePage={changPage}/>)}
      {activePage==="contact" && (<Contact onChangePage={changPage}/>)}
        
    </>
  ) 
}

export default App;