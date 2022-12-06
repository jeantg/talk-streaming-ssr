import { ReactNode } from "react";
import "style/index.css";
import "tailwindcss/tailwind.css";
type HtmlProps = { children: ReactNode };
const Html = ({ children }: HtmlProps) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default Html;
