import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p>
          <strong>{personalInfo.name}</strong>
          <span>Software Engineer · Singapore</span>
        </p>
        <p>
          <span>Designed for clarity. Built with Next.js.</span>
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
