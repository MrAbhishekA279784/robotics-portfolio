import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const contactMethods = [
  {
    name: "Email",
    icon: Mail,
    value: "abhishekgupta8arollno29@gmail.com",
    href: "mailto:abhishekgupta8arollno29@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    value: "/in/abhishek-gupta-056b37379",
    href: "https://www.linkedin.com/in/abhishek-gupta-056b37379/",
  },
  {
    name: "GitHub",
    icon: Github,
    value: "@abhishekgupta8",
    href: "https://github.com/abhishekgupta8",
  },
];

const ContactSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      alert("Message failed. Try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div
        ref={ref}
        className="relative z-10 container mx-auto px-6 max-w-6xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl font-bold mb-4">
            Send a <span className="text-primary">Message</span>
          </h2>
          <p className="text-muted-foreground">
            Have an idea or project? Let’s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass-panel rounded-xl hover:border-primary/40 transition"
              >
                <method.icon className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-orbitron font-semibold">
                    {method.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-card rounded-lg border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
            />

            <input
              type="email"
              placeholder="your@email.com"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-card rounded-lg border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
            />

            <textarea
              placeholder="Your message..."
              rows={4}
              required
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-card rounded-lg border border-border text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-orbitron font-semibold tracking-wider btn-glow flex items-center justify-center gap-3"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent
                </>
              ) : isLoading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
