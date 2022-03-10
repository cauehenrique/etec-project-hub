import ExternalPost from "@/components/slides/ExternalPost"
import Navigation from "@/components/slides/Navigation"
import Slide from "@/components/slides/Slide"

import type { NextPage } from "next"

const Slides: NextPage = () => {
	return (
		<div>
			<Navigation />
			<div className="mx-auto max-w-4xl p-6">
				<Slide />
				<div className="grid grid-cols-3 mt-8 gap-4">
					<ExternalPost
						title="O que é a Escola Austríaca de pensamento econômico?"
						href="https://andrebona.com.br/o-que-e-a-escola-austriaca-de-pensamento-economico/"
						imageSource="https://cdn.mises.org.br/images/articles_thumbs/35.png"
					/>
					<ExternalPost
						title="As mulheres e as minorias: como a ideologia suprimiu a realidade"
						href="https://mises.org.br/article/2937/a-revolucao-industrial-as-mulheres-e-as-minorias-como-a-ideologia-suprimiu-a-realidade"
						imageSource="https://cdn.mises.org.br/images/articles_thumbs/2937.png"
					/>
					<ExternalPost
						title="Impostos, moralidade e ética"
						href="https://mises.org.br/article/926/impostos-moralidade-e-etica"
						imageSource="https://cdn.mises.org.br/images/articles_thumbs/926.png"
					/>
				</div>
			</div>
		</div>
	)
}

export default Slides
