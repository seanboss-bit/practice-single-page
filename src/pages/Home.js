import React from "react";
import Link from "../components/Link";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div>
      <Profile />
      <Link
        item="https://training.zuri.team/"
        name="zuri team"
        identity="btn__zuri"
      />
      <Link item="http://books.zuri.team " name="zuri books" identity="books" />
      <Link
        item="https://books.zuri.team/python-for-beginners?ref_id=frontend"
        name="python books"
        identity="book__python"
      />
      <Link
        item="https://background.zuri.team"
        name="background check for coders"
        identity="pitch"
      />
      <Link
        item="https://books.zuri.team/design-rules"
        name="design books"
        identity="book__design"
      />
    </div>
  );
};

export default Home;
