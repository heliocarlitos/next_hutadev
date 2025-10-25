import { Aplication } from "@/components/aplication/aplication";
import { Cumpany } from "@/components/cumpany/page";
import { Desenvolvemos } from "@/components/desenvolvemos/desenvolvemos";
import { HeroHome } from "@/components/herohome/herohome";
import { Stats } from "@/components/stats/stats";

export default function Home() {
  return (
    <>
      <HeroHome />
      {/* <br/> */}
      <Cumpany />
      <Desenvolvemos />
      <Aplication />
      <Stats />
    </>
  );
}
