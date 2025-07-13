import React, { useState, useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'

export default function HomePage() {
   const fullText = "Full Stack Web Developer"
    const happyEmoji = "😊"
    const [displayText, setDisplayText] = useState(fullText)
    const [emojiVisible, setEmojiVisible] = useState(false)
    const [isDeleting, setIsDeleting] = useState(true)

    useEffect(() => {
        let timeout
        if (isDeleting && !emojiVisible && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(displayText.slice(0, -1))
            }, 120)
        } else if (isDeleting && !emojiVisible && displayText.length === 0) {
            setEmojiVisible(true)
        } else if (isDeleting && emojiVisible) {
            timeout = setTimeout(() => {
                setEmojiVisible(false)
                setIsDeleting(false)
            }, 1200)
        } else if (!isDeleting && !emojiVisible && displayText.length < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1))
            }, 120)
        } else if (!isDeleting && !emojiVisible && displayText.length === fullText.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true)
            }, 1200)
        }
        return () => clearTimeout(timeout)
    }, [displayText, emojiVisible, isDeleting, fullText])

    return (
        <div className="flex flex-col md:flex-row bg-black items-center justify-center min-h-screen px-4 py-8">
            {/* Left Side (Text) */}
            <div className="flex flex-col gap-2 items-start justify-center w-full md:w-1/2 p-4 md:p-10">
                <p className="text-white text-lg md:text-xl">Hello I'm</p>
                <div className="text-2xl md:text-4xl font-bold text-blue-500 mb-4">
                    <span className="text-blue-500">Vikas Maurya</span>
                </div>
                <div className="text-gray-300 text-base md:text-2xl mb-6 min-h-[2.5rem] flex items-center">
                    <span>
                        And I'm&nbsp;
                        <span className="font-semibold text-blue-400">
                            {!emojiVisible && displayText}
                            {emojiVisible && <span className="ml-2 animate-bounce">{happyEmoji}</span>}
                        </span>
                    </span>
                </div>
                <div className="text-gray-300 text-lg md:text-md mb-4">
                    <p>Hi, I'm a full-stack developer with a passion for creating dynamic and responsive web applications</p>
                    <br></br>
                     <p> I love building clean, responsive, and user-friendly web applications that solve real-world problems.</p>
                     <br></br>
                      <p>  I'm also proficient with version control (Git), deployment tools, and RESTful APIs</p>
                </div>
                {/* <button className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer flex items-center gap-2 text-base md:text-lg">
                    <FaDownload className="mr-2" />
                    Download CV
                </button> */}
            </div>
            {/* Right Side (Image) */}
            <div className="relative flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
                {/* Blue circular shadow around the image */}
                <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full bg-blue-500 blur-2xl opacity-60 z-0"></div>
                <div className="relative rounded-full border-4 border-green-600 p-1 shadow-lg shadow-green-500/50 z-10">
                    <img
                        className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full"
                        src="photo.jpeg"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    )
}