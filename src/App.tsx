import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/AboutUs"
import Projects from "./pages/Projects";
import Events from "./pages/Events"
import Games from "./pages/Games";
import Sport from "./pages/Sport";
import Science from "./pages/Science";

const App: React.FC = () => {
	return (
		<Router>
			<div className="bg-gradient-custom min-h-screen px-10 py-10">
				<Navbar />
				<div className="mx-auto px-4 py-8">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/events" element={<Events />} />
						<Route path="/games" element={<Games />} />
						<Route path="/sports" element={<Sport />} />
						<Route path="/science" element={<Science />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
