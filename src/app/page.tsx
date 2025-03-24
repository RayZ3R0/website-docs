import Link from "next/link";

export default function HomePage() {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <h1>Modern Documentation</h1>
        
        <p className="text-large text-muted">
          A beautiful, responsive documentation site with dark mode and customizable themes.
          Built with Next.js and modern CSS.
        </p>

        <div className="landing-actions">
          <Link href="/docs/introduction" className="btn btn-primary">
            Get Started
          </Link>
          
          <Link href="/github" className="btn btn-secondary">
            View on GitHub
          </Link>
        </div>
      </div>

      <div className="landing-features">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p className="text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    title: "Modern Design",
    description:
      "Clean and minimal interface that puts focus on what matters - your content.",
  },
  {
    title: "Dark Mode",
    description:
      "Seamlessly switch between light and dark themes based on your preference.",
  },
  {
    title: "Color Schemes",
    description:
      "Choose from predefined color schemes or customize your own to match your brand.",
  },
  {
    title: "Full MDX Support",
    description:
      "Write documentation in MDX, combining the power of Markdown and React components.",
  },
  {
    title: "Responsive Layout",
    description:
      "Optimized for all devices and screen sizes, from mobile to desktop.",
  },
  {
    title: "Easy Navigation",
    description:
      "Intuitive sidebar navigation with collapsible sections and quick search.",
  },
];
