import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
import { savedRepo } from "../pages/Saved";

const Nav: Component = () => {
  return (
    <div class="mt-5 mb-3">
      <NavLink
        href="/"
        class="btn btn-primary me-2"
        end
        activeClass="btn-success"
      >
        Home
      </NavLink>
      <NavLink
        href="/saved"
        class="btn btn-primary me-2"
        activeClass="btn-success"
      >
        Saved ~ {savedRepo().length}
      </NavLink>
    </div>
  );
};

export default Nav;
