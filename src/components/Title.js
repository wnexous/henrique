export default function Title(props = { color: String }) {
  return (
    <h1
      style={{
        color: props.color || "rgb(0,0,0,0.7)",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      {props.children}
    </h1>
  );
}
