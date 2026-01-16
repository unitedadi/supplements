import Image from 'next/image';
import Link from 'next/link';

export default function NeuroscienceSection() {
  return (
    <section className="bg-[#121212] py-[120px] px-4 md:px-[72px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* Text */}
      <div className="text-[#f7f3ec]">
        <h3 className="text-[36px] md:text-[48px] font-medium mb-2">
          Neuroscience
        </h3>
        <p className="text-xl md:text-2xl font-medium opacity-70 mb-6">
          To preserve what matters most.
        </p>
        <p className="font-mono text-base font-medium leading-relaxed opacity-90 mb-6">
          Our team now works to extend that signal: toward synaptic integrity, long-term potentiation, and eventually, whole-brain preservation. We design new cryoprotectants that cross the blood-brain barrier, build perfusion protocols for non-vascular tissue, and develop the assays that can meaningfully measure recovery.
        </p>
        <Link
          href="/blog/milestone-white-paper-i"
          className="inline-block px-8 py-3 border border-[#f7f3ec]/30 rounded-full text-base font-medium text-[#f7f3ec] hover:bg-[#f7f3ec]/10 transition-colors"
        >
          Read More
        </Link>
      </div>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/images/neuroscience-001.avif"
          alt="Neuroscience visualization"
          width={800}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
