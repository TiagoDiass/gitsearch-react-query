import { APIRepository, Repository } from "../types/Repository";
import { User, APIUser } from "../types/User";

function parseGithubUser(apiUser: APIUser): User {
  return {
    username: apiUser.login,
    avatarUrl: apiUser.avatar_url,
    profileUrl: apiUser.html_url,
    name: apiUser.name,
    location: apiUser.location,
    bio: apiUser.bio,
    publicReposCount: apiUser.public_repos,
    followersCount: apiUser.followers,
    followingCount: apiUser.following,
    createdAt: apiUser.created_at,
  };
}

export async function fetchGithubUser(username: string): Promise<User> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  const user = parseGithubUser(data);

  return user;
}

function parseGithubUserRepositories(repos: APIRepository[]): Repository[] {
  const parsed: Repository[] = repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
  }));

  return parsed;
}

export async function fetchGithubUserRepositories(
  username: string
): Promise<Repository[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await response.json();
  const repositories = parseGithubUserRepositories(data);

  return repositories.slice(0, 3); // only three repositories
}
