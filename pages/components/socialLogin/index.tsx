import React, { MouseEvent } from "react";

interface IProps {
  facebook?: {
    xanoUrl: string;
    xanoPath?: string;
    redirectUrl: string;
    popUpWidth?: number;
    popUpHeight?: number;
  };
  clickGoogle?: (event: MouseEvent<HTMLButtonElement>) => void;
  clickApple?: (event: MouseEvent<HTMLButtonElement>) => void;
  clickTwitter?: (event: MouseEvent<HTMLButtonElement>) => void;
  clickAnchor?: (event: MouseEvent<HTMLButtonElement>) => void;
  or?: boolean;
  orBackground?: string;
}

export default function SocialLogin({
  facebook,
  clickGoogle,
  clickApple,
  clickTwitter,
  clickAnchor,
  or = false,
  orBackground = "white"
}: IProps) {
  const clickFacebook = async (e: {
    screenX: React.ReactText;
    screenY: React.ReactText;
  }) => {
    const {
      xanoUrl = "",
      xanoPath = "/oauth/facebook/init",
      redirectUrl = "",
      popUpWidth = 515,
      popUpHeight = 505
    } = facebook;
    const w = window.open(
      "",
      "mywindow",
      `width=${+popUpWidth},height=${+popUpHeight}`
    );
    w.moveTo(+e.screenX - 205, +e.screenY - 250);
    const options = { method: "GET" };
    const params = new URLSearchParams({ redirect_uri: redirectUrl });
    const response = await fetch(`${xanoUrl}${xanoPath}?${params}`, options);
    const url = await response.json();
    w.location.href = url;
  };

  return (
    <header className="container">
      <nav className="iner-container">
        {facebook && (
          <button
            className="socialButtonsFacebook button"
            onClick={clickFacebook}
          >
            <span>Connect with</span> Facebook
          </button>
        )}
        {clickGoogle && (
          <button className="socialButtonsGoogle button" onClick={clickGoogle}>
            <span>Connect with</span> Google
          </button>
        )}

        {clickApple && (
          <button className="socialButtonsApple button" onClick={clickApple}>
            <span>Connect with</span> Apple
          </button>
        )}

        {clickTwitter && (
          <button
            className="button socialButtonsTwitter"
            onClick={clickTwitter}
          >
            <span>Connect with</span> Twitter
          </button>
        )}

        {clickAnchor && (
          <button className="button socialButtonsAnchor" onClick={clickAnchor}>
            <span>Connect with</span> Anchor
          </button>
        )}

        {or && (
          <div className="orBar">
            <span className="orTxt">or</span>
          </div>
        )}
      </nav>

      <style jsx>{`
        .orBar {
          border-bottom: 1px solid #ebebeb;
          text-align: center;
          margin-bottom: 12px;
        }
        .orTxt {
          position: relative;
          top: 10px;
          padding: 0 20px;
          font-style: italic;
          color: #282828;
          font-size: 13px;
          background: ${orBackground};
        }
        .socialButtonsFacebook {
          color: #fff;
          background: #506ebc;
          background-image: url("/facebook.svg");
        }

        .socialButtonsGoogle {
          color: #282828;
          background: #ebebeb;
          background-image: url("/google.svg");
        }

        .socialButtonsApple {
          color: #fff;
          background: #000000;
          background-image: url("/apple.svg");
        }

        .socialButtonsTwitter {
          color: #fff;
          background: #1d95e0;
          background-image: url("/twitter.svg");
        }

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
