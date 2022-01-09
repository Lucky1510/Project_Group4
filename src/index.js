import React from 'react';
import ReactDOM from 'react-dom';
import './components/style/styles.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserLoginComponent from './components/AuthPages/userLogin';
import AdminLoginComponent from './components/AuthPages/adminLogin';
import AdminSignupComponent from './components/Registration/adminSignup';
import UserSignupComponent from './components/Registration/userSignup';
import Signup from './components/Registration/SignUpIndex'
import SignIn from './components/AuthPages/SignInIndex'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/layout/App';
import GetFlights from './components/layout/GetFlights';
import SearchFlights from './components/layout/SearchFlights';
import AddFlights from './components/layout/AddFlights';
import UpdateFlights from './components/layout/UpdateFlights';
import DeleteFlights from './components/layout/DeleteFlights';
import Accounts from './components/layout/Accounts';
import ClientMain from './components/layout2/App'
import ClientAccounts from './components/layout2/ClientAccounts'
import ClientGetFlights from './components/layout2/ClientGetFlights'
import ClientSearchFlights from './components/layout2/ClientSearchFlights'
import UpdateUser from './components/layout2/UpdateUser'
import DeleteUser from './components/layout2/DeleteUser'
import UpdateAdmin from './components/layout/UpdateAdmin'
import DeleteAdmin from './components/layout/DeleteAdmin'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<App/>}>
          <Route path= "/signin" element= {<SignIn/>}>
            <Route path= "/signin/userLogin" element= {<UserLoginComponent/>}/>
            <Route path= "/signin/adminLogin" element= {<AdminLoginComponent/>}/>
          </Route>
          <Route path= "/signup" element= {<Signup/>}>
            <Route path= "/signup/adminsignup" element= {<AdminSignupComponent/>}/>
            <Route path= "/signup/usersignup" element= {<UserSignupComponent/>}/>
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path= "/home" element={<Main/>}>
          <Route path= "/home/getAllFlights" element= {<GetFlights/>}/>
          <Route path= "/home/searchByLocation" element= {<SearchFlights/>}/>
          <Route path= "/home/addFlights" element= {<AddFlights/>}/>
          <Route path= "/home/updateFlights" element= {<UpdateFlights/>}/>
          <Route path= "/home/deleteFlights" element= {<DeleteFlights/>}/>
          <Route path= "/home/account" element= {<Accounts/>}>
          <Route path= "/home/account/updateAdmin" element= {<UpdateAdmin/>}/>
          <Route path= "/home/account/deleteAdmin" element= {<DeleteAdmin/>}/>
            </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path= "/clienthome" element={<ClientMain/>}>
          <Route path= "/clienthome/clientGetAllFlights" element= {<ClientGetFlights/>}/>
          <Route path= "/clienthome/clientSearchByLocation" element= {<ClientSearchFlights/>}/>
          <Route path= "/clienthome/clientAccount" element= {<ClientAccounts/>}>
          <Route path= "/clienthome/clientAccount/updateUser" element= {<UpdateUser/>}/>
          <Route path= "/clienthome/clientAccount/deleteUser" element= {<DeleteUser/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

