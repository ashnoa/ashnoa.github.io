import { motion } from 'motion/react';
import { Twitter, BookOpen, Youtube, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

function Home() {
  const links = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/ashnoa', external: true },
    { icon: BookOpen, label: 'Blog', href: 'https://ashnoa.hatenablog.com/', external: true },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@ashnoa?si=oJK3FoML3XyhQ5r1', external: true },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-5xl ring-4 ring-background shadow-xl"
            >
              🖊️
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl md:text-6xl mb-3 tracking-tight"
              >
                Hiroki Asano
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl text-muted-foreground"
              >
                Tanka Poet / Software Developer in Japan
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-2 text-muted-foreground mb-12"
          >
            <Mail className="w-4 h-4" />
            <a href="mailto:asano.hiroki@gmail.com" className="hover:text-foreground transition-colors">
              asano.hiroki@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <link.icon className="w-4 h-4" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-10 border border-primary/10 overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl mb-3">My Apps</h2>
              <p className="text-muted-foreground mb-6">
                Explore my collection of apps designed to enhance productivity and creativity.
              </p>
              <Link
                to="/apps"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
              >
                View All Apps
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Home;
