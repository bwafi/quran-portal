import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div layout className="overflow-hidden h-auto shrink">
        {resolvedTheme === "dark" ? (
          <motion.button
            key={"moon"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            onClick={() => setTheme("light")}
            className="flex items-center">
            <BsMoonStars className={`text-[28px]`} />
          </motion.button>
        ) : (
          <motion.button
            key={"sun"}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            onClick={() => setTheme("dark")}
            className="flex items-center">
            <BsSun className={`text-[28px]`} />
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default DarkMode;
