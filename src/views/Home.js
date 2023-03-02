import Aboutme from "../components/Aboutme";
import Actuator from "../components/Actuator";
import CardUser from "../components/CardUser";
import { Config } from "../config/Config";
import Maps from "../components/Maps";
import Title from "../components/Title";

export default function Home() {
  return (
    <main>
      <section>
        <CardUser data={Config} />
      </section>

      <section id="actuator">
        <Actuator data={Config} />
      </section>

      <section id="aboutme">
        <Aboutme data={Config} />
      </section>

      <section id="local">
        <Maps data={Config} />
      </section>
    </main>
  );
}
