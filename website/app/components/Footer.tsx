'use client';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div>
              <span className="text-white font-bold tracking-tight">Veridion Microsystems</span>
              <p className="text-xs text-slate-600">
                Because the right antibiotic at the right time saves lives.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <span className="text-slate-700">|</span>
            <span>&copy; {new Date().getFullYear()} Veridion Microsystems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
