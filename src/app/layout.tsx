// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Penta Cab - Premium Taxi Service | Reliable & Luxurious Transportation",
    template: "%s | Penta Cab"
  },
  description: "Experience premium taxi service with Penta Cab. Professional drivers, luxury vehicles, 24/7 availability. Book now for airport transfers, city rides, and outstation trips.",
  keywords: [
    "taxi service",
    "cab booking",
    "airport transfer",
    "luxury transportation",
    "reliable taxi",
    "24/7 cab service",
    "outstation taxi",
    "corporate transportation",
    "premium cab service"
  ],
  authors: [{ name: "Penta Cab" }],
  creator: "Penta Cab",
  publisher: "Penta Cab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pentacab.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Penta Cab - Premium Taxi Service",
    description: "Experience premium taxi service with Penta Cab. Professional drivers, luxury vehicles, 24/7 availability.",
    url: "https://pentacab.com",
    siteName: "Penta Cab",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Penta Cab - Premium Taxi Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penta Cab - Premium Taxi Service",
    description: "Experience premium taxi service with Penta Cab. Professional drivers, luxury vehicles, 24/7 availability.",
    images: ["/og-image.jpg"],
    creator: "@pentacab", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Penta Cab",
              "description": "Premium taxi service with professional drivers and luxury vehicles",
              "url": "https://pentacab.com",
              "telephone": "+91-9157576555",
              "priceRange": "$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                // Add your actual address details
              },
              "geo": {
                "@type": "GeoCoordinates",
                // Add your actual coordinates
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", 
                  "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "serviceType": "Taxi Service",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-penta-black text-penta-cream min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      > 
        <Navbar /> 
        <main id="main-content" className="relative flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}