import React from "react";
import {saveAs} from 'file-saver'

export default function Meme(){

    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"

    })

    const [allMemes,setAllMemes]=React.useState([])
    

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url= allMemes[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))  
    }

    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }


    function downloadImage(){
        saveAs('image_url', 'image.jpg') // Put your image URL here.
    }
   

    // function downloadImage(){
    //     saveAs(`${setMeme.randomImage}`, 'image.jpg') // Put your image URL here.
    //     }
    


    return(
        <main className="lg:pt-12 pt-4 flex flex-col justify-between gap-14">
            <div className=" flex flex-col justify-between gap-6 lg:flex-row lg:justify-center">
               <input 
               type="text" 
               placeholder="Top text" 
               className="h-9 border-black border-2 hover:bg-slate-200 rounded-lg pl-2 lg:w-80 lg:h-12 lg:text-lg"
               name="topText"
               value={meme.topText}
               onChange={handleChange}
               />
               <input 
               type="text" 
               placeholder="Bottom text" 
               className="h-9 border-black border-2 hover:bg-slate-200 rounded-lg pl-2 lg:w-80 lg:h-12 lg:text-lg"
               name="bottomText"
               value={meme.bottomText}
               onChange={handleChange}
               />
            </div>

            <div className="flex flex-col items-center">
            <button className="button-bg h-9 w-60 rounded-full text-md font-bold hover:border-2 hover: border-rose-950 lg:w-96 lg:h-12 lg:text-xl" onClick={getMemeImage}>Get a new meme image 👾</button>
            </div>

            <div className="lg:flex lg:flex-col lg:items-center lg:pt-5">
                <div className="relative">
                <img src={meme.randomImage}  className=" rounded-xl "/>
                
                <div className="flex flex-col justify-between items-center">
                <h2 className=" absolute top-2 text-md font-extrabold lg:text-3xl ">{meme.topText}</h2>
                <h2 className="absolute bottom-2 text-lg font-extrabold lg:text-3xl">{meme.bottomText}</h2>
                </div>
                </div>
            </div>

        <style jsx>{`
              body {
          margin: 0;
          padding: 0;
        }
        .button-bg {
          background: linear-gradient(90deg, #02AABD, #FCEE21);
          background-size: 200% 200%;
          animation: gradient-flow 15s ease infinite;
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
            `}</style> 

        </main>
    )
}