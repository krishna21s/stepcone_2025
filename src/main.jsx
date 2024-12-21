import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from './Components/ScrollToTop.jsx';

import MainPage from './Components/MainPage.jsx';
import EventsPage from './Components/EventsPage.jsx';
import EventDetails from './Components/EventDetails.jsx';
import SignUp from './Components/SignUp.jsx';
import AboutPage from './Components/AboutPage.jsx';
import Registrations from './Components/Registrations.jsx';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import EventRegisterForm from './Components/EventRegisterForm.jsx'
import PaymentInterface from './Components/PaymentInterface.jsx';
import InvalidPage from './Components/InvalidPage.jsx';
import GeneralRegistration from './Components/GeneralRegistration.jsx';
import StepconeAdmin from './Components/StepconeAdmin.jsx';
import Details from './Components/Details.jsx';
import Queries from './Components/Queries.jsx';
const encodePath = (path) => btoa(path); // Encode using Base64
const decodePath = (encodedPath) => atob(encodedPath); // 

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="/">
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`/${encodePath("/stepcone_$_@&***)(714)530$215 && --event")}`} element={<EventsPage />} />
        <Route path={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ &&77886756event-details")}`} element={<EventDetails />} />
        <Route path={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --registrations")}`} element={<Registrations />} />
        <Route path={`/${encodePath("/stepcone_$_**23209@&***(072462)8''8&#%$@^#@#%$^&*^&%^$%#$@#General-Registration")}`} element={<GeneralRegistration />} />
        <Route path={`/${encodePath("/stepcone_$_**23209@&***)(714)530$2-++ && --eventRegsitrationForm")}`} element={<EventRegisterForm />} />
        <Route path={`${encodePath("/stepcone_$_@&&& 530$215 3478rg3 fv348r34 && --signup")}`} element={<SignUp />} />
        <Route path={`${encodePath("/stepcone_$_@&&& 530$215 && --login")}`} element={<Login />} />
        <Route path={`${encodePath("/stepcone_$_@*502&502##$ -++==002) && --profile")}`} element={<Profile />} />
        <Route path={`/${encodePath("/stepcone_$_@*502&502##$ -++==*(&^%$#----developers and team")}`} element={<AboutPage />} />
        <Route path={`/${encodePath("/stepcone_$_@*502378r 34374 #$%3$%245 details")}`} element={<Details />} />
        <Route path="/makepayment" element={<PaymentInterface />} />
        <Route path="/90sc86-2025-adm-g19M98R" element={<StepconeAdmin />} />
        <Route path="/90sc86-2025-adm-g19M98R/queries" element={<Queries />} />
        <Route path='*' element={<InvalidPage />} />
      </Routes>
      <App />
    </BrowserRouter>
  </>
)