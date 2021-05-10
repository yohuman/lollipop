var pretty = require("pretty");

interface IProps {
  children: any;
  title: string;
  description: string;
  markup: string;
  params?: any;
}

export default function DisplayMount({
  children,
  title,
  description,
  markup,
  params
}: IProps) {
  return (
    <main>
      <div className="displayMount">
        <div className="topContainer">
          {title}
          <div className="descriptionBlock">{description}</div>
        </div>

        <div className="componentDemo">{children}</div>
        <div className="codeBlock">
          <code>{pretty(markup)}</code>
        </div>
        <div className="params">
          <div className="grid-header">
            <div>Parameter Name</div>
            <div>Description</div>
            <div>Default</div>
          </div>
          {params &&
            params.map((param: any, index: number) => {
              return (
                <div key={`param-${index}`} className="grid">
                  <div>{param.name}</div>
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
        .grid-header {
          margin: 20px;
          display: grid;
          grid-template-columns: 2fr 3fr 1fr;
          grid-gap: 20px;
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
