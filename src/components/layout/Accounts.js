import React, {Component} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import '../style/styles.css'

class Accounts extends Component {

    render() {

        return (<div>
             <center><div style= {{width: '350px'}}>
            <ul className="header" style={{backgroundColor: 'rgb(0, 139, 254)',
                borderRadius: '4px'}}>
                <li><NavLink to= "/home/account/updateAdmin">Update Account</NavLink></li>
                <li><NavLink to= "/home/account/deleteAdmin">Delete Account</NavLink></li>
            </ul>
            </div></center>
            <div>
                <Outlet/>
            </div>
        </div>)
    }
}

export default Accounts;