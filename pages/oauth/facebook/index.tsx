import React, { useEffect } from "react";

export default function socialLogin() {
  useEffect(() => {
    const callXano = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      const xanoUrl = "https://x8ki-letl-twmt.n7.xano.io/api:Ah5nAblb";
      const xanoPath = "/oauth/facebook/continue";
      const redirectUrl = "https://lollipop.yohuman.io/oauth/facebook/";

      const options = { method: "GET" };
      const params = new URLSearchParams({
        redirect_uri: redirectUrl,
        code
      });
      const response = await fetch(`${xanoUrl}${xanoPath}?${params}`, options);
      const url = await response.json();
      if (url) console.log(url);

      // Failed to load resource: the server responded with a status of 500 ()
      // FATAL

      // close();
    };
    callXano();
  }, []);

  return (
    <main>
      <div>Redirect</div>
    </main>
  );
}
