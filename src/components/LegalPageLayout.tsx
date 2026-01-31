import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from './Container';

interface LegalPageLayoutProps {
  children: ReactNode;
  appName: string;
  backPath: string;
}

export function LegalPageLayout({ children, appName, backPath }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <Container>
        <Link
          to={backPath}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {appName}
        </Link>
        <article className="legal-content max-w-none">
          {children}
        </article>
      </Container>
    </div>
  );
}
