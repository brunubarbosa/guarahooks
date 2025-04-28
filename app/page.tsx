import { Hero } from '@/components/sections/hero';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center grow overflow-x-hidden',
      )}
    >
      <Hero />
      {/* <HooksDemo /> */}
    </section>
  );
}
