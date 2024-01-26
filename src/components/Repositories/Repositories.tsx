const repos = [
	{
		id: 1,
		name: 'app-orcamento-pessoal',
		url: 'https://github.com/TiagoDiass/app-orcamento-pessoal',
		description:
			'💸 Uma pequena aplicação web para poder registrar, consultar e excluir despesas, feita com o objetivo de praticar Javascript',
		language: 'JavaScript',
	},
	{
		id: 2,
		name: 'book-finder',
		url: 'https://github.com/TiagoDiass/book-finder',
		description:
			'📚 A Web Application built with ReactJS where users can search for books and maybe buy some of them using the Google Books API',
	},
	{
		id: 3,
		name: 'book-finder',
		url: 'https://github.com/TiagoDiass/book-finder',
		description:
			'📚 A Web Application built with ReactJS where users can search for books and maybe buy some of them using the Google Books API',
	},
];

export function Repositories() {
	return (
		<div className="flex flex-col h-full">
			<h3 className="text-lg font-semibold text-slate-600">
				Random repositories
			</h3>

			<ul className="flex flex-col h-full justify-between gap-2 mt-2">
				{repos.map((repo) => (
					<li
						key={repo.id}
						className="h-32 border border-slate-300 bg-slate-100 py-2 px-4 rounded-sm"
					>
						<a href={repo.url} target="_blank" rel="noreferrer">
							<h4 className="text-slate-800 text-sm font-medium hover:underline mb-1">
								{repo.name}
							</h4>

							<p className="text-sm font-light">{repo.description}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
