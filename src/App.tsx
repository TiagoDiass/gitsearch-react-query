import { Header } from './components/Header';
import { Search } from './components/Search';

function App() {
	return (
		<div className="min-h-screen bg-slate-100 pt-7 px-4">
			<div className="max-w-screen-md mx-auto">
				<Header />
				<Search />
			</div>
		</div>
	);
}

export default App;
