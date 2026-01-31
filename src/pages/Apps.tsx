import { motion } from 'motion/react';
import { Container } from '../components/Container';
import { AppCard } from '../components/AppCard';
import { apps } from '../data/apps';

function Apps() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl mb-4 tracking-tight">Apps</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of carefully crafted applications designed to enhance your workflow and
              spark creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              >
                <AppCard app={app} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Apps;
