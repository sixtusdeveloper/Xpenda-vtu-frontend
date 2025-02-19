import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClerkProviderWrapper from "@/components/ClerkProviderWrapper"; // ✅ Import
import TawkToWidget from "@/components/TawkToWidget";

const inter = Inter({ subsets: ["latin"] });

// ✅ Define metadata separately (not inside a client component)
export const metadata = {
  title: "Xpenda - Affordable Airtime & Data Reselling Platform",
  description:
    "Xpenda is a fast and secure platform for buying and reselling airtime, data, and digital services in Nigeria. Start your VTU business today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FEC100" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ClerkProviderWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <TawkToWidget />
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
