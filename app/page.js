//import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <main className="bg-purple-100">
      
    <section className="grid grid-cols-2 h-[50vh]">
      <div className="bg-green-50 flex flex-col items-center justify-center gap-4">
       <p className="text-3xl font-bold">The best URL Shortner in the Market</p> 
       <p>We are the most straightforward URL Shortner in the world</p>
       <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>

        </div>
</div>
<div className="flex justify-start relative">
  <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true}/>
</div>

    </section>
    </main>
  );
}
