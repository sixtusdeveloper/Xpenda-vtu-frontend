import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        variables: {
          colorPrimary: "#FEC100", // Xpenda theme colors
          fontSize: "16px",
        },
        elements: {
          button: { padding: "10px 2px" },
          formFieldInput: {
            borderRadius: "6px !important",
            borderColor: "#333 !important",
            padding: "10px !important",
            backgroundColor: "#ffffff !important",
            color: "#333 !important",
          },
        },
      }}
    >
      <html lang="en">
        <Head>
          <title>Xpenda - Affordable Airtime & Data Reselling Platform</title>
          <meta
            name="description"
            content="Xpenda is a fast and secure platform for buying and reselling airtime, data, and digital services in Nigeria. Start your VTU business today!"
          />
          <meta
            name="keywords"
            content="Xpenda, VTU, Virtual Top-Up, Buy Data, Buy Airtime, Resell Airtime, Resell Data, Nigeria, Flutterwave"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="theme-color" content="#FEC100" />
          <meta
            name="p:domain_verify"
            content="a51624116ed608eb81ef7d11dd0543df"
          />

          {/* Open Graph tags for social media */}
          <meta
            property="og:title"
            content="Xpenda - Buy & Resell Airtime & Data in Nigeria"
          />
          <meta
            property="og:description"
            content="Start your VTU business with Xpenda! Buy, sell, and automate airtime and data top-ups instantly at the best rates."
          />
          <meta property="og:url" content="https://xpenda.com" />
          <meta
            property="og:image"
            content="https://xpenda.com/images/xpenda-preview.png"
          />
          <meta property="og:type" content="website" />

          {/* Structured Data (SEO) */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Xpenda",
              "url": "https://xpenda.com",
              "description": "Xpenda is an innovative VTU platform for buying and reselling airtime, data, and digital services in Nigeria.",
              "sameAs": [
                "https://www.linkedin.com/company/xpenda-vtu/",
                "https://github.com/xpenda",
                "https://x.com/xpendavtu"
              ]
            }
            `}
          </script>

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
