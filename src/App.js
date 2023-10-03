import Header from "./components/Layout/Header"; 
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {

  const btnClick=()=>{
      
  }
  return (
    
    <div>
      <Cart/>
      <Header onClick={btnClick}/>
      <Meals/>
     
    </div>
  );
}

export default App;
