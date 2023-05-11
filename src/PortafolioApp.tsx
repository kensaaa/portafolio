import { RouterMain, RoutesPath } from "kensaaa-components"
import { paths } from "./paths"

const PortafolioApp = () => {
	return (
		<RouterMain paths={paths}>
			<RoutesPath />
		</RouterMain>
	)
}

export {PortafolioApp}

