import Link from "next/link";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-nav">
          <Link href="/" className="header-logo">
            Docs
          </Link>

          <nav>
            <ul className="header-nav">
              <li>
                <Link href="/docs" className="nav-link">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="nav-link">
                  API
                </Link>
              </li>
              <li>
                <Link href="/examples" className="nav-link">
                  Examples
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-nav">
          <Link
            href="/github"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="icon"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
