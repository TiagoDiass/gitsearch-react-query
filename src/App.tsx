import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
	return (
		<div className="min-h-screen bg-slate-100 pt-7">
			<div className="max-w-screen-md mx-auto">
				<Header />
				<SearchBar />
			</div>
		</div>
	);
}

export default App;
