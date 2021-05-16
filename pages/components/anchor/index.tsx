import React, { Dispatch, SetStateAction } from "react";
import AnchorLink from "anchor-link";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";

interface IProps {
  action?: any;
  buttonText?: string;
  dappName?: string;
  linkSession?: any;
  net?: "eos" | "jungle3";
  setError: any;
  setLinkSession: any;
  setTransactionId?: Dispatch<SetStateAction<any>>;
}

export default function Anchor({
  action,
  buttonText = "Connect with Anchor",
  dappName = "mydapp",
  linkSession,
  net = "eos",
  setError,
  setLinkSession,
  setTransactionId
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
        const transaction = await linkSession.transact({
          action
        });
        if (transaction && transaction.id && setTransactionId) {
          setTransactionId(transaction.id);
        }
      }
    } catch (err) {
      setError(err);
    }
  };
  return (
    <header className="container">
      <nav className="iner-container">
        {clickAnchor && (
          <button className="button anchor" onClick={clickAnchor}>
            <span>{buttonText}</span>
          </button>
        )}
      </nav>

      <style jsx>{`
        .anchor {
          background: #3650a2;
          background-image: url("/anchor.svg");
          color: #fff;
        }
        .button {
          background-position: 12px 10px;
          background-repeat: no-repeat;
          background-size: 20px 20px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          line-height: 37px;
          margin-bottom: 12px;
          text-align: center;
          text-indent: 20px;
          user-select: none;
          width: 100%;
        }
      `}</style>
    </header>
  );
}
