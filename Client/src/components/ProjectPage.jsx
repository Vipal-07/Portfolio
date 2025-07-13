import React from 'react'

const projects = [
    {
        title: "Chat Application",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "A real-time chat application using React, Node.js, Socket.io, and MongoDB. Features include group chat, private messaging, and emoji support.",
        url: "https://chat-boot-9yl6.onrender.com",
    },
    {
        title: "Visiting Platform",
        video: "https://www.w3schools.com/html/movie.mp4",
        description: "A visiting platform with user profiles, appointment scheduling. Built with view, Express, and MongoDB. Includes user authentication and real-time notifications on gmail. Website was not responsive. (This website is made during my learning phase).",
        url: "https://projectgorakhpur.onrender.com",
    },
    {
        title: "Portfolio Website",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "A personal portfolio website to showcase my skills and projects. Built with React and Tailwind CSS, featuring responsive design and smooth animations.",
        url: "https://devfolio-mkkw.onrender.com",
    },
    // Add more projects as needed
]

export default function ProjectPage() {
    return (
        <div className="flex flex-col bg-black min-h-screen mt-10 items-center justify-center py-10 px-2 md:px-6">
            <div className="w-full flex flex-col items-center mb-8">
                <div className="text-3xl font-bold text-blue-500 mb-4">
                    <span className="text-blue-500">Projects</span>
                </div>
            </div>
            <div className="w-full flex flex-col gap-16 items-center">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`
                            flex flex-col md:flex-row items-center justify-center w-full max-w-4xl
                            ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                        `}
                    >
                        {/* Desktop video with blue shadow */}
                        <div className="relative flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
                            <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-blue-500 blur-2xl opacity-60 z-0"></div>
                            <div className="relative rounded-2xl border-4 border-green-600 p-1 sm:p-2 shadow-lg shadow-green-500/50 z-10 bg-gray-900">
                                <video
                                    className="w-52 h-32 sm:w-72 sm:h-40 md:w-80 md:h-48 object-cover rounded-2xl"
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="https://dummyimage.com/320x192/222/fff&text=Project+Video"
                                />
                            </div>
                        </div>
                        {/* Project details */}
                        <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-2 sm:p-4 md:p-6">
                            <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">{project.title}</div>
                            <div className="text-gray-300 text-sm sm:text-md mb-2">{project.description}</div>
                            <button className="mt-2 sm:mt-4 bg-blue-500 text-white py-2 px-4 rounded text-sm sm:text-base">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white-400"
                                >
                                    View Project
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}