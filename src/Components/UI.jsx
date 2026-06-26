import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import "./SoveniourBook.css";
const pictures = [
   "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "72", "74", "76", "77", "79","Activity","PROMPTENGINNERING","SENSORSENSING","VisionExpert","Designers","Groupphotos","80"
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [autoplay, setautoplay] = useState(false);
  useEffect(() => {
    const audio = new Audio("/stepcone/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  const handleClick = () => {
    let index = 0;
    const audio = new Audio(song);
  
    const clickNextButton = () => {
      if (index < pages.length) {
        setPage(index);
        index++;
        audio.play(); // Play sound on each page flip
        setTimeout(clickNextButton, 3000);
      }
    };
  
    audio.play().catch(error => {
      console.log("Autoplay blocked, waiting for user interaction:", error);
    });
  
    clickNextButton(); // Start flipping pages automatically
  };
  
  
  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              className="w-25 pointer-events-auto mt-10 ml-10"
              src="/stepcone/images/STEPCONE.png"
            />
          </div>
          <div className="">
            <button
              className="play-btn btn px-3 py-2 rounded-6 bg-light mx-3 text-black"
              onClick={handleClick}
            >
              PLAY
            </button>{""}
          </div>
        </div>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-2 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-2 py-1 rounded-full  text-sm uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h2 className="shrink-0 text-white text-12xl font-bold">
              STEPCONE
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              2025
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Unleash
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              the
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">Unreal</h2>
          </div>
          {/* <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Wawa Sensei
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              STEPCONE
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              2025
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div> */}
        </div>
      </div>
    </>
  );
};