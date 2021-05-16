import React, { useState } from "react";
import DisplayMount from "./components/displayMount";
import Anchor from "./components/anchor";

export default function anchor() {
  const [linkSession, setLinkSession] = useState<any>();
  const [transactionId, setTransactionId] = useState<any>();
  let action: any;

  if (linkSession) {
    action = {
      account: "eosio",
      name: "voteproducer",
      authorization: [linkSession.auth],
      data: {
        voter: linkSession.auth.actor,
        proxy: "greymassvote",
        producers: []
      }
    };
  }

  const error = (e: any) => {
    console.log(e);
  };
  return (
    <main>
      <DisplayMount
        title="Anchor"
        github="https://github.com/yohuman/lollipop/blob/main/pages/components/anchor/index.tsx"
        description="Login and sign transactions with the EOS Anchor wallet"
        markup={`<Anchor anchor={{net : "eos"}}/>`}
      >
        {linkSession && (
          <Anchor
            setLinkSession={setLinkSession}
            linkSession={linkSession}
            error={error}
            text={"Sign with Anchor"}
            action={action}
            setTransactionId={setTransactionId}
          />
        )}
        {transactionId && <div>transactionId</div>}

        {!linkSession && (
          <Anchor setLinkSession={setLinkSession} error={error} />
        )}
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
