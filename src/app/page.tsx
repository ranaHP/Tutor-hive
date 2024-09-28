'use client'
import Illustration from "./components/Illustration";
import TopNavBar from "./components/TopNavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[4.5px] pt-[4.5px]">
      {/* TOP BAR */}
      <TopNavBar />
      <div className=" w-full flex flex-1 relative">
        {/* BackGround Illustration */}
        <Illustration/>
        {/* CONTENT */}
        <div className="w-full h-full flex flex-1 flex-grow bg-white">
        </div>
      </div>
    </main>
  );
}
