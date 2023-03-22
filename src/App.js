import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./pages/MainPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Router>
            <Routes>
              <Route exact element={<MainPage />} path="/" />
            </Routes>
          </Router>
          <Footer />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
