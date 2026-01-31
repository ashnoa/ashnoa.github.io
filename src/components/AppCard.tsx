import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { App } from '../data/apps';

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Link to={`/${app.id}`}>
      <motion.div
        className="group relative bg-card rounded-2xl p-6 border border-border hover:border-foreground/20 transition-all cursor-pointer overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-3xl overflow-hidden">
              {app.icon.startsWith('/') ? (
                <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
              ) : (
                app.icon
              )}
            </div>
          </div>

          <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">
            {app.name}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {app.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </Link>
  );
}
