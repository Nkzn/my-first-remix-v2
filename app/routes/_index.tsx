import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs/en/main/start/quickstart"
            rel="noreferrer"
          >

            5m Quickstart
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs/en/main/start/tutorial"
            rel="noreferrer"
          >
            30m Contacts Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Nkzn/my-first-remix-v2" rel="noreferrer">
            Source Code
          </a>
        </li>
      </ul>
    </div>
  );
}
