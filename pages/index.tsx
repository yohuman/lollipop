import Link from "next/link";

export default function index() {
  return (
    <main>
      <div>
        <img src="logo@2x.svg" />
        <h5>A collection of delicious nextjs components</h5>
      </div>

      <ul>
        <Link href="/shoppingHeader">
          <li className="link">Shopping Header</li>
        </Link>
        <Link href="/socialLogin">
          <li className="link">Social Login </li>
        </Link>
        <Link href="/anchor">
          <li className="link">Anchor</li>
        </Link>
      </ul>

      <footer>
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
          <small className="link">Acceptable Use Policy </small>
        </Link>
      </footer>
      <style jsx>{`
        footer {
          font-size: 12px;
        }

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
