import { useRef, useState, useEffect } from "react";
import { cn } from "../../utils";

const allTabs = ["pomodoro", "short break", "long break"];

export const Tabs = () => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="relative mx-auto flex h-16 rounded-full bg-dark-gray px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        {/* TODO:: Change bg-red to be dynamic app color */}
        <span className="h-full w-full rounded-3xl bg-red" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;
        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={cn(
              "cursor-pointer rounded-full font-semibold py-3 px-6 text-center text-light-blue/40 text-tiny sm:text-normal",
              isActive ? `text-dark-blue` : ""
            )}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
