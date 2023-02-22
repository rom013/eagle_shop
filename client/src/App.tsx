import { useEffect } from "react";

import RoutesPages from "./routes"

export default function App() {
	useEffect(()=>{
		const favicon:any = document.getElementById("favicon")
		window.addEventListener("blur", ()=>{
			favicon.setAttribute("href", "../src/image/logo_simple_light.svg")
		})
		window.addEventListener("focus", ()=>{
			favicon.setAttribute("href", "../src/image/logo_simple_color.svg")
		})
	},[])

	return <RoutesPages/>
}
