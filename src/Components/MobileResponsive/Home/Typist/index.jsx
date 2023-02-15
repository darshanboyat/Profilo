import React from 'react'
import ReactTypingEffect from "react-typing-effect";

const Index = () => {
    return (
        <div className="flex justify-center items-center h-full py-20 text-center">
            <ReactTypingEffect
                speed={200}
                typingDelay={30}
                eraseSpeed={30}
                eraseDelay={30}
                text={["Software-Developer", "React.JS-Developer", "MERN-Stack..."]}
                style={{ fontSize: 30, fontWeight: 'bold' }}
            />
        </div>
    )
}

export default Index