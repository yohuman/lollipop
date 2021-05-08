const background = {
  background: "#ebebeb",
  height: "100vh",
  paddingTop: "20px"
};

function MyApp({ Component, pageProps }) {
  return (
    <div style={background}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
