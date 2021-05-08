import React, { useState } from "react";
import DisplayMount from "./components/displayMount";
import SocialLogin from "./components/socialLogin";

export default function socialLogin() {
  const clickGoogle = () => {
    console.log("google");
  };
  const clickApple = () => {
    console.log("apple");
  };
  const clickTwitter = () => {
    console.log("twitter");
  };
  const clickAnchor = () => {
    console.log("anchor");
  };
  return (
    <main>
      <DisplayMount
        title="Social Login"
        description="Fully responsive, login with facebook or google"
        markup={`<SocialLogin />`}
      >
        <SocialLogin
          facebook={{
            xanoUrl: "https://x8ki-letl-twmt.n7.xano.io/api:Ah5nAblb",
            redirectUrl: "https://lollipop.yohuman.io/oauth/facebook/callback"
          }}
          clickGoogle={clickGoogle}
          clickApple={clickApple}
          clickTwitter={clickTwitter}
          clickAnchor={clickAnchor}
          or={true}
        />
      </DisplayMount>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap");
        * {
          font-family: "Nunito", sans-serif;
        }
      `}</style>
    </main>
  );
}
