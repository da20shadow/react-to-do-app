import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import Logout from "./Logout";
import NotFound from "./NotFound";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path={'/home'} element={< Home />} />
            <Route path={'/login'} element={< Login />} />
            <Route path={'/register'} element={< Register />} />
            <Route path={'/account'} element={< Account />} />
            <Route path={'/logout'} element={< Logout />} />
            <Route path={'*'} element={< NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
