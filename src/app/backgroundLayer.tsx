import Image from "next/image"
import background from "../images/background.png"
import sign_bg from "../images/sign_bg.png"
import og_long_tan from "../images/og_long_tan.png"
import tan_sq from "../images/tan_sq.png"

export default function BackgroundLayer () {
    return (

    <div className="absolute top-0 left-0 w-full h-full mvin-h-screen">
        <div className="absolute top-0 left-0 w-full h-full mvin-h-screen">
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
                src={sign_bg}
                alt="sign background"
                priority
            />
        </div>
        <div className="absolute bottom-2 -mb-2 left-0 w-full h-[calc(67%-4rem)] flex justify-center items-center opacity-100 blur-lg">
            <Image 
                className="-z-1 w-[350px] sm:w-[430px]"
                src={tan_sq}
                alt="tan background"
                priority
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Image 
                className="-z-10 sm:object-contain"
                src={og_long_tan}
                alt="tan background"
                priority
            />
        </div>
        </div>
    </div>
    ) 
        

}
