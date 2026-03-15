export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white">
              Veridion Microsystems
            </span>
          </div>

          <p className="text-xs text-slate-600 text-center">
            &copy; {new Date().getFullYear()} Veridion Microsystems. Fighting
            antimicrobial resistance with microsystems engineering.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
