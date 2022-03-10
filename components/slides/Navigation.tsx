import Link from "next/link"
import Dropdown from "@/components/slides/Dropdown"
import { BookOpenIcon } from "@heroicons/react/solid"

import styles from "@/styles/slides.module.css"

const Navigation = () => (
	<nav className={styles.navbarBackground}>
		<Link href="slides">
			<a className={styles.logo}>
				<BookOpenIcon className="w-5 h-5" />
				<span className="text-lg">Livre-to</span>
			</a>
		</Link>
		<div className="w-0.5 h-6 bg-neutral-600" />
		<Dropdown title="Treinamentos">
			<Link href="slides/primeiro-livro">
				<a className={styles.dropdownAnchor} href="#">
					Como escrever seu primeiro livro
				</a>
			</Link>
		</Dropdown>
		<a href="#">Contato</a>
	</nav>
)

export default Navigation
