export const Timer = () => {
  return (
    <div className="rounded-full flex-1 grid place-items-center">
      <div className="timer h-[18.75rem] w-[18.75rem] sm:w-[25.625rem] sm:h-[25.625rem] rounded-full grid place-items-center p-2.5">
        {/* TODO:: ADD CIRCULAR PGORESS COUTDOWN */}
        <div className="bg-dark-gray h-full rounded-full w-full flex flex-col items-center justify-center">
          <h1 className="text-xlarge sm:text-huge font-bold">10:00</h1>
          <button className="cursor-pointer">
            <p className="text-normal sm:text-base tracking-[13.13px] font-bold">
              PAUSE
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
