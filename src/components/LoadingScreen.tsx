import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      {/* Circuit background */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      
      {/* Glowing orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/20 via-secondary/10 to-transparent"
      />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <span className="font-orbitron font-bold text-3xl text-background">
            AG
          </span>
        </div>
      </motion.div>

      {/* Brand name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 font-orbitron text-3xl font-bold mb-2"
      >
        <span className="text-foreground">Abhishek</span>
        <span className="text-primary"> Gupta</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 text-sm font-inter text-muted-foreground mb-12"
      >
        Engineering Motion. Automating Tomorrow.
      </motion.p>

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 200, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10"
      >
        <div className="w-[200px] h-1 bg-card rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-xs font-inter text-muted-foreground mt-4">
          Initializing systems... {progress}%
        </p>
      </motion.div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
