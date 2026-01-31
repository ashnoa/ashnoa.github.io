import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Container } from "../components/Container";
import { apps } from "../data/apps";

function AppDetailPage() {
  const { appId } = useParams<{ appId: string }>();
  const app = apps.find((a) => a.id === appId);

  if (!app) {
    return <Navigate to="/apps" replace />;
  }

  const isImageIcon = app.icon.startsWith("/");

  return (
    <div className="min-h-screen pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back to Apps */}
          <Link
            to="/apps"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Apps
          </Link>

          {/* Hero Section */}
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-28 h-28 rounded-[26%] overflow-hidden shadow-lg bg-secondary flex items-center justify-center flex-shrink-0"
            >
              {isImageIcon ? (
                <img
                  src={app.icon}
                  alt={`${app.name} icon`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-5xl">{app.icon}</span>
              )}
            </motion.div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl mb-2 tracking-tight">
                {app.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {app.tagline}
              </p>
              {app.appStoreUrl && (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                >
                  View on App Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* About Section */}
              <section>
                <h2 className="text-2xl mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </section>

              {/* Features Section */}
              <section>
                <h2 className="text-2xl mb-4">Features</h2>
                <ul className="space-y-3">
                  {app.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>

              {/* Screenshots Section */}
              <section className="bg-secondary/50 rounded-2xl p-6">
                <h2 className="text-2xl mb-2">Screenshots</h2>
                <p className="text-muted-foreground">
                  Screenshots and previews coming soon.
                </p>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Platforms Card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-medium mb-4">Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-medium mb-4">Developer</h3>
                <Link to="/" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="/images/ashnoa.JPG"
                      alt="Hiroki Asano"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      Hiroki Asano
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Software Developer
                    </p>
                  </div>
                </Link>
              </div>

              {/* Legal Card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-medium mb-4">Legal</h3>
                <div className="space-y-2">
                  <Link
                    to={app.privacyPolicyPath}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to={app.termsOfUsePath}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Use
                  </Link>
                  <Link
                    to={app.termsOfSalePath}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Sale
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AppDetailPage;
