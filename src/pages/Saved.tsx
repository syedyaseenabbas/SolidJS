import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const getFromLocalStorage = JSON.parse(
  localStorage.getItem("savedRepos") || "[]"
);
const [savedRepo, setSavedRepo] = createSignal(getFromLocalStorage as Repo[]);

const Saved: Component = () => {
  return (
    <div>
      <h1>Your Saved Repos</h1>
      <For each={savedRepo()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export { setSavedRepo, savedRepo };
export default Saved;
