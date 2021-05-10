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
        markup={`<SocialLogin facebook={{
            xanoUrl: "https://x8ki-letl-twmt.n7.xano.io/api:Ah5nAblb",
            redirectUrl: "https://lollipop.yohuman.io/oauth/facebook/"
          }}/>`}
        params={[
          {
            name: "popup",
            type: "enum: 'desktop' | 'mobile' | 'both'",
            description:
              "Is the user prompted to login via a popup opposed to a redirect for the set context",
            default: "desktop"
          },
          {
            name: "prefix",
            type: "string",
            description:
              "The text prefixed to the social provider in the button",
            default: "Connect with"
          },
          {
            name: "or",
            type: "boolean",
            description: "True if you want to display the 'or' divider",
            default: "false"
          },
          {
            name: "orBackground",
            type: "string",
            description:
              "Name or hex string  representing the color of the background behind the word 'or'",
            default: "white"
          },
          {
            name: "facebook",
            type: "object",
            description: "An object with the settings for the facebook login",
            default: ""
          },
          {
            name: "facebook.xanoUrl",
            type: "string",
            description: "The base URL for the xano API",
            default: ""
          },
          {
            name: "facebook.xanoPath",
            type: "string",
            description: "The path to the Xano oauth facebook API",
            default: "/oauth/facebook/init"
          },
          {
            name: "facebook.redirectUrl",
            type: "string",
            description:
              "The redirect URL you entered into develoers.facebook.com",
            default: ""
          },
          {
            name: "facebook.popUpWidth",
            type: "number",
            description: "The width of the popup",
            default: "515"
          },
          {
            name: "facebook.popUpHeight",
            type: "number",
            description: "The hieght of the popup",
            default: "505"
          }
        ]}
      >
        <SocialLogin
          facebook={{
            xanoUrl: "https://x8ki-letl-twmt.n7.xano.io/api:Ah5nAblb",
            redirectUrl: "https://lollipop.yohuman.io/oauth/facebook/"
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
