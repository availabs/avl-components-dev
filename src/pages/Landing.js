import React from 'react';

const Landing = () =>
  <div className="h-full w-full grid place-content-center place-items-center">
    <div className="text-2xl font-bold">Welcome</div>
    <div className="text-xl">Please add new pages!</div>
  </div>

const config = {
  path: "/",
  exact: true,
  mainNav: false,
  component: Landing,
  layoutSettings: {
    fixed: true,
    headerBar: false,
    logo: "AVAIL",
    navBar: 'side'
  }
}

export default config;
