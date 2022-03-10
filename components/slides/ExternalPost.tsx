import { FC } from "react"

interface ExternalPost {
	title: string
	href: string
	imageSource: string
}

const ExternalPost: FC<ExternalPost> = ({ title, imageSource, href }) => {
	return (
		<a className="group" target="_blank" href={href}>
			<img
				src={imageSource}
				className="shadow w-full h-32 rounded-md object-cover group-hover:opacity-80"
			/>
			<span className="block font-semibold mt-2">{title}</span>
		</a>
	)
}

export default ExternalPost
