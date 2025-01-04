import { Navigation } from '@/components/features/navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>TubeSoup</h1>
      </main>
    </>
  );
}