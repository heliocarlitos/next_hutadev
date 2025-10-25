import "./globals.css";
import { Header } from "../components/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="light">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title> HutaDev – Desenvolvimento Web para Startups e Empresas</title>
        <meta
          name="description"
          content="Huta Dev oferece soluções digitais modernas que ajudam programadores, designers e startups a crescer com eficiência, inteligência e clareza."
        />
        <meta
          name="keywords"
          content="desenvolvimento web, startups, programação, design digital, soluções digitais, Huta Dev"
        />
        <meta name="author" content="Huta Dev" />
        <meta
          property="og:title"
          content="Huta Dev - Para startups e sites de negócio"
        />
        <meta
          property="og:description"
          content="Transforme suas ideias em soluções digitais eficientes com Huta Dev."
        />
        <meta property="og:image" content="/demo-light.webp" />
        <meta property="og:url" content="https://nexthutadev.netlify.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="/demo-light.webp" />
        <meta
          name="twitter:title"
          content="Huta Dev - Para startups e sites de negócio"
        />
        <meta
          name="twitter:description"
          content="Transforme suas ideias em soluções digitais eficientes com Huta Dev."
        />
        <meta name="twitter:image" content="URL_da_imagem_de_preview" />
        <meta name="robots" content="index, follow" />

        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Hutadev" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Fira+Code:wght@300..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
