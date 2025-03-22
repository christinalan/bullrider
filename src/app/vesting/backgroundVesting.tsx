import Image from "next/image"
import background from "../../images/background.png"
import long_sign from "../../images/poster_long.png"


export default function BackgroundVesting () {
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
