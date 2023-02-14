import Header from "../components/Header";
import CarouselSlider from "../components/CarouselSlider";

export default function App() {

	
    return (
		<>
			<Header/>

			<section className="w-full bg-forspoken h-[37.5rem] bg-no-repeat bg-cover px-20 flex items-center">
				<article className="w-80 text-white">
					<img src="title_forspoken.png" alt="ads"/>
					<div className="flex flex-col gap-6 mt-4 mb-20">
						<strong>Encontre a sua luta!</strong>
						<p>
							Frey precisa usar habilidades mágicas recém-descobertas para explorar e enfrentar criaturas monstruosas em busca de um caminho de volta para casa.
						</p>
					</div>
					<strong>A partir de R$ 349,90</strong>
				</article>
			</section>

			<main
				className="max-w-5xl mx-auto bg-[#18181b] py-9 px-12 my-9 text-white flex flex-col gap-10"
			>
				<section className="flex flex-col gap-8">
					<CarouselSlider title={"Mais vendidos"}/>
				</section>
				<section className="flex flex-col gap-8">
					<CarouselSlider title={"Mais populares"}/>
				</section>
			</main>
		</>
	);
}