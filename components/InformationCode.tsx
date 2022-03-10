import type { FC } from "react"

const InformationCode: FC = () => (
	<code className="bg-dracula-black text-dracula-white p-3 rounded-md block my-4">
		<span className="text-dracula-pink font-semibold">const</span>&nbsp;
		<span>name = </span>
		<span className="text-dracula-yellow">"CAUÊ HENRIQUE SOUSA FERRARETO"</span>
		<span>;</span>
		<br />
		<span className="text-dracula-pink font-semibold">const</span>&nbsp;
		<span>rm = </span>
		<span className="text-dracula-yellow">"21487"</span>
		<span>;</span>
	</code>
)

export default InformationCode
