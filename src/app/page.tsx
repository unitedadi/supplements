import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ApproachSection from '@/components/ApproachSection';
import ContentSection from '@/components/ContentSection';
import CoolingRewarmingSection from '@/components/CoolingRewarmingSection';
import AssayingSection from '@/components/AssayingSection';
import DeRiskingSection from '@/components/DeRiskingSection';
import TeamGallerySection from '@/components/TeamGallerySection';

export default function Home() {
  return (
    <main>
      <Header />

      <HeroSection />

      <ApproachSection />

      {/* Decoded Section */}
      <ContentSection
        id="decoded"
        title="Decoded"
        subtitle="Building your skin's Inner Foundation"
        paragraphs={[
          "GS1 delivers a double dose of collagen by combining three powerful collagen types for visible skin, hair, and joint results. Super marine collagen type I peptides provide a rich profile of 17 essential amino acids, including hydroxyproline, proline, and glycine, to help strengthen the basal membrane and dermal structure, while being up to 4× more potent than bovine collagen—meaning 2,500 mg marine collagen can deliver effects comparable to 10,000 mg bovine, with a lower environmental footprint. This is enhanced with advanced eggshell membrane collagen containing types I, V, and X, alongside natural hyaluronic acid, elastin, glucosamine, and chondroitin sulphate, supported by clinical research showing improved skin elasticity, hydration, wrinkle reduction, increased collagen and hyaluronic acid production, as well as thicker hair, reduced hair loss, and powerful joint and cartilage support—making GS1 a complete, next-generation collagen solution."
        ]}
        imageSrc="/images/decoded3.png"
        imageAlt="Decoded GS1 Collagen"
        showPreorder
        productId="decoded-gs1"
        productSubtitle="Triple Collagen Complex"
        price={499}
      />

      {/* Jalupro Section */}
      <ContentSection
        id="jalupro"
        title="Jalupro"
        subtitle="Revolutionary Skin beauty from Within"
        paragraphs={[
          "Jalupro delivers advanced, science-driven products combining amino acids and hyaluronic acid to stimulate collagen, and achieve long-lasting, natural results. From injectables to skincare and supplements, Jalupro enhances your skin's beauty through clinically-backed innovations."
        ]}
        imageSrc="/images/jalupro.png"
        imageAlt="Jalupro Skin Treatment"
        reverse
        showPreorder
        productId="jalupro"
        productSubtitle="Amino Acid & HA Complex"
        price={499}
      />

      <CoolingRewarmingSection />

      <AssayingSection />

      <DeRiskingSection />

      <TeamGallerySection />
    </main>
  );
}
