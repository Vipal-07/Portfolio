import React from 'react'

export default function SkillPage() {
    return (
        <div className="flex flex-col md:flex-row bg-black items-center justify-center min-h-screen px-4 py-8">
            {/* Left Side (Skills) */}
            <div className="flex flex-col gap-2 mt-3 items-start justify-center w-full md:w-1/2 p-4 md:p-10">
                <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
                    <span className="text-blue-500">Technical Expertise</span>
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <div className="rounded-lg border-2 border-b-blue-300 bg-gray-700 text-white p-4 md:p-6 shadow-lg">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-400">Frontend</h2>
                        <div className="flex flex-row flex-wrap gap-2 text-base md:text-lg">
                            <span>HTML,</span>
                            <span>CSS,</span>
                            <span>React,</span>
                            <span>Tailwind</span>
                        </div>
                    </div>
                    <div className="rounded-lg border-2 border-b-blue-300 bg-gray-700 text-white p-4 md:p-6 shadow-lg">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-400">Backend</h2>
                        <div className="flex flex-row flex-wrap gap-2 text-base md:text-lg">
                            <span>Node.js,</span>
                            <span>WebSockets,</span>
                            <span>Express</span>
                        </div>
                    </div>
                    <div className="rounded-lg border-2 border-b-blue-300 bg-gray-700 text-white p-4 md:p-6 shadow-lg">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-400">Database</h2>
                        <div className="flex flex-row flex-wrap gap-2 text-base md:text-lg">
                            <span>MongoDB,</span>
                            <span>Redis</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side (Image) */}
            <div className="relative flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
                {/* Blue circular shadow around the image */}
                <div className="absolute w-40 h-40 md:w-80 md:h-80 rounded-full bg-blue-500 blur-2xl opacity-60 z-0"></div>
                <div className="relative rounded-full border-4 border-green-600 p-1 shadow-lg shadow-green-500/50 z-10">
                    <img
                        className="w-32 h-32 md:w-64 md:h-64 object-cover rounded-full"
                        src="photo.jpeg"
                        alt="Skill Illustration"
                    />
                </div>
            </div>
        </div>
    )
}