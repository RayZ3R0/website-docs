"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Getting Started",
    links: [
      { href: "/docs/introduction", title: "Introduction" },
      { href: "/docs/installation", title: "Installation" },
      { href: "/docs/quick-start", title: "Quick Start" },
    ],
  },
  {
    title: "Features",
    links: [
      { href: "/docs/theming", title: "Theming" },
      { href: "/docs/navigation", title: "Navigation" },
      { href: "/docs/components", title: "Components" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { href: "/docs/api/overview", title: "Overview" },
      { href: "/docs/api/endpoints", title: "Endpoints" },
      { href: "/docs/api/authentication", title: "Authentication" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar scrollbar-hide">
      <nav>
        {navigation.map((section) => (
          <div key={section.title} className="sidebar-section">
            <h2 className="sidebar-section-title">
              {section.title}
            </h2>
            <ul className="sidebar-nav-list">
              {section.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="sidebar-nav-item">
                    <Link
                      href={link.href}
                      className={`sidebar-nav-link ${isActive ? "active" : ""}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
