import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import UserProfile from './pages/UserProfile';
import IdeaForm from './pages/IdeaForm';
import Home from './pages/Home';
import BusinessPlan from './pages/BusinessPlan';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="submit-idea" element={<IdeaForm />} />
        <Route path="business-plan" element={<BusinessPlan />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
