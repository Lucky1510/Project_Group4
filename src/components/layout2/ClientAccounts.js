import React, {Component} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import '../style/styles.css'

class ClientAccounts extends Component {

    render() {

        return (<div>
             <center><div style= {{width: '400px'}}>
            <ul className="header" style={{backgroundColor: 'rgb(0, 139, 254)',
                borderRadius: '4px'}}>
                <li><NavLink to= "/clienthome/clientAccount/updateUser">Update Account</NavLink></li>
                <li><NavLink to= "/clienthome/clientAccount/deleteUser">Delete Account</NavLink></li>
            </ul>
            </div></center>
            <div>
                <Outlet/>
            </div>
        </div>)
    }
}

export default ClientAccounts;