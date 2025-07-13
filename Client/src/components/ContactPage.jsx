import React from "react";
import { FaInstagram, FaLinkedin, FaComments, FaEnvelope, FaGithub } from "react-icons/fa";

const contacts = [
    {
        name: "Instagram",
        username: "@maury_avikas08",
        url: "https://www.instagram.com/maury_avikas08?igsh=ZjlpdzUxMnB5a283",
        icon: <FaInstagram className="text-pink-500 w-10 h-10 sm:w-12 sm:h-12" />,
        img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
    },
    {
        name: "LinkedIn",
        username: "Vikas Maurya",
        url: "https://www.linkedin.com/in/vikas-maurya-11913328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: <FaLinkedin className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12" />,
        img: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
    },
    {
        name: "Chat_Boot",
        username: "vikas_dev",
        url: "https://chat-boot-9yl6.onrender.com",
        icon: <FaComments className="text-green-400 w-10 h-10 sm:w-12 sm:h-12" />,
        img: "https://pngate.com/wp-content/uploads/2025/06/signal-icon-main-logo-symbol-blue-chat-bubble-design-1.png"
    },
    {
        name: "Gmail",
        username: "vm6431135@gmail.com",
        url: "mailto:vm6431135@gmail.com",
        icon: <FaEnvelope className="text-red-500 w-10 h-10 sm:w-12 sm:h-12" />,
        img: "https://cdn-icons-png.flaticon.com/512/732/732200.png"
    },
     {
        name: "GitHub",
        username: "Vipal-07",
        url: "https://github.com/Vipal-07",
        icon: <FaGithub className="text-white w-10 h-10 sm:w-12 sm:h-12" />,
        img: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    }
];

export default function ContactPage() {
    return (
        <div className="flex flex-col bg-black min-h-screen items-center mt-10 justify-center py-10 px-2 sm:px-4">
            <div className="w-full flex flex-col items-center ">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-4">
                    <span className="text-blue-500">Let's Connect</span>
                </div>
            </div>
            <div className="w-full flex flex-col gap-12 sm:gap-16 items-center">
                {contacts.map((contact, idx) => (
                    <React.Fragment key={idx}>
                        <div
                            className={`
                                flex flex-col md:flex-row items-center justify-center w-full max-w-md sm:max-w-2xl md:max-w-3xl
                                ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                            `}
                        >
                            {/* Social Media Image with blue shadow */}
                            <div className="relative flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
                                <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-blue-500 blur-2xl opacity-60 z-0"></div>
                                <div className="relative rounded-full border-4 border-green-600 p-1 sm:p-2 shadow-lg shadow-green-500/50 z-10 bg-gray-900 flex items-center justify-center">
                                    <img
                                        src={contact.img}
                                        alt={contact.name}
                                        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                                    />
                                </div>
                            </div>
                            {/* Contact details */}
                            <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-2 sm:p-6">
                                <div className="flex items-center gap-3 sm:gap-4 mb-2">
                                    {contact.icon}
                                    <span className="text-xl sm:text-2xl font-bold text-blue-400">{contact.name}</span>
                                </div>
                                <div className="text-gray-300 text-base sm:text-xl mb-2">
                                    Username: <span className="font-bold">{contact.username}</span>
                                </div>
                                <a
                                    href={contact.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline break-all"
                                >
                                    Visit {contact.name}
                                </a>
                            </div>
                        </div>
                        {/* Thin white line shadow after each social media except last */}
                        {idx !== contacts.length - 1 && (
                            <div className="block md:hidden w-full max-w-md my-2">
                                <div className="h-[1.5px] w-full bg-white/30 shadow-[0_2px_8px_0_rgba(255,255,255,0.15)] rounded-full"></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}