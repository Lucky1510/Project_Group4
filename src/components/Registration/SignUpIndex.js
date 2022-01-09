import React, {Component} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import '../style/styles.css'

class Signup extends Component {

    render() {

        return (<div>
            <center><div style= {{width: '300px'}}>
            <ul className="header" style={{backgroundColor: 'rgb(0, 139, 254)'}}>
                <li><NavLink to= "/signup/adminsignup">Admin Signup</NavLink></li>
                <li><NavLink to= "/signup/usersignup">User Signup</NavLink></li>
            </ul>
            </div></center>
            <div>
                <Outlet/>
            </div>
        </div>)
    }
}

export default Signup;