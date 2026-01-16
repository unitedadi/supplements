'use client';

export default function AssayingSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: '130vh',
        backgroundColor: '#c52f0b',
      }}
    >
      {/* Spray paint gradient overlay at top - cream fading into red */}
      <div
        className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: '45%',
          background: `
            radial-gradient(ellipse 120% 100% at 50% 0%,
              #f7f3ec 0%,
              #f7f3ec 20%,
              rgba(247, 243, 236, 0.9) 35%,
              rgba(247, 243, 236, 0.6) 50%,
              rgba(247, 243, 236, 0.3) 65%,
              rgba(247, 243, 236, 0.1) 80%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          maxWidth: '800px',
          padding: '128px 112px 128px 160px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: '12px',
            color: '#f7f3ec',
          }}
        >
          Collagen Health
        </h2>
        <h3
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            marginBottom: '24px',
            color: '#f7f3ec',
          }}
        >
          One solution isn&apos;t enough.
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-neue-haas-text)',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#f7f3ec',
            marginBottom: '16px',
          }}
        >
          Skin aging and tissue breakdown don&apos;t happen for one reason—and they can&apos;t be corrected with a single approach. Collagen loss is both a supply problem and a production problem.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-neue-haas-text)',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#f7f3ec',
            marginBottom: '16px',
          }}
        >
          Oral collagen alone delivers raw materials, but without cellular activation, much of that potential remains unused. Injectable biostimulators can restart collagen production, but without sufficient amino acids and structural support, the response is limited and short-lived.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-neue-haas-text)',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#f7f3ec',
            marginBottom: '16px',
          }}
        >
          GS1 and Jalupro work together by addressing both sides of the equation. GS1 provides the circulating collagen peptides and essential amino acids needed to repair and reinforce tissue. Jalupro delivers the biological signal, activating fibroblasts to convert those materials into new collagen, elastin, and extracellular matrix.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-neue-haas-text)',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#f7f3ec',
            marginBottom: '16px',
          }}
        >
          One builds the inventory. The other turns on production.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-neue-haas-text)',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#f7f3ec',
          }}
        >
          Because the best outcomes don&apos;t come from choosing between supply or stimulation—they come from aligning both so the body can rebuild, strengthen, and sustain results.
        </p>
      </div>
    </section>
  );
}
