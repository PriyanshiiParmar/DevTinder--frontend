import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Connections from "./components/Connections"
import Requests from './components/Requests'
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPage from './components/RefundPage';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path='/' element = {<Feed/>}/>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests/>} />
            <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="terms-and-conditions" element={<TermsAndConditions/>}/>
            <Route path="refund-policy" element={<RefundPage/>}/>
            <Route path="contact-us" element={<ContactUs/>}/>
            <Route path="about-us" element={<AboutUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
