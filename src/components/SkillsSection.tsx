import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Cpu, Code, Wifi } from 'lucide-react';

const skillCategories = [
  {
    title: 'Robotics',
    icon: Bot,
    color: 'primary',
    skills: ['Autonomous Mobile Robots', 'Sensor Integration', 'Robot Navigation', 'Motor Control'],
  },
  {
    title: 'Embedded Systems',
    icon: Cpu,
    color: 'secondary',
    skills: ['Arduino', 'ESP32', 'Microcontrollers', 'Basic Electronics'],
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'accent',
    skills: ['Python', 'C/C++', 'Embedded Logic', 'Data Processing'],
  },
  {
    title: 'Automation',
    icon: Wifi,
    color: 'primary',
    skills: ['IoT Systems', 'Smart Devices', 'Control Systems'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent/10 via-transparent to-transparent" />
      
      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-panel rounded-full text-sm font-inter text-primary mb-6">
            Technical Expertise
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Skills &</span>{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building the next generation of intelligent systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="h-full p-6 glass-panel rounded-2xl border-glow hover:scale-[1.02] transition-transform duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  category.color === 'primary' ? 'bg-primary/20' :
                  category.color === 'secondary' ? 'bg-secondary/20' :
                  'bg-accent/20'
                }`}>
                  <category.icon className={`w-7 h-7 ${
                    category.color === 'primary' ? 'text-primary' :
                    category.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>

                {/* Title */}
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  {category.title}
                </h3>

                {/* Skills list */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3 
                      }}
                      className="flex items-center gap-3 text-muted-foreground font-inter text-sm"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        category.color === 'primary' ? 'bg-primary' :
                        category.color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                      }`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity ${
                  category.color === 'primary' ? 'bg-gradient-to-bl from-primary/10' :
                  category.color === 'secondary' ? 'bg-gradient-to-bl from-secondary/10' :
                  'bg-gradient-to-bl from-accent/10'
                } to-transparent rounded-tr-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive 3D Skill Sphere placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="max-w-3xl mx-auto p-8 glass-panel rounded-2xl text-center">
            <div className="relative h-48 flex items-center justify-center">
              {/* Animated orbit rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-40 h-40 rounded-full border border-dashed border-primary/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute w-56 h-56 rounded-full border border-dashed border-secondary/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-72 h-72 rounded-full border border-dashed border-accent/20"
              />
              
              {/* Center node */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
              >
                <Bot className="w-8 h-8 text-background" />
              </motion.div>

              {/* Orbiting nodes */}
              {skillCategories.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 10 + i * 5, 
                    repeat: Infinity, 
                    ease: 'linear',
                    delay: i * 0.5
                  }}
                  className="absolute"
                  style={{
                    width: `${120 + i * 40}px`,
                    height: `${120 + i * 40}px`,
                  }}
                >
                  <div 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                      i === 0 ? 'bg-primary' :
                      i === 1 ? 'bg-secondary' :
                      i === 2 ? 'bg-accent' :
                      'bg-primary'
                    }`}
                    style={{ boxShadow: `0 0 15px ${
                      i === 0 ? 'hsl(187 100% 50% / 0.5)' :
                      i === 1 ? 'hsl(258 100% 65% / 0.5)' :
                      'hsl(156 100% 50% / 0.5)'
                    }`}}
                  />
                </motion.div>
              ))}
            </div>
            
            <p className="text-muted-foreground font-inter text-sm mt-6">
              Interconnected skills forming a complete robotics ecosystem
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
