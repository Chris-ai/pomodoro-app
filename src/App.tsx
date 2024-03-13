import { Header } from "./components/heading/header";
import { SettingsButton } from "./components/settings/settings-button";
import { Timer } from "./components/timer/timer";
import { cn } from "./utils";

function App() {
  return (
    <main
      className={cn(
        "flex flex-col items-center w-full h-full gap-12 px-6 pt-8 pb-12 bg-dark-blue text-light-blue min-h-screen",
        "font-kumbh-sans"
      )}
    >
      <Header />
      <Timer />
      <SettingsButton />
    </main>
  );
}

export default App;
