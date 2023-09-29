import React ,{Fragment} from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import meals from '../../assets/meals.jpg'

const Header=()=>{


 return(
<Fragment>
<header className={classes['header']} >
        <h2 >ReactMeals</h2>
        <HeaderCartButton className={classes.buttons}/>
    </header>

<img src={meals} alt="meals" className={classes['main-image']}></img>


</Fragment>
    );
}

export default Header;