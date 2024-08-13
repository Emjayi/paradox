import Image from "next/image";
import Three from './script.jsx';

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
        {/* <h1 className="text-4xl text-zinc-300">To reach the <span className="linear-wipe-fir">light</span>, first unravel the riddles of the <span className="text-zinc-500">shadows</span></h1>
        <h2>[ PARADOX ]</h2> */}
        <h1 className="text-6xl">Khatoon</h1>
      </div>
      <Three />
    </main>
  );
}
