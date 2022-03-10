import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { useMemo, useState } from "react"
import styles from "@/styles/slides.module.css"

import type { FC } from "react"

interface SlideBook {
	title: string
	description: string
	source: string
}

const books: SlideBook[] = [
	{
		title: "As seis lições",
		description:
			"Podemos contar nos dedos das mãos os economistas que escreveram de maneira que todos consigam compreender o que estavam querendo dizer. Dentre estes, merece destaque o nome de Ludwig von Mises, o grande defensor das liberdades individuais.",
		source: "https://images-na.ssl-images-amazon.com/images/I/71qj98F1DuL.jpg",
	},
	{
		title: "A mentalidade anticapitalista",
		description:
			"A Mentalidade Anticapitalista é uma influente análise cultural, sociológica e psicológica de Ludwig von Mises acerca da rejeição ao livre mercado por uma parte significativa dos intelectuais. ",
		source: "https://m.media-amazon.com/images/I/41xXpC8dpvL.jpg",
	},
	{
		title: "O contexto histórico da escola austríaca de economia",
		description:
			"O Contexto Histórico da Escola Austríaca de Economia foi último livro publicado por Ludwig von Mises. A obra apresenta de modo didático a importância de Carl Menger, de Eugen von Böhm-Bawerk e de Friedrich von Wieser na formação da Escola Austríaca de Economia, o conflito desta com a Escola Historicista Alemã e o papel dos economistas austríacos no desenvolvimento da Ciência Econômica.",
		source: "https://images-na.ssl-images-amazon.com/images/I/815NRZps6jL.jpg",
	},
]

const Slide: FC = () => {
	const [index, setIndex] = useState(0)
	const maxIndex = books.length

	const bookData = useMemo(() => books[index], [index])
	const backgroundUrl = useMemo(() => `url('${books[index].source}')`, [index])

	function increaseIndex() {
		if (index < maxIndex - 1) setIndex((value) => value + 1)
	}

	return (
		<div className="flex space-x-6">
			<div
				className="border border-neutral-200 flex flex-shrink-0 items-end w-96 h-96 rounded overflow-hidden bg-contain bg-no-repeat bg-center"
				style={{ backgroundImage: backgroundUrl }}
			>
				<button
					className={styles.slideButton}
					onClick={() => setIndex((value) => Math.max(value - 1, 0))}
				>
					<ChevronLeftIcon className="w-5 h-5" />
				</button>
				<button className={styles.slideButton} onClick={increaseIndex}>
					<ChevronRightIcon className="w-5 h-5" />
				</button>
			</div>
			<div>
				<h1 className="text-3xl font-bold mb-2">{bookData.title}</h1>
				<p className="text-lg text-neutral-600">{bookData.description}</p>
			</div>
		</div>
	)
}

export default Slide
