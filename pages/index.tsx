import Link from "next/link";

export default function index() {
  return (
    <main>
      <img src="logo@2x.svg" />
      <h6>A collection of self contained nextjs components</h6>
      <Link href="/shoppingHeader">
        <div>Shopping Header</div>
      </Link>
      <Link href="/socialLogin">
        <div>Social Login </div>
      </Link>
      <br />
      <Link href="/about/privacy">
        <small>Privacy Policy </small>
      </Link>{" "}
      |{" "}
      <Link href="/about/terms">
        <small>Terms of Service </small>
      </Link>
      |{" "}
      <Link href="/about/copyright">
        <small>Copyright Policy </small>
      </Link>
      |{" "}
      <Link href="/about/use">
        <small>Fair Use Policy </small>
      </Link>
      <style jsx>{`
        main {
          padding: 20px;
        }
      `}</style>
    </main>
  );
}
