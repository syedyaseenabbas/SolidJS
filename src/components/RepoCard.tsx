import { Component } from "solid-js";
import { setSavedRepo, savedRepo } from "../pages/Saved";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};

interface Props {
  repo: Repo;
}

const RepoCard: Component<Props> = ({ repo }) => {
  const save = () => {
    setSavedRepo([repo, ...savedRepo()]);
    localStorage.setItem("savedRepos", JSON.stringify(savedRepo()));
  };

  const unsaved = (repopId: string) => {
    const nextState = savedRepo()?.filter((item) => item.id !== repopId);
    setSavedRepo(nextState);
    localStorage.setItem("savedRepos", JSON.stringify(savedRepo()));
  };

  const checkSaved = (repoID: string) => {
    const check = savedRepo()?.filter((item) => item.id === repoID);
    return check.length > 0;
  };

  return (
    <div class="card">
      <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner?.login}/</strong>
          {repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        {checkSaved(repo.id) ? (
          <button onClick={() => unsaved(repo.id)} class="btn btn-danger">
            Unsaved
          </button>
        ) : (
          <button onClick={save} class="btn btn-success">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
