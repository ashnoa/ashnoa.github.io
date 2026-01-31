import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/Container';

function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-8xl mb-8"
          >
            🔍
          </motion.div>

          <h1 className="text-5xl mb-4 tracking-tight">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Page not found. The page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}

export default NotFound;
