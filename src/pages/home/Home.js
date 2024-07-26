import React from "react";

import Hero from "../../components/Hero";
import TopBuilds from "./TopBuilds";
import FeaturedCreator from "./FeaturedCreator";
import FeaturedBuild from "./FeaturedBuild";

function Home() {
  return (
    <div>
      <Hero
        headline="SHARE YOUR CAR!"
        subline="SIGN UP TO SHARE YOUR KILLER CARS AND SEE WHAT OTHER USERS HAVE"
      />

      <TopBuilds filter="ordering=-comments_count" />
      <FeaturedBuild />
      <FeaturedCreator />
    </div>
  );
}

export default Home;
