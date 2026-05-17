// Server Component — NO "use client" here
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "TheTiffins – Fresh Home-Made Tiffin & Snack Service for Organizations",
  description:
    "TheTiffins – Premium Home-Made Tiffin & Snack Service for Organizations, Corporates & Companies. Fresh, nutritious, FSSAI-certified daily tiffin delivery.",
  keywords:
    "tiffin service, home cooked food, corporate tiffin, office food delivery, snack service, meal subscription",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Non-render-blocking font load: media trick swaps to all after parse */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Baloo+2:wght@400;500;600;700;800&family=Kalam:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Baloo+2:wght@400;500;600;700;800&family=Kalam:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
