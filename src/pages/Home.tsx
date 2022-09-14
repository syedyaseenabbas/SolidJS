import { Component, For } from "solid-js";
import { userName, setUserName, repos } from "../App";
import RepoCard, { Repo } from "../components/RepoCard";

const handleSubmit = (event: Event) => {
  event.preventDefault();
  const newUserName = document.querySelector("#user") as HTMLInputElement;
  setUserName(newUserName.value);
};

const Home: Component = () => {
  return (
    <div>
      <form class="mb-3" onsubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          class="p-1 align-middle"
          id="user"
          placeholder="github username"
          required
        />
        <button class="btn btn-dark ms-3 w-auto">Search</button>
      </form>
      GitHub repos for {userName()}
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
