import { Sidebar } from "@/components/nav/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="docs-layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-container">
          <div className="doc-content">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
