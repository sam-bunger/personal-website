import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";
import VxnProducts from "./pages/VxnProducts";
import "./styles/styles.scss";

// Define page order
const pageOrder: { [key: string]: number } = {
  "/": 0,
  "/projects": 1,
  "/work-experience": 2,
  "/vxn-products": 3,
};

let prevPath = "/";
let currentDirection = "forward";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  // Calculate direction before render
  const prevIndex = pageOrder[prevPath] ?? 0;
  const currentIndex = pageOrder[location.pathname] ?? 0;

  if (currentIndex > prevIndex) {
    currentDirection = "forward";
  } else if (currentIndex < prevIndex) {
    currentDirection = "backward";
  }

  prevPath = location.pathname;

  return (
    <TransitionGroup
      component={null}
      childFactory={(child) =>
        React.cloneElement(child, {
          classNames: `page-${currentDirection}`,
        })
      }
    >
      <CSSTransition
        key={location.pathname}
        classNames={`page-${currentDirection}`}
        timeout={400}
      >
        <div className="page-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/vxn-products" element={<VxnProducts />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
