import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Once UI Design System",
  description: "Once UI 官方设计系统",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }}>
        {children}
      </body>
    </html>
  );
}

