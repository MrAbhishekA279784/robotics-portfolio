import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Droplets, Radio, Code, Wifi, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Automatic Plant Watering System',
    description: 'An IoT-based smart irrigation system that monitors soil moisture levels and automatically waters plants when needed.',
    icon: Droplets,
    color: 'accent',
    tags: ['Arduino', 'IoT', 'Sensors'],
    featured: true,
  },
  {
    id: 2,
    title: 'Sensor-Based Robotics',
    description: 'Autonomous robots equipped with multiple sensors for navigation, obstacle avoidance, and environmental mapping.',
    icon: Radio,
    color: 'primary',
    tags: ['Robotics', 'Sensors', 'Navigation'],
    featured: true,
  },
  {
    id: 3,
    title: 'Python Mini Projects',
    description: 'Collection of Python scripts for data processing, automation tasks, and embedded system interfacing.',
    icon: Code,
    color: 'secondary',
    tags: ['Python', 'Automation', 'Data'],
    featured: false,
  },
  {
    id: 4,
    title: 'IoT Automation Systems',
    description: 'Smart home automation solutions connecting various devices for centralized control and monitoring.',
    icon: Wifi,
    color: 'primary',
    tags: ['ESP32', 'MQTT', 'Smart Home'],
    featured: true,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent -translate-y-1/2" />
      
      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-panel rounded-full text-sm font-inter text-primary mb-6">
            Featured Work
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Recent</span>{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
            Innovative solutions that push the boundaries of robotics and automation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className={`relative h-full p-8 glass-panel rounded-2xl overflow-hidden transition-all duration-500 ${
                hoveredId === project.id ? 'scale-[1.02]' : ''
              }`}>
                {/* Glowing border effect on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  project.color === 'primary' ? 'bg-gradient-to-br from-primary/20 to-transparent' :
                  project.color === 'secondary' ? 'bg-gradient-to-br from-secondary/20 to-transparent' :
                  'bg-gradient-to-br from-accent/20 to-transparent'
                }`} />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-inter font-medium bg-primary/20 text-primary rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={hoveredId === project.id ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                      project.color === 'primary' ? 'bg-primary/20' :
                      project.color === 'secondary' ? 'bg-secondary/20' :
                      'bg-accent/20'
                    }`}
                  >
                    <project.icon className={`w-8 h-8 ${
                      project.color === 'primary' ? 'text-primary' :
                      project.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-orbitron font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground font-inter text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-inter bg-card rounded-full text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-2 text-sm font-inter text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 text-sm font-inter text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                      Source
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                  <project.icon className="w-full h-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#lab"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-primary/30 text-foreground font-orbitron font-semibold text-sm tracking-wider hover:bg-primary/10 hover:border-primary/50 transition-all group"
          >
            Explore Portfolio Lab
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
