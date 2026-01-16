import Link from 'next/link';

export default function ContactBubblesSection() {
  return (
    <section className="py-20 px-4 md:px-[72px] min-h-[500px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <Link
          href="/contact"
          className="relative bg-white rounded-full px-12 py-6 text-[24px] md:text-[32px] font-medium text-[#121212] shadow-lg hover:scale-[1.02] transition-transform"
        >
          Curious about our culture, goals, or focus?
          <div className="absolute -bottom-3 left-12 w-6 h-6 bg-white transform rotate-45" />
        </Link>

        <Link
          href="/contact"
          className="relative bg-white rounded-full px-12 py-6 text-[24px] md:text-[32px] font-medium text-[#121212] shadow-lg hover:scale-[1.02] transition-transform"
        >
          Feel free to reach out!
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white transform rotate-45" />
        </Link>

        <Link
          href="/contact"
          className="relative bg-white rounded-full px-12 py-6 text-[24px] md:text-[32px] font-medium text-[#121212] shadow-lg hover:scale-[1.02] transition-transform"
        >
          <span className="underline decoration-2 underline-offset-4">Click here</span> to contact us!
          <div className="absolute -bottom-3 right-12 w-6 h-6 bg-white transform rotate-45" />
        </Link>
      </div>
    </section>
  );
}
