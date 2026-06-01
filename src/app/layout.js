import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

export const metadata = {
  title: "Sourov Chandra Barmon | Full-Stack Developer",
  description:
    "Full-Stack Developer based in Dhaka, Bangladesh. Specializing in Next.js, TypeScript & Node.js.",
  keywords: [
    "Next.js",
    "React",
    "Full-Stack",
    "Developer",
    "Portfolio",
    "Dhaka",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Full-Stack Developer",
    description: "Full-Stack Developer based in Dhaka, Bangladesh.",
    url: "https://yourportfolio.com",
    siteName: "Your Name Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Full-Stack Developer",
    description: "Full-Stack Developer based in Dhaka, Bangladesh.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={`${spaceMono.variable} ${syne.variable}`}>
      <body className="bg-[#080c10] text-white antialiased">{children}</body>
    </html>
  );
}

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#080c10] text-white antialiased">{children}</body>
//     </html>
//   );
// }
