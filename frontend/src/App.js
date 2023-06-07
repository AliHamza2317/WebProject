
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/TourManagement/Home'
import Signup from './components/Signup';
import AddTour from './components/TourManagement/Addtour';
import ViewTour from './components/TourManagement/ViewTour';
import UpdateTour from './components/TourManagement/UpdateTour';
import DeleteTourForm from './components/TourManagement/DeleteTour';
import AddBooking from './components/Bookings/booking';
import ViewBooking from './components/Bookings/Viewbookings';
import CancelBooking from './components/Bookings/CancelBooking';
import Checkout from './components/Payment/Checkout';
import StripeContainer from './components/Payment/StripeContainer';
function App() {
  return (
  <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}  />
          <Route path="/signup" element={<Signup/>}  />
          <Route path="/customer" element={<Signup/>}  />
          <Route path="/homepage" element={<Home/>}  />
          <Route path="/addtour" element={<AddTour/>}  />
          <Route path="/viewtour" element={<ViewTour/>}  />
          <Route path="/updatetour" element={<UpdateTour/>}  />
          <Route path="/deletetour" element={<DeleteTourForm/>}  />
          <Route path="/booking/:id" element={<AddBooking/>}  />
          <Route path="/viewbookings" element={<ViewBooking/>}  />
          <Route path="/bookings" element={<CancelBooking/>}  />
          <Route path='/checkout/:bookingId' element={<StripeContainer/>} />
        </Routes>
      </BrowserRouter>


      </div>

  </>
  );
}

export default App;
