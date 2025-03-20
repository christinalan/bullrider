import localFont from "next/font/local";

const bullriderFont = localFont({
  src: "../../fonts/reward.ttf",
  display: "swap"
})


export default function Board() {

    //dummy leadership data
    const leaderboardData = [
        { name: "Alice", daysHeld: 120 },
        { name: "Bob", daysHeld: 98 },
        { name: "Charlie", daysHeld: 85 },
        { name: "Dave", daysHeld: 74 },
        { name: "Eve", daysHeld: 60 },
      ];

    return (
        <div className="w-[334px] rounded-lg border-2 border-[#812C27] flex flex-col">
            {/* Leadership board top */}
            <div className="flex flex-col">
            <div className={`${bullriderFont.className} flex text-center text-2xl bg-[#812C27] text-[#D7BA94]`}>
            <h1 className="w-1/2 py-1">WHO</h1>
            <h1 className="w-1/2 py-1">DAYS HELD</h1>
            </div>
            <div className="w-[330px] h-[2px] bg-[#812C27]"></div>
            </div>
            {/* Rank rows */}
               {/* Leaderboard Rows */}
            <div className="flex flex-col justify-center py-2 gap-1">
                {leaderboardData.map((entry, index) => (
                <div key={index} className="flex text-[#812C27] text-md text-center pb-1 border-b border-[#812C27] last:border-b-0">
                    <p className="w-1/6 text-left font-bold pl-4">{index + 1}</p> {/* Rank Number */}
                    <p className="w-1/3 text-left pl-2">{entry.name}</p>
                    <p className="w-1/3 text-right pr-4">{entry.daysHeld}</p>
                </div>
                ))}
            </div>
        </div>
    )
}