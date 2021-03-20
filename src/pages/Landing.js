import React from 'react';

const Landing = () =>
  <div className="h-full flex items-center justify-center flex-col">
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
