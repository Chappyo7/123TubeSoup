import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css';

export const metadata = {
  title: 'TubeSoup',
  description: 'Video analysis and outline generation tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-white dark:bg-slate-900">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}