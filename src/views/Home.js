import Aboutme from "../components/Aboutme";
import Actuator from "../components/Actuator";
import CardUser from "../components/CardUser";
import { Config } from "../config/Config";
import Maps from "../components/Maps";
import Scheduling from "../components/Scheduling";
import Space from "../components/Space";

export default function Home() {
  return (
    <main>
      <section>
        <CardUser data={Config} />
      </section>
      
      <Space />

      <section id="aboutme">
        <Aboutme data={Config} />
      </section>

      <Space />

      <section id="actuator">
        <Actuator data={Config} />
      </section>

      <Space />

      <section id="local">
        <Maps data={Config} />
      </section>

      <Space />

      <section id="consultation">
        <Scheduling data={Config} />
      </section>
    </main>
  );
}
