import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../Pages/Feed";
import Explore from "../Pages/Explore";
import Portfolio from "../Pages/Portfolio";
import Settings from "../Pages/Settings";
import Profile from "../Pages/Profile";
import Layout from "../Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
