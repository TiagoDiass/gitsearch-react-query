import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
	fetchGithubUser,
	fetchGithubUserRepositories,
} from '../services/github';
import { SearchResult } from './SearchResult';

export function Search() {
	const [username, setUsername] = useState('');
	const [shouldFetchUserProfile, setShouldFetchUserProfile] = useState(false);

	const { data: userProfile, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const [user, repositories] = await Promise.all([
				fetchGithubUser(username),
				fetchGithubUserRepositories(username),
			]);

			setShouldFetchUserProfile(false);

			return { user, repositories };
		},

		enabled: shouldFetchUserProfile,
	});

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setUsername(event.target.value);
	}

	function handleSearchUser(event: FormEvent) {
		event.preventDefault();
		setShouldFetchUserProfile(true);
	}

	return (
		<>
			<form
				className="bg-slate-50 rounded-md shadow-md p-4 mt-8 flex gap-4"
				onSubmit={handleSearchUser}
			>
				<input
					className="p-2 border-b border-b-slate-200 border-dotted text-slate-800 bg-transparent w-full outline-none focus:border-slate-400"
					name="username"
					placeholder="Type in a Github username"
					value={username}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="bg-green-600 hover:bg-green-700 rounded-md text-white py-2 px-4 outline-green-900 transition-all"
				>
					{isLoading ? 'Loading...' : 'Search'}
				</button>
			</form>

			{!!userProfile && (
				<SearchResult
					user={userProfile.user}
					repositories={userProfile.repositories}
				/>
			)}
		</>
	);
}
