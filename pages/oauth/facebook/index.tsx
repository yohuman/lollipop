import React, { useEffect } from "react";

export default function socialLogin() {
  useEffect(() => {
    const test = async () => {
      var urlParams = new URLSearchParams(window.location.search);
      const xanoUrl = "https://x8ki-letl-twmt.n7.xano.io/api:Ah5nAblb";
      const xanoPath = "/oauth/facebook/continue";
      const redirectUrl = "https://lollipop.yohuman.io/oauth/facebook/";
      const code = urlParams.get("code");

      const options = { method: "GET" };
      const params = new URLSearchParams({ redirect_uri: redirectUrl, code });
      const response = await fetch(`${xanoUrl}${xanoPath}?${params}`, options);
      const url = await response.json();
      console.log(url);

      // close();
    };
    test();
  }, []);

  // lollipop.yohuman.io/oauth/facebook?code=AQCfKTSenqouUJz18Fr42FR5qvOFIRZCB3xMUI9jiH2acjyWHucdG1DwEfKPprv7P3_6vPO9P0ap4xiLpOBIbw4NT13LZ7SaJSgNgAIkIbcNuQ_buiCEAPZYWbCEBqBn-nMEcZC0A3sXnKHOpSqkUFnwEwVRJdhSSB4DmLHSFIVzTPwELtqconpX44ohJbS5oyYJfLPwBks2iEhLKRykuLWM0xCEZPZvu6UooLS1ISiAU-Au9lEdCGW0POrcKVQxugv6nmBv1wjHtoYW3RzFIgXUsDRAApqIWzpjTOVG64T9CmnF30AHdiv2MgcHzVQNxmzc7RL7h8Vvhq6N6q4OZaqzT2GNXixWRP9LKYBjDSzlsA#_=_

  https: return (
    <main>
      <div>Redirect</div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap");
        * {
          font-family: "Nunito", sans-serif;
        }
      `}</style>
    </main>
  );
}
