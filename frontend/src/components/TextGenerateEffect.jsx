import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "../lib/utils.js";

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                       filter = true,
                                       duration = 0.5,
                                   }) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.2),
            }
        );
    }, [animate, filter, duration]);

    return (
        <div className="pt-20 w-full"> {/* Add top padding to clear the navbar */}
            <div className={cn("font-bold", className)}>
                <div className="my-4">
                    <motion.div ref={scope}>
                        {wordsArray.map((word, idx) => (
                            <motion.span
                                key={word + idx}
                                className={`${
                                    idx < 5
                                        ? "text-amber-400"
                                        : idx >= 5
                                            ? "text-purple-400"
                                            : "dark:text-white text-black"
                                } opacity-0 inline-block`}
                                style={{
                                    filter: filter ? "blur(10px)" : "none",
                                }}
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
