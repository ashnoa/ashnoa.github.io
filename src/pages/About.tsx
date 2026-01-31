import { motion } from 'motion/react';
import { Twitter, Mail, MapPin, Youtube, BookOpen } from 'lucide-react';
import { Container } from '../components/Container';

function About() {
  const skills = [
    'Swift & SwiftUI',
    'UIKit',
    'iOS Development',
    'Tanka Poetry',
    'Git',
    'TypeScript',
    'React',
  ];

  const interests = [
    'Tanka Poetry',
    'Software Development',
    'Minimalist Design',
    'Reading',
    'Music',
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
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-background shadow-xl"
            >
              <img
                src="/images/ashnoa.JPG"
                alt="Hiroki Asano"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h1 className="text-5xl mb-2 tracking-tight">About Me</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Japan</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6 mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm Hiroki Asano, a Tanka poet and software developer based in Japan.
              I create apps that are simple, intuitive, and built with care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a Tanka poet, I appreciate the beauty of simplicity and express emotions through
              the traditional Japanese poetic form. This sensibility also influences my approach
              to software development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In my development work, I focus on creating applications that solve real problems
              while maintaining a clean and elegant user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div>
              <h2 className="text-2xl mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.03, duration: 0.3 }}
                    className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl mb-6">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.03, duration: 0.3 }}
                    className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-2xl mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <a
                href="https://twitter.com/ashnoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>@ashnoa</span>
              </a>
              <a
                href="https://ashnoa.hatenablog.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>Blog</span>
              </a>
              <a
                href="https://youtube.com/@ashnoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a
                href="mailto:asano.hiroki@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>asano.hiroki@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

export default About;
