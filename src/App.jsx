import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import News from "./components/news/news";
import Gallery from "./components/gallery/gallery";
import Bio from "./components/Bio/Bio";
import Store from "./components/store/store";
import ProductDetails from "./components/gallery/productDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Missing from "./components/Missing/Missing";

import "./index.css";

const ROLES = {
  User: 2001,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* protected routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/store" element={<Store />} />
        <Route path="/gallery/:title" element={<ProductDetails />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;