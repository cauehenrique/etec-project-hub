import Navigation from "@/components/slides/Navigation"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid"

import type { NextPage } from "next"

const Slides: NextPage = () => {
	return (
		<div>
			<Navigation />
			<div className="mx-auto max-w-4xl p-4">
				<div className="bg-red-500 flex justify-between h-96 rounded-md">
					<button>
						<ChevronLeftIcon className="w-5 h-5" />
					</button>
					<button>
						<ChevronRightIcon className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Slides
