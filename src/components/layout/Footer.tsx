export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-text-muted text-sm">
            © 2026 Vertio Pty Ltd. All rights reserved.
          </p>

          {/* Links placeholder - add links here later */}
          <div className="flex items-center gap-6">
            {/* Privacy Policy, Terms of Service, Cookie Preferences will go here */}
          </div>

          {/* Social icons placeholder - add icons here later */}
          <div className="flex items-center gap-4">
            {/* X, LinkedIn, YouTube icons will go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
