import { Baloo_Bhaijaan_2} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const baloo = Baloo_Bhaijaan_2({ 
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-baloo'
});

export const metadata = {
  title: "MediMeet - Doctors Appointment App",
  description: "Connect with doctors and book appointments easily",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark
    }}>

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${baloo.variable}`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >

            <Header/>
            
        <main className="min-h-screen txt">

        {children}
        </main>
        <Toaster richColors/>
          </ThemeProvider>

        <footer className="bg-muted/50 py-12 txt">
          <div className=" text-xl container mx-auto px-4 text-center text-gray-200">

          Made with ❤️ by Kartik Saxena
          </div>
        </footer>
      </body>
    </html>
            </ClerkProvider>
  );
}
