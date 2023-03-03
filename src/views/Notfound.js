import { TbRobotOff } from "react-icons/tb";

export default function Notfound() {
  return (
    <main>
      <section
        style={{
          height: "60vh",
          display: "block",
          alignItems: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <p>Página não encontrada.</p>
        <TbRobotOff
          style={{
            width: "2rem",
            height: "2rem",
            opacity: "70%",
          }}
        />
      </section>
    </main>
  );
}
