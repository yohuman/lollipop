const displayMount = {
  border: "1px solid #ebebeb",
  margin: "20px",
  borderRadius: "5px",
  background: "white"
};
const topContainer = {
  borderBottom: "1px solid #ebebeb",
  padding: "20px",
  fontSize: "20px"
};
const componentDemo = {
  borderBottom: "1px solid #ebebeb",
  padding: "20px"
};
const codeBlock = {
  padding: "20px"
};
const descriptionBlock = {
  fontSize: "14px"
};

var pretty = require("pretty");

export default function DisplayMount({ children, title, description, markup }) {
  return (
    <div style={displayMount}>
      <div style={topContainer}>
        {title}
        <div style={descriptionBlock}>{description}</div>
      </div>

      <div style={componentDemo}>{children}</div>
      <div style={codeBlock}>
        <code>{pretty(markup)}</code>
      </div>
    </div>
  );
}
