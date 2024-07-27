import React from 'react'
import { useEffect,useState } from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const Protected = () => {
 const authToken=localStorage.getItem("token");
 return authToken?<Outlet/>:<Navigate to="/"/>;
}

export default Protected