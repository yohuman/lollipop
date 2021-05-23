import React, { useState } from "react";
import DisplayMount from "./components/displayMount";
import Swiper from "./components/swiper";

export default function swiper() {
  return (
    <main>
      <DisplayMount
        description="Swipe on mobile and desktop"
        github="https://github.com/yohuman/lollipop/blob/main/pages/components/swiper/index.tsx"
        markup={`<Swiper anchor={{net : "eos"}}/>`}
        title="Swiper"
      >
        <Swiper />
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
