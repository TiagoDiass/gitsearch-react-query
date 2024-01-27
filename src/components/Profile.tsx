import { MapPin } from '@phosphor-icons/react';
import { User } from '../types/User';

function formatDate(dateString: string) {
	const date = new Date(dateString);

	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
}

type ProfileProps = {
	user: User;
};

export function Profile({ user }: ProfileProps) {
	return (
		<div className="bg-slate-50 rounded-md shadow-md w-3/5 flex flex-col items-center p-3">
			<img
				src={user.avatarUrl}
				alt={user.name}
				aria-label={`Picture of the user ${user.name}`}
				className="rounded-full w-40 shadow-lg"
			/>

			<h1 className="text-3xl text-slate-600 font-bold">{user.name}</h1>

			<a
				href={user.profileUrl}
				target="_blank"
				rel="noreferrer"
				className="mt-1 text-green-600 font-mono hover:text-green-700 hover:underline transition-all"
			>
				@{user.username}
			</a>

			<p className="text-slate-400 text-sm">
				Joined {formatDate(user.createdAt)}
			</p>

			<p className="mt-2 text-slate-600 font-light italic text-center max-w-sm">
				{user.bio}
			</p>

			<div className="mt-3 bg-green-600 w-full flex justify-between py-2 p-4 rounded-md text-slate-100">
				<div className="flex flex-col">
					<span>Repos</span>
					<strong
						className="font-extrabold text-lg"
						aria-label={`Public repos count from user ${user.name}`}
					>
						{user.publicReposCount}
					</strong>
				</div>

				<div className="flex flex-col">
					<span>Followers</span>
					<strong
						className="font-extrabold text-lg"
						aria-label={`Followers count from user ${user.name}`}
					>
						{user.followersCount}
					</strong>
				</div>

				<div className="flex flex-col">
					<span>Following</span>
					<strong
						className="font-extrabold text-lg"
						aria-label={`Following count from user ${user.name}`}
					>
						{user.followingCount}
					</strong>
				</div>
			</div>

			<div className="mt-2 text-slate-600">
				<p
					className="flex items-center"
					aria-label={`Location of the user ${user.name}`}
				>
					<MapPin size={18} /> {user.location}
				</p>
			</div>
		</div>
	);
}
