"use client"


export default function About(){
    return(
        <div id="about" className="flex flex-col border-2 border-blue-400 z-0">
        <div className="flex flex-col items-center font-mono">
          <p className=" text-4xl text-white font-semibold pt-1">About Me</p>
          <p className=" text-xl text-white text-center font-medium py-2">
            I am from India.I am currently pursuing B.Tech in Computer Science and Engineering. I am currently learning web development and ML. I like to code and play games.
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <p className=" text-2xl text-white font-mono py-2">My Skills</p>
          <div className="flex flex-col xl:flex-row border-2 border-red-500 mt-2 xl:space-x-4 space-y-4 xl:space-y-0">
            <div className="flex flex-col">
              <p className="text-xl text-white font-mono text-center pb-2">Programming Languages</p>
              <div className="grid grid-cols-3 md:grid-cols-4 border-2 border-yellow-400 gap-x-12 gap-y-8" >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width="50" height="50"/>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl text-white font-mono text-center pb-2">Frameworks, Libraries  & Technologies</p>
              <div className="grid grid-cols-3 lg:grid-cols-8 border-2 border-green-400 gap-x-12 gap-y-8 ">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" width="50" height="50"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" width="50" height="50" />        
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"  width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" width="50" height="50" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" width="50" height="50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}