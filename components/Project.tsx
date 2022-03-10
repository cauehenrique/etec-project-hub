import Link from "next/link"

import type { Project } from "../types"
import type { FC } from "react"

const ProjectLink: FC<Project> = ({ to, src, title, subject }) => (
	<Link href={to}>
		<a className="group">
			<img
				className="group-hover:opacity-80 w-full h-32 rounded-md object-cover"
				src={src}
				alt={title}
			/>
			<div className="mt-2">
				<span className="font-semibold text-lg block">{title}</span>
				<span className="text-neutral-500">{subject}</span>
			</div>
		</a>
	</Link>
)

export default ProjectLink
