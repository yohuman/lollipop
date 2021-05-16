import React from "react";
import AnchorLink from "anchor-link";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";

interface IProps {
  text?: string;
  net: "eos" | "jungle3";
  dappName?: string;
  setLinkSession: any;
  setTransactionId: any;
  linkSession?: any;
  error: any;
  action?: any;
}

export default function Anchor({
  net = "eos",
  dappName = "mydapp",
  text = "Connect with Anchor",
  setLinkSession,
  setTransactionId,
  linkSession,
  error,
  action
}: IProps) {
  const clickAnchor = async () => {
    let chainId: string;
    let nodeUrl: string;
    if (net === "eos") {
      chainId =
        "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";
      nodeUrl = "https://eos.greymass.com";
    } else if (net === "jungle3") {
      chainId =
        "2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840";
      nodeUrl = "https://jungle3.cryptolions.io:443";
    }
    try {
      if (!linkSession) {
        const transport = new AnchorLinkBrowserTransport();
        const link = new AnchorLink({
          transport,
          chains: [{ chainId, nodeUrl }]
        });
        const res = await link.login(dappName);
        setLinkSession(res.session);
      } else if (linkSession) {
        const transaction = await linkSession.transact({ action });
        if (transaction && transaction.id) setTransactionId(transaction.id);
      }
    } catch (err) {
      error(err);
    }
  };
  return (
    <header className="container">
      <nav className="iner-container">
        {clickAnchor && (
          <button className="button socialButtonsAnchor" onClick={clickAnchor}>
            <span>{text}</span>
          </button>
        )}
      </nav>

      <style jsx>{`
        .socialButtonsAnchor {
          color: #fff;
          background: #3650a2;
          background-image: url("/anchor.svg");
        }
        .button {
          width: 100%;
          line-height: 37px;
          text-indent: 20px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          background-repeat: no-repeat;
          background-position: 12px 10px;
          background-size: 20px 20px;
          user-select: none;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          margin-bottom: 12px;
        }
      `}</style>
    </header>
  );
}
