"use client";
export default function Contact(){
    return(
        <div id="contact" className="flex flex-col border-2 border-red-400 mt-6 items-center bg-gray-700 bg-opacity-80">
            <p className="text-4xl font-mono font-semibold  text-white">Contact Me</p>
            <div className="flex w-full flex-col md:flex-row md:justify-around items-center ">
                <div  className="flex flex-col">
                    <p className="">Connect with me on:</p>
                    <a className="" href="">LinkedIn</a>
                    <a className="" href="">GitHub</a>
                    <a className="" href="">Twitter</a>
                </div>
                <div>
                    <form action="">
                        <div >
                            <label htmlFor=""></label>
                            <input type="text" name="" id="" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            <input type="text" name="" id="" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            <input type="text" name="" id="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}