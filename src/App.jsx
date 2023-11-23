import './App.css'
import { ContentWrapper } from './components/ContentWrapper'
import {Sidebar} from './components/Sidebar'

function App() {

	return (
		<div id="wrapper">
			<Sidebar/>
			<ContentWrapper/>
		</div>
	)
}

export default App
