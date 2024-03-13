"use client";

export default function Projects(){
    return(
        <div id="projects" className="flex flex-col border-2 mt-8 border-blue-400 items-center">
            <p className="text-4xl font-mono font-semibold text-white">My Projects</p>
            <div className="grid grid-cols-4 gap-x-4 mx-4 mt-6">
                <div className=" flex flex-col bg-white rounded-md p-2 items-center shadow-md shadow-gray-700">
                    <img  className="rounded-md" src="./eventforge.png" alt="" />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/EventForge" className="">GitHub Link</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://event-forge.vercel.app/" className="">Live Link</a>
                </div>
                <div className=" flex flex-col bg-white rounded-md p-2 items-center shadow-md shadow-gray-700">
                    <img  className="" src="./eventforge.png" alt="" />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/EventForge" className="">GitHub Link</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://event-forge.vercel.app/" className="">Live Link</a>
                </div>
                <div className=" flex flex-col bg-white rounded-md p-2 items-center shadow-md shadow-gray-700">
                    <img  className="" src="./eventforge.png" alt="" />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/EventForge" className="">GitHub Link</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://event-forge.vercel.app/" className="">Live Link</a>
                </div>
                <div className=" flex flex-col bg-white rounded-md p-2 items-center shadow-md shadow-gray-700">
                    <img  className="" src="./eventforge.png" alt="" />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/EventForge" className="">GitHub Link</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://event-forge.vercel.app/" className="">Live Link</a>
                </div>
            </div>
        </div>
    );
}