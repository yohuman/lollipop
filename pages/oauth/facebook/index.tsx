import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function socialLogin() {
  const router = useRouter();

  useEffect(() => {
    const test = () => {
      console.log(router.asPath.split("?code=")[1]);
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
