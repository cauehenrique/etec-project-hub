import Navigation from "@/components/slides/Navigation"
import Slide from "@/components/slides/Slide"

import type { NextPage } from "next"

const Slides: NextPage = () => {
	return (
		<div>
			<Navigation />
			<div className="mx-auto max-w-4xl p-6 flex">
				<Slide />
			</div>
		</div>
	)
}

export default Slides
