import Image from "next/image"
import background from "../images/background.png"
import long_sign from "../images/poster_long.png"
// import sign_bg from "../images/sign_bg.png"
// import og_long_tan from "../images/og_long_tan.png"
// import tan_sq from "../images/tan_sq.png"

export default function BackgroundLayer () {
    return (
        <div className="absolute top-0 left-0 w-full h-full mvin-h-screen">

        <div className="absolute top-0 left-0 w-full h-full min-h-screen">
          <Image 
              className="-z-10"
              src={background}
              alt="background image"
              layout="fill"
              objectFit="cover"
              priority
            />
       <div className="absolute top-10 sm:top-0 left-0 w-[430px] h-[825px] sm:w-full sm:h-full flex justify-center items-center">
              <Image 
                className="z-2 object-fill sm:object-contain"
                src={long_sign}
                fill
                alt="sign background"
                priority
              />
          </div>

        </div>
    </div>
   
    ) 

}



{/* <div className="absolute top-0 left-0 w-full h-full min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full min-h-screen">
        <Image 
            className="-z-10 object-cover"
            src={background}
            alt="background image"
            layout="fill"
            priority
            />
        <div className="absolute top-0 sm:top-0 left-0 xs:w-[105vw] w-[100vw] h-[92vh] sm:w-full sm:h-full flex justify-center items-center">
            <Image 
                className="z-2 object-contain"
                src={sign_bg}
                fill
                alt="sign background"
                priority
            />
        </div>
        <div className="absolute bottom-2 -mb-2 sm:-mb-20 left-0 w-full h-[calc(67%-4rem)] flex justify-center items-center opacity-100 blur-lg">
            <Image 
                className="-z-1 w-[85vw] sm:w-[25vw] md:w-[30vw]"
                src={tan_sq}
                alt="tan background"
                priority
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Image 
                className="-z-10 w-[85vw] sm:w-[25vw] md:w-[35vw]"
                src={og_long_tan}
                alt="tan background"
                priority
            />
        </div>
        </div>
    </div> */}