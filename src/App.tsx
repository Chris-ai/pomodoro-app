import { Header } from "./components/heading/header";
import { cn } from "./utils";

function App() {
  return (
    <main
      className={cn(
        "flex justify-between flex-col items-center w-full h-full px-6 pt-8 pb-12 bg-dark-blue text-light-blue",
        "font-space-mono"
      )}
    >
      <Header />
      <section>TIMER</section>
      <section>SETTINGS</section>
    </main>
  );
}

export default App;
