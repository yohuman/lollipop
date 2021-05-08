export default function privacyPolicy() {
  const siteName = "YoHuman";
  const supportEmail = "support@yohuman.io";

  return (
    <main>
      <article>
        <header>
          <h1>Copyright & Trademark Policies</h1>
        </header>
        <p>
          {siteName} ("{siteName}") supports and promotes intellectual property
          rights of others and expects its users to respect such rights.
          Wherever possible, we will record IP addresses of all users
          transmitting content using the {siteName} service (the “Service”).{" "}
          {siteName} will block transmissions from users who repeatedly infringe
          or are alleged to have repeatedly infringed the copyrights or other
          intellectual property rights of others.
        </p>
        <p>
          Pursuant to the Digital Millennium Copyright Act of 1998, available on
          the U.S. Copyright Office website at{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.copyright.gov/legislation/dmca.pdf"
          >
            http://www.copyright.gov/legislation/dmca.pdf
          </a>
          , {siteName} will respond promptly to claims of copyright infringement
          taking place through the Service if those claims are reported to{" "}
          {siteName}’s Designated Copyright Agent, identified below.
        </p>
        <p>
          If you are a copyright owner, or the owner’s authorized representative
          or if you have an exclusive licensee to the copyright, please report
          alleged copyright infringements to us by completing the following DMCA
          Notice of Alleged Infringement and delivering it to {siteName}’s
          Designated Copyright Agent. When we receive the notice, we will take
          whatever action we deem appropriate, which may include removal of the
          allegedly infringing material posted through the Service.
        </p>
        <p>
          <strong>
            How to File a DMCA Notice of Alleged Infringement ("Notice"). See
            link to notice form below.
          </strong>
        </p>
        <ul>
          <li>
            <p>
              Identify the original copyrighted work that you claim has been
              infringed, or if multiple copyrighted works are covered by this
              Notice, we will accept a sample list of the original copyrighted
              works that have been infringed.
            </p>
          </li>
          <li>
            <p>
              IIdentify (i) the content on the Service that you claim is
              infringing your rights and that you wish to have removed or
              disabled, and (ii) a reasonable amount of information to allow us
              to locate the material.
            </p>
          </li>
          <li>
            <p>
              Provide your full legal name, mailing address, telephone number,
              and email address.
            </p>
          </li>
          <li>
            <p>
              Include both of the following statements in the text of the
              Notice: (1) "I hereby state that I have a good faith belief that
              the disputed use of the copyrighted material or reference or link
              to such material is not authorized by the copyright owner, its
              agent, or the law (e.g., as a fair use)." AND (2) "I hereby state
              that the information in this Notice is accurate and, under penalty
              of perjury, that I am the owner, or authorized to act on behalf of
              the owner, of the copyright or of an exclusive right under the
              copyright that is allegedly infringed."
            </p>
          </li>
          <li>
            <p>
              Provide your electronic or physical signature. Deliver this
              Notice, with all items completed, to {siteName}’s Designated
              Copyright Agent:
            </p>
            <p>
              {siteName} Copyright Agent:{" "}
              <a href="mailto:{supportEmail}">{supportEmail}</a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/files/DMCAForm.pdf"
              >
                Copyright Infringement Notice Form
              </a>
            </p>
          </li>
        </ul>
        <h3>
          If You Believe Your Transmission was Removed Pursuant to a Copyright
          Complaint (DMCA) Notification.
        </h3>
        <p>
          {siteName} may remove content for any reason, including due to
          flagging by other users as inappropriate. A transmission might also be
          removed due a copyright complaint, meaning the transmission’s content
          has been deleted from {siteName}’s Service at the request of the
          content’s copyright owner. If a user transmits too much content that
          receives copyright complaints, that user identification may lose the
          ability to contribute new content to {siteName}, and may be disabled.
          At your written request we will provide you with the copyright
          complaint filed against your content.
        </p>
        <p>
          If you take the position that your content was removed in error, you
          may file a counter- notice by following the steps below. When we
          receive a valid counter-notice, we will send a copy to the party who
          filed the original complaint. If we do not receive notice within 10
          business days that the original complaining party is seeking a court
          order to prevent further infringement, we will remove the complaint
          from your user record, and we may choose to replace the content that
          was removed.
        </p>
        <p>
          Note: There are legal and financial consequences for fraudulent and/or
          bad faith notices. Before submitting a counter-notice, be sure that
          you are the actual rights holder of the removed content or that you
          have a good faith belief that the material was removed in error, and
          that you understand the repercussions of submitting a false claim.
        </p>
        <p>
          <strong>How to File a Counter-Notice</strong>
        </p>
        <ul>
          <li>Reply to the copyright complaint we send you at your request.</li>
          <li>Include ALL of the following:</li>
          <ol>
            <li>Your name, address, and telephone number.</li>
            <li>DMCA ID shown at the bottom of the notification email.</li>
            <li>
              A copy of the actual content you posted and its image
              identification (see above instructions) plus the approximate date
              that you posted this content
            </li>
            <li>
              A statement under penalty of perjury that you have a good faith
              belief that the content was removed in error.
            </li>
            <li>
              A statement that you consent to the jurisdiction of Federal
              District Court for the judicial district in which the address is
              located, or if your address is outside of the United States, for
              any judicial district in which {siteName} may be found, and that
              you will accept service of process from the person who provided
              the original complaint under subsection (c)(1)(C) or an agent of
              such person.
            </li>
            <li>
              A physical or electronic signature (for example, typing your full
              name).
            </li>
          </ol>
        </ul>
        <h3>TRADEMARK</h3>
        <p>
          {siteName} respects the trademark rights of others. Content that
          misleads others or violates another’s trademark may be permanently
          removed. If you are concerned that someone may be infringing your
          trademark or service mark on our Site, please let us know by
          contacting our agent below. {siteName} will review your notice and
          take whatever action, it deems appropriate, including temporary or
          permanent removal of the trademark from the {siteName} Site or App.
        </p>
        <p>
          {siteName} Trademark Agent:{" "}
          <a href="mailto:{supportEmail}">{supportEmail}</a>
        </p>
      </article>
      <style jsx>{`
        main {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
}
