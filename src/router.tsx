import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import EditProfile from "./components/edit-profil/editProfil";
function MainRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRouter;
