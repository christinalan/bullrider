export default function VestedSlider() {
    // Dynamic vested data (replace with actual state when integrating)
    const vestedAmount = 1312; 
    const vestedPercentage = 52; // Dynamic percentage
    const vestedRank = 1324;
    const daysVested = 32
  
    return (
      <div className="w-full flex flex-col gap-2 text-center items-center">
        {/* Text Display */}
        <h1 className="text-[#812C27] text-2xl font-bold">
          ${vestedAmount} VESTED ({vestedPercentage}%)
        </h1>
  
        {/* Progress Bar */}
        <div className="w-full h-4 bg-black rounded-full overflow-hidden">
          <div
            className="h-full bg-[#812C27] rounded-full transition-all duration-300"
            style={{ width: `${vestedPercentage}%` }} // Dynamically set width
          ></div>
        </div>

        {/* Text about the holder */}
        <h1 className="text-[#812C27] text-lg font-bold leading-6"
        >{`You've held for ${daysVested} and are the ${vestedRank}th longest holder.`}</h1>
      </div>
    );
  }