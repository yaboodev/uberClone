import { UserButton } from "@clerk/nextjs";
import 'tailwindcss/tailwind.css'
import Image from "next/image";
import SearchSection from "@/components/home/SearchSection";
import GooglemapSection from "@/components/home/GooglemapSection"


export default function Home() {
  return (
   <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
    <div >
      <SearchSection />

    </div>

    <div className="col-span-2">
      <GooglemapSection />
      </div>
   </div>
  );
}
