import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal, lazy } from "solid-js";
import Nav from "./components/Nav";
const Home = lazy(() => import("./pages/Home"));
const Saved = lazy(() => import("./pages/Saved"));

const [userName, setUserName] = createSignal("syedyaseenabbas");
const [repos, setRepos] = createSignal([]);

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${userName()}/repos?sort=created`
  );
  setRepos(await res.json());
});

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
};

export { userName, setUserName, repos };
export default App;
