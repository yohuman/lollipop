const background = {
  background: "#ebebeb",
  height: "100vh",
  paddingTop: "20px"
};

function MyApp({ Component, pageProps }) {
  return (
    <div style={background}>
      <style jsx global>{`
        body {
          margin: 0px;
          background: #ebebeb;
        }
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap");
        * {
          font-family: "Nunito", sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
