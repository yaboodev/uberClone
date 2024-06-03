import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
    {/* <Image src='/uberbanner.jpg' width={900} height={1000}
       className="object-contain h-full w-full"/> */}
    <div className="absolute top-20 right-10">
       
    <SignIn />
    </div>
    </>
  
);
}