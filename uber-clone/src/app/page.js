import { UserButton } from "@clerk/nextjs";
import 'tailwindcss/tailwind.css'
import Image from "next/image";


export default function Home() {
  return (
   <div>
    <UserButton />
   </div>
  );
}
