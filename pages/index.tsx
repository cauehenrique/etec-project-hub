import InformationCode from "@/components/InformationCode"
import ProjectLink from "@/components/Project"

import type { NextPage } from "next"
import type { Project } from "../types"

const projects: Project[] = [
	{
		title: "Slides e Accordion",
		subject: new Date().toLocaleDateString("pt-BR"),
		src: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg",
		to: "slides",
	},
]

const Home: NextPage = () => {
	return (
		<div className="p-6 max-w-5xl mx-auto">
			<h1 className="font-bold text-2xl">Lista de Projetos</h1>
			<h2 className="text-neutral-500">
				Clique em um item para navegar até o resultado.
			</h2>
			<InformationCode />
			<div className="w-full h-0.5 bg-neutral-100 my-4" />
			<div className="grid grid-cols-3 gap-4">
				{projects.map((item) => (
					<ProjectLink {...item} />
				))}
			</div>
		</div>
	)
}

export default Home
