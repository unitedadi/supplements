import Image from 'next/image';

export default function LargeImageSection() {
  return (
    <section className="px-4 md:px-[72px] py-10">
      <div className="relative w-full rounded-3xl overflow-hidden">
        <Image
          src="/images/perfusion-002.webp"
          alt="Organ preservation equipment"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
