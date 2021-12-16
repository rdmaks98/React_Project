import "./css/index.css"
//  start project1
import Project1 from "./project1_webtemplate/"
//  end project1

// start project2 
import Project2 from "./project2_crudapp/";
// end project2 

// start project3
import Project3 from "./project3_birthdaycounte";
// end project3

// start project4
import Project4 from "./project4_apiconcept";
// end project4
import Project5_template from "./project5_template";

function App() {
  return (
    <>
      {/* <Project1/> */}
      {/* <Project2 /> */}
      {/* <Project3/> */}
      {/* <Project4/> */}
      <Project5_template/>
    </>
  );
}

export default App;
