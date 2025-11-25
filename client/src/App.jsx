import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AuthPage from './components/AuthForm'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import PendingUsers from './pages/PendingUsers'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/pending-users' element={<PendingUsers />} />
      </Routes>
    </Router>
  )
}

export default App
