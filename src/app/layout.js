import localFont from "next/font/local";
import "./globals.css";


const chulaNewReg = localFont({
  src: "./fonts/ChulaCharasNewReg.ttf",
  variable: "--font-chula-new-reg",
});
const chulaNewBold = localFont({
  src: "./fonts/ChulaCharasNewBold.ttf",
  variable: "--font-chula-new-bold",
})
const chulaReg = localFont({
  src: "./fonts/CHULALONGKORNReg.otf",
  variable: "--font-chula-reg",
});
const chulaBold = localFont({
  src: "./fonts/CHULALONGKORNBold.otf",
  variable: "--font-chula-bold",
});

export const metadata = {
  title: "Portfolio",
  description: "IamBanky Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chulaNewReg.variable} ${chulaNewBold.variable} ${chulaReg.variable} ${chulaBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
