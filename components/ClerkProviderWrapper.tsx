"use client";

import { ClerkProvider } from "@clerk/nextjs";

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

const ClerkProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        variables: {
          colorPrimary: "#FEC100", // Xpenda theme color
          fontSize: "16px",
        },
        elements: {
          button: { padding: "10px 2px" },
          formFieldInput: {
            borderRadius: "6px",
            borderColor: "#333",
            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#333",
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkProviderWrapper;
