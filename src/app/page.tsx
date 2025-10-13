import { Aplication } from "@/components/aplication/aplication";
import { HeroHome } from "@/components/herohome/herohome";
import { Stats } from "@/components/stats/stats";
import { TambPro } from "@/components/tambpro/tambpro";

export default function Home() {
  return (
    <>
      <HeroHome />
      <TambPro />
      <Aplication />
      <Stats />
    </>
  );
}
