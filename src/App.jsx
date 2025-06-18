// App.jsx
import { Outlet } from "react-router-dom";
import Footer from "./HeaderXFooter/Footer";
import Header from "./HeaderXFooter/Header";
import PostStore from "./Store/PostStore";

const App = () => {
  return (
    <PostStore>
      <div className="main-layout-wrapper"> {/* This is the new wrapper */}
        <Header />
        {/* This div will hold your main content and footer */}
        <div className="content-area">
          <Outlet /> {/* Renders your main page content */}
          <Footer /> {/* Your footer component */}
        </div>
      </div>
    </PostStore>
  );
};

export default App;