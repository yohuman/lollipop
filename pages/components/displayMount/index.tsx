import Link from "next/link";
var pretty = require("pretty");

interface IProps {
  children: any;
  title: string;
  description: string;
  markup: string;
  params?: any;
  github?: string;
}

export default function DisplayMount({
  children,
  title,
  description,
  markup,
  params,
  github
}: IProps) {
  return (
    <main>
      <div className="displayMount">
        <div className="topContainer">
          {title}

          <div className="descriptionBlock">
            <div>{description}</div>
            {github && (
              <Link href={github}>
                <div className="github">View on GitHub</div>
              </Link>
            )}
          </div>
        </div>

        <div className="componentDemo">{children}</div>
        <div className="codeBlock">
          <code>{pretty(markup)}</code>
        </div>

        <div className="params">
          {params && (
            <div className="grid-header">
              <div>Parameter Name</div>
              <div>Description</div>
              <div>Default</div>
            </div>
          )}
          {params &&
            params.map((param: any, index: number) => {
              return (
                <div key={`param-${index}`} className="grid">
                  <div>
                    {param.required && <span>*</span>}
                    {param.name}
                  </div>
                  <div>
                    <div>{param.type}</div>
                    <div>{param.description}</div>
                  </div>
                  <div>{param.default}</div>
                </div>
              );
            })}
        </div>
      </div>

      <style jsx>{`
        .github {
          cursor: pointer;
          font-size: 11px;
          margin-top: 20px;
        }
        .grid-header {
          margin: 20px;
          display: grid;
          grid-template-columns: 2fr 3fr 1fr;
          grid-gap: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .grid {
          margin: 20px;
          display: grid;
          grid-template-columns: 2fr 3fr 1fr;
          grid-gap: 20px;
          font-size: 12px;
        }
        .params {
          border-top: 1px solid #ebebeb;
        }
        .displayMount {
          border: 1px solid #ebebeb;
          margin: 20px;
          border-radius: 5px;
          background: white;
        }
        .topContainer {
          border-bottom: 1px solid #ebebeb;
          padding: 20px;
          font-size: 20px;
        }
        .componentDemo {
          border-bottom: 1px solid #ebebeb;
          padding: 20px;
        }
        .codeBlock {
          padding: 20px;
        }
        .descriptionBlock {
          font-size: 14px;
        }
      `}</style>
    </main>
  );
}
