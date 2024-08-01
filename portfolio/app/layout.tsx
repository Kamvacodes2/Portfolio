import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamva | Professional Portfolio",
  description: `Kamva is a Fullstack Developer, upon completing my Bachelors degree in Accounting at the University of Johannesburg, I entered the workforce
  and work as a junior and associate accountant for just under 3 years. I gained invaluable skills and work ethic from the industry but ultimately decided to pursue
  my passion for software development at the beginning of 2024 as it stand I am currently completiting a National Certificate: I.T Along this journey
  I have been able to delve into the various aspects of web development which include front-end frameworks and languages such as React, Next Js, Javascript, HTML & CSS as well as 
  backend frameworks and languages which include Nodejs, Mongo DB, Firebase and SQL. I love leveraging technologies that allow the ability to solve
  real world problems `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} g-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer/>
            <Toaster position="top-right"/>
            <ThemeSwitch/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
