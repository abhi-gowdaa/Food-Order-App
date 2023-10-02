import React ,{Fragment,useState} from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import meals from '../../assets/meals.jpg'
import Cart from "../Cart/Cart";

const Header=(props)=>{
const [isClicked,setClick]=useState(false)

    const btnClick=()=>{
        setClick(true)
     
    }
    // props.onClick(isClicked)

 return(
<Fragment>
{!isClicked?'':<Cart/>}
<header className={classes['header']} >
        <h2 >ReactMeals</h2>
        <HeaderCartButton className={classes.buttons} />
        <button onClick={btnClick} > hi</button>
       
    </header>

<img src={meals} alt="meals" className={classes['main-image']}></img>


</Fragment>
    );
}

export default Header;