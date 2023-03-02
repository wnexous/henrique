export default function Title(props) {
  return (
    <p
      style={{
        fontSize: "1.5rem",
        opacity: "70%",
        alignItems: "center",
        textAlign: "center",
        
      }}
    >
      {props.children}
    </p>
  );
}
