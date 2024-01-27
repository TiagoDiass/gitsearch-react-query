import { Repository } from '../types/Repository';
import { User } from '../types/User';
import { Profile } from './Profile';
import { Repositories } from './Repositories';

type SearchResultProps = {
	user: User;
	repositories: Repository[];
};

export function SearchResult({ user, repositories }: SearchResultProps) {
	return (
		<main className="mt-4 flex gap-4">
			{!!user && <Profile user={user} />}
			{!!repositories && <Repositories repositories={repositories} />}
		</main>
	);
}
