import './App.css';
import React,{useEffect,useState} from "react";
import Header from "./Header";
// import Contact from "./list";
import Add from "./Add";
import Api from "../api/contacts";

function App() {
  const retriveContact = async() => {
    const response = await Api.get("/contact");
    return response.data;
  }

  const [Contact,setContact] = useState([]);
  useEffect(() => {
    const getallContacts = async () => {
      const allContacts = await retriveContact();
      if(allContacts)
      {
        setContact(allContacts);
        console.log(Contact);
      }
    };
    getallContacts();
  },[]);

  return (
    
    <div className="App">
      {/* <Header/>
      <Add/>
      <Contact/> */}
    </div>
  );
}

export default App;