export default function ApiPage() {
  return (
    <div className="content-container">
      <div className="doc-content">
        <h1>API Documentation</h1>
        
        <p className="text-large text-muted">
          Complete API reference for integrating and extending the documentation platform.
        </p>

        <div className="alert alert-info">
          <h3>API Documentation</h3>
          <p>
            This section provides comprehensive documentation for all available APIs.
            Select a topic from the navigation menu to learn more.
          </p>
        </div>

        <section className="doc-section">
          <h2>Getting Started with the API</h2>
          <p>
            Our API allows you to programmatically access and modify documentation content,
            manage themes, and integrate with external services.
          </p>

          <div className="feature-card">
            <h3>Authentication</h3>
            <p>Learn how to authenticate your requests to access the API.</p>
            <pre>
              <code>
                {`// Example authentication code
const api = new DocsAPI({
  apiKey: "your-api-key"
});`}
              </code>
            </pre>
          </div>

          <div className="feature-card">
            <h3>Basic Usage</h3>
            <p>Simple example of making an API request.</p>
            <pre>
              <code>
                {`// Fetch documentation content
const content = await api.getContent({
  path: "/docs/introduction"
});`}
              </code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
