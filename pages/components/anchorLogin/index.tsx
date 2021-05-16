import React from "react";
import AnchorLink from "anchor-link";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";

interface IProps {
  prefix?: string;
  chainId?: string;
  nodeUrl?: string;
  dappName?: string;
}

export default function AnchorLogin({
  chainId = "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
  nodeUrl = "https://eos.greymass.com",
  dappName = "mydapp",
  prefix = "Connect with"
}: IProps) {
  const clickAnchor = async () => {
    const transport = new AnchorLinkBrowserTransport();
    const link = new AnchorLink({ transport, chains: [{ chainId, nodeUrl }] });
    const identity = await link.login(dappName);
  };
  return (
    <header className="container">
      <nav className="iner-container">
        {clickAnchor && (
          <button className="button socialButtonsAnchor" onClick={clickAnchor}>
            <span>{prefix}</span> Anchor
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
