"use client"
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
    return ( 
        <Typewriter 
            options={{
              strings: [
                "Data:",
                "Technology:",
                "Analytics:"
              ],
              autoStart: true,
              loop: true,
              delay: 60,
            }}/>
     );
}
 
export default TypewriterComponent;