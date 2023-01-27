import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Loader from "./components/ui/Loader";
import Inevntory from "./pages/Inevntory";

const Home = React.lazy(() => import("./pages/Home"));
const Auth = React.lazy(() => import("./components/auth/Auth"));

const App = () => {
  const isAuthenticate = useSelector((state) => state.auth.authenticate);
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        {!isAuthenticate && (
          <Route path="/" element={<Navigate to="/auth" />} />
        )}
        {isAuthenticate && <Route path="/" element={<Navigate to="/home" />} />}

        {!isAuthenticate && <Route path="/auth" element={<Auth />} />}
        {isAuthenticate && <Route path="/home" element={<Home />} />}
        {isAuthenticate && <Route path="/products" element={<Inevntory />} />}
        <Route />
      </Routes>
    </Suspense>
  );
};

export default App;
