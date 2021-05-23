import React, { useRef, useState, useLayoutEffect, useEffect } from "react";

export default function Swiper() {
  const ref = useRef(null);
  const [componentWidth, setComponentWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  let movement_timer = null;

  const test_width = () => {
    if (ref.current) {
      setComponentWidth(ref.current.offsetWidth);
    }
  };

  useLayoutEffect(() => {
    test_width();
  }, []);

  const handleResize = () => {
    clearInterval(movement_timer);
    movement_timer = setTimeout(test_width, 100);
  };

  const handleDown = (e: any) => {
    if (!ref.current.contains(e.target)) {
      return;
    }
    setStartX(e.pageX - ref.current.offsetLeft);
    setStartScrollLeft(ref.current.scrollLeft);
  };

  const handleMove = (e: any) => {
    e.preventDefault();
    if (!ref.current.contains(e.target)) {
      return;
    }
    const mouseX = e.pageX - ref.current.offsetLeft;
    const moveX = mouseX - startX;
    ref.current.scrollLeft = startScrollLeft - moveX;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const handleScroll = (e: any) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    if (scrollLeft + clientWidth === scrollWidth) {
      console.log("end");
    }
    if (scrollLeft === 0) {
      console.log("start");
    }
  };

  return (
    <header className="container">
      {componentWidth} - {startX} - {startScrollLeft}
      <ul onScroll={handleScroll} ref={ref}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
      </ul>
      <style jsx>{`
        ul {
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          height: 260px;
          cursor: grab;
          padding: 0;
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 260px 260px 260px 260px 260px 260px 260px 260px;
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
        }
      `}</style>
    </header>
  );
}

// https://valtism.com/src/use-drag-scroll.html
