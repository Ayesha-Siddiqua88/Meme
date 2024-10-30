import React from "react";

export default function Header(){
    return(
        

        <header className="flex flex-row justify-center gap-2 items-center pt-5 lg:pt-10">
            <img src="Troll face.png"  className=" w-16 h-14 lg:w-24 lg:h-20" alt="pic"/>
            <h1 className=" text-2xl font-extrabold lg:text-3xl">Meme Generator</h1>
        </header>

        
    )
}