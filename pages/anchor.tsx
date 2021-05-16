import React, { useState } from "react";
import DisplayMount from "./components/displayMount";
import Anchor from "./components/anchor";

export default function anchor() {
  const [linkSession, setLinkSession] = useState<any>();
  const [transactionId, setTransactionId] = useState<any>();
  const [error, setError] = useState<any>();
  let action: any;

  if (linkSession) {
    action = {
      account: "eosio",
      authorization: [linkSession.auth],
      data: {
        producers: [],
        proxy: "greymassvote",
        voter: linkSession.auth.actor
      },
      name: "voteproducer"
    };
  }

  return (
    <main>
      <DisplayMount
        description="Login and sign transactions with the EOS Anchor wallet"
        github="https://github.com/yohuman/lollipop/blob/main/pages/components/anchor/index.tsx"
        markup={`<Anchor anchor={{net : "eos"}}/>`}
        title="Anchor"
      >
        {linkSession && (
          <Anchor
            action={action}
            buttonText={"Sign with Anchor"}
            linkSession={linkSession}
            setError={setError}
            setLinkSession={setLinkSession}
            setTransactionId={setTransactionId}
          />
        )}
        {transactionId && <div>transactionId</div>}
        {error && <div>error</div>}

        {!linkSession && (
          <Anchor setError={setError} setLinkSession={setLinkSession} />
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
