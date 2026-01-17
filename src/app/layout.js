import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LimeTray - Task Manager",
  description: "A simple and elegant task management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem>
          <TaskProvider>
            {children}
          </TaskProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
