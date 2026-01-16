import Link from 'next/link';

export default function JoinCTASection() {
  return (
    <section className="bg-[#121212] py-[120px] px-4 md:px-[72px] text-center">
      <h3 className="text-[24px] md:text-[32px] font-medium text-[#f7f3ec] max-w-[900px] mx-auto mb-10 leading-snug">
        This is the most speculative part of our ambition, and it is the most profound. To work here is to join Until&apos;s most experimental frontier.
      </h3>
      <Link
        href="/careers"
        className="inline-block px-12 py-4 bg-[#f7f3ec] text-[#121212] rounded-full text-lg font-medium hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all"
      >
        Join Us
      </Link>
    </section>
  );
}
