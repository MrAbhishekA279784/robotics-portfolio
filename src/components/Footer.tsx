import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="font-orbitron font-bold text-lg text-background">AG</span>
            </div>
            <div>
              <span className="font-orbitron font-bold text-lg">
                <span className="text-foreground">Abhishek</span>
                <span className="text-primary"> Gupta</span>
              </span>
              <p className="text-xs text-muted-foreground font-inter">
                Engineering Motion. Automating Tomorrow.
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Lab', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-inter text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm font-inter text-muted-foreground"
          >
            © 2026 Abhishek Gupta. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
