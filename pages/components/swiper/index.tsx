import React, { useCallback, useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

const Swiper = () => {
  const router = useRouter();
  const ref = useRef(null);
  const startX = useRef<number>(0);
  const [startScrollPosition, setStartScrollPosition] = useState<number>(0);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [hideLeft, setHideLeft] = useState<boolean>(true);
  const [hideRight, setHideRight] = useState<boolean>(null);
  const [doClick, setDoClick] = useState<boolean>(null);

  const handleDown = useCallback((e: any) => {
    setMouseDown(true);
    if (!ref.current.contains(e.target)) return;
    if (e.target.id !== "bg") setDoClick(true);
    startX.current = e.pageX - ref.current.offsetLeft;
    setStartScrollPosition(ref.current.scrollLeft);
  }, []);

  const handleMove = useCallback(
    (e: any) => {
      if (!ref.current.contains(e.target)) return;
      setDoClick(false);
      const mouseX = e.pageX - ref.current.offsetLeft;
      const moveX = mouseX - startX.current;
      if (mouseDown) {
        ref.current.scrollLeft = startScrollPosition - moveX;
      }
    },
    [mouseDown, startScrollPosition, startX]
  );

  const handleUp = (e: any) => {
    setMouseDown(false);
    if (doClick) router.push(`/${e.target.id}`);
    setDoClick(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mousemove", handleMove);
    };
  }, [handleDown, handleMove, handleUp]);

  const handleScroll = (e: any) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    setHideRight(scrollLeft + clientWidth === scrollWidth);
    setHideLeft(scrollLeft === 0);
  };

  const goLeft = () => (ref.current.scrollLeft = ref.current.scrollLeft - 400);
  const goRight = () => (ref.current.scrollLeft = ref.current.scrollLeft + 400);

  return (
    <header className="container">
      <ul onScroll={handleScroll} ref={ref} id="bg">
        <li id="about">Item 1</li>
        <li id="test">Item 2</li>
        <li id="big">Item 3</li>
        <li id="here">Item 4</li>
        <li id="there">Item 5</li>
        <li id="big">Item 6</li>
        <li id="small">Item 7</li>
        <li id="storm">Item 8</li>
      </ul>
      {!hideLeft && <div className="left" onClick={goLeft}></div>}
      {!hideRight && <div className="right" onClick={goRight}></div>}
      <style jsx>{`
        .container {
          position: relative;
        }
        .left {
          display: none;
        }
        .right {
          display: none;
        }
        ul {
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          cursor: grab;
          padding: 0;
          display: grid;
          grid-gap: 20px;
          grid-auto-flow: column;
          padding-left: 0px;
        }

        ul::-webkit-scrollbar {
          background: transparent;
        }
        ul::-webkit-scrollbar-button {
          background: transparent;
        }
        ul::-webkit-scrollbar-thumb {
          background: transparent;
        }
        li {
          display: inline-block;
          vertical-align: top;
          width: calc((100vw) / 2.5 - 60px);
          height: calc((100vw) / 2.5 - 60px);
          white-space: normal;
          background: grey;
          cursor: pointer;
          border-radius: 4px;
          user-select: none;
        }
        @media screen and (min-width: 900px) {
          .left {
            position: absolute;
            top: 80px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: white;
            box-shadow: 0px -4px 4px rgb(0 0 0 / 25%);
            cursor: pointer;
            user-select: none;
            display: block;
            background-image: url("./chevron.svg");
            background-repeat: no-repeat;
            background-position: center;
            transform: rotate(180deg);
          }
          .right {
            position: absolute;
            top: 80px;
            right: 0;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: white;
            box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
            cursor: pointer;
            user-select: none;
            display: block;
            background-image: url("./chevron.svg");
            background-repeat: no-repeat;
            background-position: center;
          }
          ul {
            grid-auto-flow: column;
            padding-bottom: 20px;
            padding-left: 50px;
          }
          ul::-webkit-scrollbar {
            background: #ebeced;
            height: 6px;
            margin: 0 20px;
          }
          ul::-webkit-scrollbar-button {
            width: 25px;
            background: white;
          }
          ul::-webkit-scrollbar-thumb {
            background: #c8cad0;
          }
          li {
            width: 230px;
            height: 230px;
          }
        }
      `}</style>
    </header>
  );
};

export default function App() {
  return <Swiper />;
}
