import Link from "next/link";

export default function index() {
  return (
    <main>
      <div>
        <img src="logo@2x.svg" />
        <h6>A collection of delicious nextjs components</h6>
      </div>
      <div>
        <Link href="/shoppingHeader">
          <div className="link">Shopping Header</div>
        </Link>
        <Link href="/socialLogin">
          <div className="link">Social Login </div>
        </Link>
      </div>
      <div>
        <Link href="/about/privacy">
          <small className="link">Privacy Policy </small>
        </Link>{" "}
        |{" "}
        <Link href="/about/terms">
          <small className="link">Terms of Service </small>
        </Link>
        |{" "}
        <Link href="/about/copyright">
          <small className="link">Copyright Policy </small>
        </Link>
        |{" "}
        <Link href="/about/use">
          <small className="link">Fair Use Policy </small>
        </Link>
      </div>
      <style jsx>{`
        main {
          box-sizing: border-box;
          padding: 20px;
          display: grid;
          grid-template-rows: 120px 1fr 30px;
          height: 100vh;
        }
        .link {
          cursor: pointer;
        }
      `}</style>
    </main>
  );
}
