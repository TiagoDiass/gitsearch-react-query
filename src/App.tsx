import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
	return (
		<div className="min-h-screen bg-slate-100 pt-7 px-4">
			<div className="max-w-screen-md mx-auto">
				<Header />
				<SearchBar />
				<Profile />
			</div>
		</div>
	);
}

export default App;
