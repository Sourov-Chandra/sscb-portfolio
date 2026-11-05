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
  metadataBase: new URL("https://github.com/Sourov-Chandra"),
  title: "Sourov Chandra Barmon | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer based in Thakurgaon, Rangpur, Bangladesh. Specializing in Next.js, React, Node.js, Express.js, MongoDB, and BetterAuth.",
  keywords: [
    "Sourov Chandra Barmon",
    "Full-Stack Developer",
    "MERN Developer",
    "Next.js",
    "React",
    "Express.js",
    "MongoDB",
    "BetterAuth",
    "Tailwind CSS",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Sourov Chandra Barmon" }],
  openGraph: {
    title: "Sourov Chandra Barmon | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer based in Thakurgaon, Rangpur, Bangladesh. Specializing in Next.js, Express, MongoDB, and BetterAuth.",
    url: "https://github.com/Sourov-Chandra",
    siteName: "Sourov Chandra Barmon Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourov Chandra Barmon | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer based in Thakurgaon, Rangpur, Bangladesh.",
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
