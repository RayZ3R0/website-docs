export default function IntroductionPage() {
  return (
    <article className="prose prose-slate dark:prose-invert">
      <h1>Introduction</h1>
      
      <p className="lead">
        Welcome to our modern documentation site. This platform is designed to
        provide a seamless experience for reading and navigating through
        documentation, with features like dark mode support and customizable color
        schemes.
      </p>

      <h2>Key Features</h2>
      
      <ul>
        <li>
          <strong>Modern Design</strong> - Clean and minimalist interface that
          puts focus on content
        </li>
        <li>
          <strong>Dark Mode</strong> - Automatically switches between light and
          dark themes based on your system preferences
        </li>
        <li>
          <strong>Color Schemes</strong> - Choose from predefined color schemes
          or customize your own
        </li>
        <li>
          <strong>Responsive Layout</strong> - Optimized for all screen sizes,
          from mobile to desktop
        </li>
      </ul>

      <h2>Getting Started</h2>

      <p>
        To get started with our platform, you can navigate through the
        documentation using the sidebar on the left. The documentation is
        organized into several sections:
      </p>

      <ul>
        <li>
          <strong>Getting Started</strong> - Basic information about the
          platform and how to get started
        </li>
        <li>
          <strong>Features</strong> - Detailed documentation about each feature
          and how to use them
        </li>
        <li>
          <strong>API Reference</strong> - Complete API documentation with
          examples and usage guidelines
        </li>
      </ul>

      <div className="p-4 border border-foreground/10 rounded-lg bg-foreground/5 my-6">
        <h3 className="mt-0">Quick Tip</h3>
        <p className="mb-0">
          You can quickly switch between light and dark modes using the theme
          toggle button in the top-right corner of the page. Try it out!
        </p>
      </div>

      <h2>Next Steps</h2>

      <p>
        We recommend starting with the Installation guide to set up your
        environment, followed by the Quick Start guide to begin using the
        platform. If you have any questions, feel free to reach out through our
        GitHub repository.
      </p>
    </article>
  );
}
