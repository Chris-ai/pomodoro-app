import { Logo } from "../logo";
import { Tabs } from "./tabs";

export const Header = () => {
  return (
    <section className="flex flex-col gap-11">
      <Logo />
      <Tabs />
    </section>
  );
};
