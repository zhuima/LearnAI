import { Inter } from "next/font/google";

import { Providers } from "@/app/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI说",
  description:
    "你的个人专属AI助手, plumsai.com, AI博士讲AI, 邓博讲AI, 邓博, Short Courses | Learn Generative AI from DeepLearning.AI, AI: Start or Advance Your Career in AI",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 6,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "AI说",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="version" content={"1.1"} />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
