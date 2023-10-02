import Header from "./components/Layout/Header"; 
import Meals from "./components/Meals/Meals";

function App() {

  const btnClick=()=>{
      
  }
  return (
    
    <div>
      <Header onClick={btnClick}/>
      <Meals/>
     
    </div>
  );
}

export default App;
