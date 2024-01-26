export function SearchBar() {
	return (
		<form className="bg-slate-50 rounded-md shadow-md p-4 mt-16 flex gap-4">
			<input
				className="p-2 border-b border-b-slate-200 border-dotted text-slate-800 bg-transparent w-full outline-none focus:border-slate-400"
				placeholder="Type in a Github username"
			/>

			<button
				type="submit"
				className="bg-green-600 hover:bg-green-700 rounded-md text-white py-2 px-4 outline-green-900 transition-all"
			>
				Search
			</button>
		</form>
	);
}
