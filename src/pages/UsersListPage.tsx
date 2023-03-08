import React from 'react'
import { Header } from "../components/sections/Header";
import { Main } from "../components/sections/Main";
import { NavigationBar } from "../components/sections/NavigationBar";
import { Footer } from "../components/sections/Footer";

export const UsersListPage = () => {

  return (
    <div className="users-list-container">
      <NavigationBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
