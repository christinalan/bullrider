export default function VestedSlider() {
    // Dynamic vested data (replace with actual state when integrating)
    const vestedAmount = 1312; 
    const vestedPercentage = 52; // Dynamic percentage
  
    return (
      <div className="w-full flex flex-col gap-3 text-center items-center">
        {/* Text Display */}
        <h1 className="text-[#812C27] text-2xl sm:text-3xl font-black">
          ${vestedAmount} VESTED ({vestedPercentage}%)
        </h1>
  
        {/* Progress Bar */}
        <div className="w-full h-4 bg-black rounded-full overflow-hidden">
          <div
            className="h-full bg-[#812C27] rounded-full transition-all duration-300"
            style={{ width: `${vestedPercentage}%` }} // Dynamically set width
          ></div>
        </div>
      </div>
    );
  }