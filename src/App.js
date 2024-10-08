import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/User_Login'
import Register from './pages/User_Register'
import BuildingOwner from './pages/BuildingOwner'
import ManageListings from './pages/ManageListings'
import ManageEnquiries from './pages/ManageEnquiries'
import Listings from './pages/Listings'
import Enquiry from './pages/Enquiry'
import ResidentCommunication from './pages/ResidentCommunication'
import ResidentFeedback from './pages/ResidentFeedback'
import PropertyFee from './pages/Propertyfee'
import MaintenanceRepair from './pages/MaintenanceRepair'
import BuildingManager from './pages/BuildingManager'
import ParkingManagement from './pages/ParkingManagement';
import RenovationManagement from './pages/RenovationManagement';
import PropertyRegister from './pages/Property_Register';
import PropertyLogin from './pages/Property_Login';
import PaymentMethods from './pages/PaymentMethods';
import PaymentHistory from './pages/PaymentHistory';
import MaintenanceRequest from './pages/MaintenanceRequest';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { PaymentProvider } from './context/PaymentContext';
import { MaintenanceProvider } from './context/MaintenanceContext';


function App() {
  return (
    <div className="App">
      <Router>
        <MaintenanceProvider>
          <PaymentProvider>
            <NavBar />
            <main>
              <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/register" Component={Register}></Route>
            <Route path="/PropertyLogin" Component={PropertyLogin}></Route>
            <Route path="/PropertyRegister" Component={PropertyRegister}></Route>
            <Route path="/BuldingManager" Component={BuildingManager}></Route>
            <Route path="/building-owner" Component={BuildingOwner}></Route>
            <Route path="/manage-listings" Component={ManageListings}></Route>
            <Route path="/manage-enquiries" Component={ManageEnquiries}></Route>
            <Route path="/listings" Component={Listings}></Route>
            <Route path="/enquiry" Component={Enquiry}></Route>

            <Route path="/communication" element={<ResidentCommunication />} />
            <Route path="/feedback" element={<ResidentFeedback />} />
            
//            ----------------- Junhao Kong ----------------------
            <Route path="/propertyfee" element={<PropertyFee />} />
            <Route path="/MaintenanceRepair" element={<MaintenanceRepair />} />
            <Route path="/MaintenanceRequest" element={<MaintenanceRequest />} />
            <Route path="/paymentmethods" element={<PaymentMethods />} />
            <Route path="/paymenthistory" element={<PaymentHistory />} />
 //          ------------------ Junhao Kong ---------------------
            
            <Route path="/Parking" element={<ParkingManagement />} />
            <Route path="/Renovation" element={<RenovationManagement />} />
            
            </Routes>
            </main>
            <Footer />
          </PaymentProvider>
        </MaintenanceProvider>
      </Router>
    </div>
  );
}

export default App;
