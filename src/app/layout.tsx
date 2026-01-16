import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartSlideout from "@/components/CartSlideout";

export const metadata: Metadata = {
  title: "Decoded & Jalupro | DarDoc Health",
  description: "Premium collagen supplements - Decoded GS1 Triple Collagen Complex and Jalupro Amino Acid & HA Complex for skin, hair, and joint health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
          <CartSlideout />
        </CartProvider>
      </body>
    </html>
  );
}
