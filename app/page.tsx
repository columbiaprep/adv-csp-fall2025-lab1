import Image from "next/image";
import ShinyButton from "./components/sample-component";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
              <ShinyButton />
              <h1 className="bg-sky-500 text-green-200 border-red-500 border-5">Hey</h1>

    </div>
  );
}
