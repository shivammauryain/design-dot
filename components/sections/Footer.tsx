export function Footer() {
  return (
    <footer className="bg-textDark text-white py-10 border-t border-border/20 mt-auto">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[13px] text-white/50">
          &copy; {new Date().getFullYear()} Demo HLS Global Group. All rights
          reserved.
        </div>
        <div className="flex gap-6 text-[13px] font-semibold">
          <a
            href="#"
            className="hover:text-secondary transition-colors text-white/70"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-colors text-white/70"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
