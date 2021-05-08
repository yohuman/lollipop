export default function socialLogin() {
  if (typeof global !== "undefined") {
    const self = global.self;
    self.close();
  }

  return (
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
