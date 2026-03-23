import type { Metadata, Viewport } from "next"
import { EB_Garamond, Lato } from "next/font/google"
import "./globals.css"
import { Header, Footer } from "@/components/navigation"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://westwoodboys.org"),
  title: {
    default: "Westwood Boys School | Independent Muslim Secondary School in Oldham",
    template: "%s | Westwood Boys School",
  },
  description:
    "Westwood Boys School is an independent Muslim secondary school in Oldham. Pupils flourish academically and personally at this school.",
  keywords: [
    "Westwood Boys School",
    "Muslim school Oldham",
    "Islamic school",
    "independent school Oldham",
    "secondary school",
    "boys school",
    "Islamic education",
    "British values",
    "GCSE",
    "faith school",
    "Oldham school",
  ],
  authors: [{ name: "Westwood Boys School" }],
  creator: "Westwood Boys School",
  publisher: "Westwood Boys School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Westwood Boys School",
    title: "Westwood Boys School | Independent Muslim Secondary School in Oldham",
    description:
      "Westwood Boys School is an independent Muslim secondary school in Oldham. Pupils flourish academically and personally at this school.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Westwood Boys School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Westwood Boys School | Independent Muslim Secondary School in Oldham",
    description:
      "Westwood Boys School is an independent Muslim secondary school in Oldham. Pupils flourish academically and personally at this school.",
    images: ["/images/og-image.jpg"],
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
}

export const viewport: Viewport = {
  themeColor: "#121F48",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Structured Data for School
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Westwood Boys School",
  description:
    "An independent Muslim secondary school located in the heart of Oldham's Cultural Quarter.",
  url: "https://westwoodboys.org",
  logo: "https://westwoodboys.org/images/logo.png",
  image: "https://westwoodboys.org/images/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "121 Union Street",
    addressLocality: "Oldham",
    addressRegion: "Greater Manchester",
    postalCode: "OL1 1TE",
    addressCountry: "GB",
  },
  telephone: "+44-161-425-3599",
  email: "office@westwoodboysschool.org",
  sameAs: [],
  founder: {
    "@type": "Organization",
    name: "The Green Dome Academy",
  },
  slogan: "To deliver a world class education in an environment that nurtures the love for Allah",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-navy focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
