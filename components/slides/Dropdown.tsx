import { ChevronDownIcon } from "@heroicons/react/solid"
import { useState } from "react"
import type { FC } from "react"

interface Dropdown {
	title: string
}

const Dropdown: FC<Dropdown> = ({ title, children }) => {
	const [visible, setVisible] = useState(false)

	return (
		<div className="relative">
			<button
				className="flex items-center space-x-1"
				onClick={() => setVisible((value) => !value)}
			>
				<span>{title}</span>
				<ChevronDownIcon
					className={`w-5 h-5 transition-transform ${
						visible ? "rotate-180" : "rotate-0"
					}`}
				/>
			</button>
			{visible && (
				<div className="w-max absolute top-8 bg-white text-black py-3 rounded shadow-md">
					{children}
				</div>
			)}
		</div>
	)
}

export default Dropdown
