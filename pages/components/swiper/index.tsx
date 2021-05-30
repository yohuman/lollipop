import React, { useCallback, useRef, useState, useEffect } from "react";
import Link from "next/link";

const Swiper = () => {
  const ref = useRef(null);
  const startX = useRef<number>(0);
  const [startScrollPosition, setStartScrollPosition] = useState<number>(0);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [hideLeft, setHideLeft] = useState<boolean>(null);
  const [hideRight, setHideRight] = useState<boolean>(null);
  const [doClick, setDoClick] = useState<boolean>(null);

  const handleDown = useCallback((e: any) => {
    setMouseDown(true);
    if (!ref.current.contains(e.target)) return;
    if (e.target.id === "item") setDoClick(true);
    startX.current = e.pageX - ref.current.offsetLeft;
    setStartScrollPosition(ref.current.scrollLeft);
  }, []);

  const handleMove = useCallback(
    (e: any) => {
      e.preventDefault();
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
    console.log(e.target.id);
    setMouseDown(false);
    if (doClick) console.log("click");
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
      {JSON.stringify(doClick)}
      <ul onScroll={handleScroll} ref={ref}>
        <li id="item">Item 1</li>
        <li id="item">Item 2</li>
        <li id="item">Item 3</li>
        <li id="item">Item 4</li>
        <li id="item">Item 5</li>
        <li id="item">Item 6</li>
        <li id="item">Item 7</li>
        <li id="item">Item 8</li>
      </ul>
      {!hideLeft && (
        <div className="left" onClick={goLeft}>
          Left
        </div>
      )}
      {!hideRight && (
        <div className="right" onClick={goRight}>
          Right
        </div>
      )}
      <style jsx>{`
        .container {
          position: relative;
        }
        .left {
          position: absolute;
          top: 110px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
          cursor: pointer;
        }
        .right {
          position: absolute;
          top: 110px;
          right: 0;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
          cursor: pointer;
        }
        ul {
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          height: 260px;
          cursor: grab;
          padding: 0;
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(8, 260px);
        }
        ul::-webkit-scrollbar {
          background: #ebeced;
          height: 6px;
          margin: 0 20px;
        }
        ul::-webkit-scrollbar-thumb {
          background: #c8cad0;
        }
        li {
          display: inline-block;
          vertical-align: top;
          width: 230px;
          height: 230px;
          white-space: normal;
          background: grey;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </header>
  );
};

export default function App() {
  return <Swiper />;
}
