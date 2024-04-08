import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// Dark Teal: #22c55e (teal-500)
// Light Teal: #6fb98f (teal-300)
// Teal Blue: #a9ddd6 (teal-200)
// White: #ffffff (white)
// Light Gray: #f5f5f5 (gray-100)
// Slate: #334155 (slate-700)
// Rose: #ec4899 (rose-500)

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://kit.fontawesome.com/4b241f2390.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <div className="mx-auto my-12 max-w-[787px] px-6 antialiased sm:my-32 md:my-16">
            {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
