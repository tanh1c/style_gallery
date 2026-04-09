export function Footer() {
  return (
    <footer className="py-12 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/10">
      <div className="text-muted-foreground text-sm">
        © 2026 Mindloop. All rights reserved.
      </div>
      <div className="flex items-center gap-8">
        {["Privacy", "Terms", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
