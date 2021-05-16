import React from "react";
import DisplayMount from "./components/displayMount";
import AnchorLogin from "./components/anchorLogin";

export default function anchorLogin() {
  return (
    <main>
      <DisplayMount
        title="Anchor Login"
        github="https://github.com/yohuman/lollipop/blob/main/pages/components/anchorLogin/index.tsx"
        description="Login with the EOS Anchor wallet"
        markup={`<AnchorLogin anchor={{
  chainId : "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
  nodeUrl : "https://eos.greymass.com",
  dappName : "mydapp",
  prefix : "Connect with"
          }}/>`}
      >
        <AnchorLogin
          anchor={{
            chainId:
              "2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840"
          }}
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
