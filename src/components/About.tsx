"use client";


export default function About(){
    return(
      <div id="about" className="flex flex-col z-0 ">
        <div className="flex flex-col items-center font-mono">
          <p className=" text-4xl text-white font-semibold pt-1">About Me</p>
          <p className=" text-xl text-white text-center font-medium py-2">
            I am from India.I am currently pursuing B.Tech in Computer Science and Engineering. I am currently learning web development and ML. I like to code and play games.
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <p className=" text-2xl text-white font-mono mt-2">My Skills</p>
          <div className="flex flex-col xl:flex-row  xl:justify-around  w-full">
            <div className="flex flex-col items-center mt-6">
              <p className="text-xl text-white font-mono text-center pb-2">Programming Languages</p>
              <div className="grid grid-cols-3 md:grid-cols-7 xl:grid-cols-4  gap-x-10 gap-y-8" >
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width="50" height="50"/>
              </div>
            </div>

            <div className="flex flex-col items-center mt-6">
              <p className="text-xl text-white font-mono text-center pb-2">Frameworks, Libraries  & Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-8  gap-x-10 gap-y-8 ">
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" width="50" height="50"  />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" width="50" height="50" />        
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"  width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" width="50" height="50" />
                <img className="bg-white p-1 rounded-md shadow-md shadow-gray-700" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" width="50" height="50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}