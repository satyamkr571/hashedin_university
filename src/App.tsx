import React from "react";
import style from "./App.module.scss";
import Navbar from "./ui/Navbar";
import PageHeader from "./ui/PageHeader";
import { useLocation } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import AllCoursePage from "./pages/AllCoursePage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import Modal from "./ui/Modal";
import CoursesDetailsPage from "./pages/CourseDetailsPage";
import { useSelector } from "react-redux";

interface RootState {
  modalReducer: {
    isModalOpen: boolean;
    type: string;
    message: string;
  };
}

function App() {
  const loaction = useLocation();
  const pageTitle =
    loaction.pathname === "/profile"
      ? "My Profile"
      : loaction.pathname === "/cart"
      ? "Shopping Cart"
      : "Discover Latest Course on React";

  const modalData = useSelector((state: RootState) => state.modalReducer);
  return (
    <div className={style.app}>
      <Navbar />
      <PageHeader pageTitle={pageTitle} />
      {modalData.isModalOpen ? (
        <Modal className="" type={modalData.type} message={modalData.message} />
      ) : null}
      <Routes>
        <Route path="/courses" element={<AllCoursePage />}></Route>
        <Route path="/mywishlist" element={<WishListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/coursedetails" element={<CoursesDetailsPage />} />
        <Route
          path="/hashedin_university/"
          element={<Navigate to="/courses" />}></Route>
        <Route
          path="/hashedin_university/"
          element={<Navigate to="/courses" />}></Route>
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                minHeight: "80vh",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1>Page Not Found</h1>
            </div>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
