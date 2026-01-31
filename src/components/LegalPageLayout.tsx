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
        <article className="prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-medium
          prose-h1:text-2xl prose-h1:mb-8
          prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
          prose-ul:my-4 prose-ul:pl-6
          prose-ol:my-4 prose-ol:pl-6
          prose-li:my-1
          prose-a:text-primary prose-a:underline prose-a:underline-offset-2
        ">
          {children}
        </article>
      </Container>
    </div>
  );
}
