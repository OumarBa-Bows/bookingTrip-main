import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "@/routes/privateRoutes";
import AddTrip from "./trip/addTrip";
import AddPassanger from "./travelers/addPassanger";

// Lazy-loaded Views
const Home = lazy(() => import("@/views/home"));
const Bookings = lazy(() => import("@/views/bookings"));
const Trip = lazy(() => import("@/views/trip"));
const Employee = lazy(() => import("@/views/employee"));
const Customers = lazy(() => import("@/views/customers"));
const Drivers = lazy(() => import("@/views/drivers"));
const Cars = lazy(() => import("@/views/cars"));
const Setting = lazy(() => import("@/views/settings"));
const Passenger = lazy(() => import("@/views/travelers"));
const Luggage = lazy(() => import("@/views/luggages"));

const AppViews: React.FC = () => {
  return (
    <Suspense fallback={<div className="spinner">Loading...</div>}>
      <Routes>
        {/* <Route element={<PrivateRoute isAuthenticated={} />}> */}
        <Route path="/" element={<Navigate to="app/home" replace={true} />} />
        <Route path="home" element={<Home />} />
        <Route path="trip" element={<Trip />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="employee" element={<Employee />} />
        <Route path="customers" element={<Customers />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="vehicles" element={<Cars />} />
        <Route path="settings" element={<Setting />} />
        <Route path="trip/addTrip" element={<AddTrip />} />
        <Route path="travelers" element={<Passenger />} />
        <Route path="addPassenger" element={<AddPassanger />} />
        <Route path="luggage" element={<Luggage />} />
        {/* </Route> */}

        {/* 404 Redirect */}
      </Routes>
    </Suspense>
  );
};

export default AppViews;
