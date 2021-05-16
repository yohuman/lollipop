import React, { useEffect } from "react";

export default function socialLogin() {
  useEffect(() => {
    const callXano = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      const xanoUrl = "https://x8ki-letl-twmt.n7.xano.io/api:KIq0EWex";
      const xanoPath = "/oauth/facebook/continue";
      const redirectUrl = "https://lollipop.yohuman.io/oauth/facebook/";

      const options = { method: "GET" };
      const params = new URLSearchParams({
        redirect_uri: redirectUrl,
        code
      });
      const response = await fetch(`${xanoUrl}${xanoPath}?${params}`, options);
      const res = await response.json();
      const { token, name } = res;
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      close();
    };
    callXano();
  }, []);

  return (
    <main>
      <div>Redirect</div>
    </main>
  );
}


// client id : 1031700813725-9650tb0qcjldcmvsnb843b85mabu7t1e.apps.googleusercontent.com
// client secret;   MZT4E-RkYT9UiH7Lqf73-_id