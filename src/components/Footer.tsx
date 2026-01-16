import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white px-4 md:px-[72px] pt-20 pb-10">
      {/* Footer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-[#121212]/50 mb-6">
            Company
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/roadmap" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
              Roadmap
            </Link>
            <Link href="/faq" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
              FAQ
            </Link>
            <Link href="/contact" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-[#121212]/50 mb-6">
            Knowledge
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/blog" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
              Blog
            </Link>
            <Link href="/science-technology" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
              Science &<br />Technology
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-[#121212]/50 mb-6">
            Team & Work
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/our-team" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
              Our Team
            </Link>
            <Link href="/careers" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
              Careers
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-[#121212]/50 mb-6">
            Contact
          </h4>
          <Link href="mailto:hi@untillabs.com" className="text-xl font-medium text-[#121212] hover:opacity-70 transition-opacity">
            hi@untillabs.com
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 border-t border-[#121212]/10 gap-6">
        <div className="flex flex-col items-start gap-2">
          <span className="text-[28px] font-medium text-[#121212]">until</span>
          <div className="flex">
            <div className="w-3 h-3 rounded-full bg-[#121212]" />
            <div className="w-3 h-3 rounded-full bg-[#121212] -ml-0.5" />
            <div className="w-3 h-3 rounded-full bg-[#121212] -ml-0.5" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <span className="text-sm text-[#121212]/50">
            2025 Until Labs - All Rights Reserved
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/untillabs"
              className="flex items-center gap-2 text-sm text-[#121212] hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://x.com/untillabs"
              className="flex items-center gap-2 text-sm text-[#121212] hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter/X
            </Link>
            <Link
              href="https://jobs.lever.co/until"
              className="flex items-center gap-2 text-sm text-[#121212] hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15v8l7-4-7-4z"/>
              </svg>
              Lever
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
