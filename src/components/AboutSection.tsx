import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Lightbulb, Target, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: 'Robotics Focused',
    description: 'Building intelligent machines that interact with the physical world',
    color: 'primary',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'Constantly exploring new technologies and methodologies',
    color: 'secondary',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Tackling complex challenges with elegant solutions',
    color: 'accent',
  },
  {
    icon: Rocket,
    title: 'Future Ready',
    description: 'Preparing for the next wave of automation technology',
    color: 'primary',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/10 via-transparent to-transparent" />
      
      <div ref={ref} className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - 3D Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-primary/30"
              />
              
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-secondary/30"
              />
              
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-accent/30"
              />
              
              {/* Center hologram effect */}
              <div className="absolute inset-24 glass-panel rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative z-10"
                >
                  <Bot className="w-16 h-16 text-primary" />
                </motion.div>
                {/* Scan line */}
                <motion.div
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
                />
              </div>
              
              {/* Floating tech icons */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-10 h-10 glass-panel rounded-lg flex items-center justify-center"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? '-5%' : 'auto',
                    right: i % 2 === 1 ? '-5%' : 'auto',
                  }}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    i === 0 ? 'bg-primary' :
                    i === 1 ? 'bg-secondary' :
                    i === 2 ? 'bg-accent' :
                    'bg-primary'
                  }`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 glass-panel rounded-full text-sm font-inter text-primary mb-6">
              About Me
            </span>
            
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Building the</span>
              <br />
              <span className="gradient-text">Future of Automation</span>
            </h2>
            
            <p className="text-muted-foreground font-inter text-lg leading-relaxed mb-8">
              A robotics and automation enthusiast focused on building intelligent systems 
              using embedded electronics, sensors, and AI-driven control. Passionate about 
              pushing the boundaries of what machines can achieve through innovative 
              engineering and cutting-edge technology.
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 glass-panel rounded-xl group hover:border-primary/30 transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    item.color === 'primary' ? 'bg-primary/20' :
                    item.color === 'secondary' ? 'bg-secondary/20' :
                    'bg-accent/20'
                  }`}>
                    <item.icon className={`w-5 h-5 ${
                      item.color === 'primary' ? 'text-primary' :
                      item.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  <h3 className="font-orbitron font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
