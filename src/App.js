import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Donate from './Components/Donor/Donate';
import DonorDashboard from "./Components/Donor/Dashboard";
import AdminDashboard from "./Components/Admin/Dashboard";
import Register from './Components/Register';
import RequestMedicine from './Components/Needy Person/RequestMedicine';
import DonorProfile from './Components/Donor/Profile';
import AllDonors from './Components/Admin/AllDonors';
import AdminProfile from './Components/Admin/Profile';
import EditDonor from './Components/Admin/EditDonor';
import Edit from './Components/Admin/Edit';

const App=()=> {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/donate" component={Donate}></Route>
          <Route path="/donor-dashboard" component={DonorDashboard}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/request-form" component={RequestMedicine}></Route>
          <Route path="/donor-profile" component={DonorProfile}></Route>
          <Route path="/admin-dashboard" component={AdminDashboard}></Route>
          <Route path="/donors" component={AllDonors}></Route>
          <Route path="/admin-profile" component={AdminProfile}></Route>
          <Route path="/edit-donor" component={EditDonor}></Route>
          <Route path="/edit" component={Edit}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
