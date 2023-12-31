//import { cssBundleHref } from "@remix-run/css-bundle";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Draenei Truth" },
    { name: "description", content: "The truth about draenei" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
      </body>
    </html>
  );
}
