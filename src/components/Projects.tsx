"use client";

export default function Projects(){
    return(
        <div id="projects" className="flex flex-col pt-16 items-center">
            <p className="text-4xl font-mono font-semibold text-white shadow-black [text-shadow:_1px_1px_2px_var(--tw-shadow-color)]">My Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-4 gap-y-8 mx-10 lg:mx-4 mt-6 ">

                <div className=" flex flex-col justify-between bg-gray-600 rounded-md p-2 items-center shadow-md shadow-gray-700 font-mono text-white">
                    <p className=" text-lg font-semibold p-1">EventForge</p>
                    <p className=" text-sm font-medium p-1 text-center">A web application in which users can create and save notes and events, and also has a pomodoro timer to boost user’s productivity.</p>
                    <div className="flex w-full justify-around m-1 border-2 rounded-full">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/EventForge" className=" font-bold hover:underline hover:text-sm">GitHub Link</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://event-forge.vercel.app/" className="font-bold hover:underline hover:text-sm">Live Link</a>
                    </div>
                </div>
                <div className=" flex flex-col justify-between bg-gray-600 rounded-md p-2 items-center shadow-md shadow-gray-700 font-mono text-white">
                    <p className=" text-lg font-semibold p-1">Mortality-Prediction-Model</p>
                    <p className=" text-sm font-medium p-1 text-center"> A ML model that predicts the death probability of an ICU patient, based on the data given. It achieved AUC score of &asymp; 0.9116 based on external validation</p>
                    <div className="flex w-full justify-around m-1 border-2 rounded-full">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/Mortality-Prediction-Model" className=" font-bold hover:underline hover:text-sm">GitHub Link</a>
                        {/* <a target="_blank" rel="noopener noreferrer" href="" className="font-bold hover:underline hover:text-sm">Live Link</a> */}
                    </div>
                </div>
                <div className=" flex flex-col justify-between bg-gray-600 rounded-md p-2 items-center shadow-md shadow-gray-700 font-mono text-white">
                    <p className=" text-lg font-semibold p-1">Rock-Paper-Scissors Game</p>
                    <p className=" text-sm font-medium p-1 text-center">A simple Rock Paper Scissors game made using tkinter and python</p>
                    <div className="flex w-full justify-around m-1 border-2 rounded-full">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/Rock-Paper-Scissors-Game" className=" font-bold hover:underline hover:text-sm">GitHub Link</a>
                        {/* <a target="_blank" rel="noopener noreferrer" href="" className="font-bold hover:underline hover:text-sm">Live Link</a> */}
                    </div>
                </div>
                <div className=" flex flex-col justify-between bg-gray-600 rounded-md p-2 items-center shadow-md shadow-gray-700 font-mono text-white">
                    <p className=" text-lg font-semibold p-1">Shop-Ekart</p>
                    <p className=" text-sm font-medium p-1 text-center">A shopping mobile app created using Java, XML and Firebase</p>
                    <div className="flex w-full justify-around m-1 border-2 rounded-full">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark/shopping-app" className=" font-bold hover:underline hover:text-sm">GitHub Link</a>
                        {/* <a target="_blank" rel="noopener noreferrer" href="" className="font-bold hover:underline hover:text-sm">Live Link</a> */}
                    </div>
                </div>

            </div>
        </div>
    );
}