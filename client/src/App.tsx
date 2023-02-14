import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
	
	const favicon:any = document.getElementById("favicon")
	window.addEventListener("blur", ()=>{
		favicon.setAttribute("href", "../src/image/logo_simple_light.svg")
	})
	window.addEventListener("focus", ()=>{
		favicon.setAttribute("href", "../src/image/logo_simple_color.svg")
	})

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/login" element={<Login/>}/>
			</Routes>
		</BrowserRouter>
	)
}
