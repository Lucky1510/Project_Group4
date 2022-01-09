import React, {Component} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import '../style/styles.css'

class SignIn extends Component {

    render() {

        return (<div>
             <center><div style= {{width: '300px'}}>
            <ul className="header" style={{backgroundColor: 'rgb(0, 139, 254)',
                borderRadius: '4px'}}>
                <li><NavLink to= "/signin/adminLogin">Admin SignIn</NavLink></li>
                <li><NavLink to= "/signin/userLogin">User SignIn</NavLink></li>
            </ul>
            </div></center>
            <div>
                <Outlet/>
            </div>
        </div>)
    }
}

export default SignIn;