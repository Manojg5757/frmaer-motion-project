import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <motion.h1
        className="bg-slate-300 h-[100px] w-[100px] absolute z-50"
        initial={{ rotate: 0 }}
        animate={{ rotate: [90, 180, 270, 360],scale:[0.4,0.3,0.2,0.1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        
      </motion.h1>
      <motion.h1
        className="bg-blue-300 h-[100px] w-[100px] absolute z-40"
        initial={{ rotate: 30 }}
        animate={{ rotate: [90, 180, 270, 360],scale:[0.7,0.6,0.5,0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        
      </motion.h1>
      <motion.h1
        className="bg-green-300 h-[100px] w-[100px] absolute z-30"
        initial={{ rotate: 60 }}
        animate={{ rotate: [90, 180, 270, 360],scale:[1,0.9,0.8,0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        
      </motion.h1>
      <motion.h1
        className="bg-yellow-300 h-[100px] w-[100px] absolute z-20"
        initial={{ rotate: 90,scale:0 }}
        animate={{ rotate: [90, 180, 270, 360],scale:[1,1.1,1.2,1.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        
      </motion.h1>
    </div>
  );
};

export default App;
