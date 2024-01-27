import { Repository } from '../types/Repository';

type RepositoriesProps = {
	repositories: Repository[];
};

export function Repositories({ repositories }: RepositoriesProps) {
	return (
		<div className="flex flex-col h-full bg-slate-50 rounded-md shadow-md w-2/5 p-3">
			<h3 className="text-lg font-semibold text-slate-600">
				Random repositories
			</h3>

			<ul className="flex flex-col h-full justify-between gap-2 mt-2">
				{repositories.map((repo) => (
					<li
						key={repo.id}
						className="h-32 border border-slate-300 bg-slate-100 cursor-pointer py-2 px-4 rounded-sm hover:bg-slate-200 transition-all"
					>
						<a href={repo.url} target="_blank" rel="noreferrer">
							<h4 className="text-slate-800 text-sm font-medium mb-1">
								{repo.name}
							</h4>

							<p className="text-sm font-light">
								{repo.description.slice(0, 120).concat('...')}
							</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
