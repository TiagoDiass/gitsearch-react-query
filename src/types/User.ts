export type APIUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type User = {
  username: string;
  avatarUrl: string;
  profileUrl: string;
  name: string;
  location: string;
  bio: string;
  publicReposCount: number;
  followersCount: number;
  followingCount: number;
  createdAt: string;
};
