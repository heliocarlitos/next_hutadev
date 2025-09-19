import './globals.css';
import { Header } from '../components/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>HutaDev – Desenvolvimento Web para Startups e Empresas</title>
        <meta
          name="description"
          content="Na HutaDev, desenvolvemos sites e componentes web para Startups e Sites de Negócios, oferecendo soluções personalizadas para melhorar sua presença online."
        />
        <meta
          name="keywords"
          content="HutaDev, Hutauta Developer, desenvolvimento web, sites personalizados, startups, negócios, componentes web"
        />
        <meta name="author" content="HutaDev" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="HutaDev – Desenvolvimento de Sites e Componentes Web para Startups e Sites de Negócios"
        />
        <meta
          property="og:description"
          content="Na HutaDev, desenvolvemos sites e componentes web para Startups e Sites de Negócios, oferecendo soluções personalizadas."
        />
        {/* <meta
          property="og:image"
          content="https://hutadev.vercel.app/imagens/demostracao/demo_home.webp"
        /> */}
        <meta property="og:image:alt" content="Demonstração do site HutaDev" />
        <meta property="og:url" content="https://hutadev.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HutaDev – Desenvolvimento de Sites e Componentes Web para Startups e Sites de Negócios"
        />
        <meta
          name="twitter:description"
          content="Na HutaDev, desenvolvemos sites e componentes web para Startups e Sites de Negócios, oferecendo soluções personalizadas."
        />
        <meta
          name="twitter:image"
          content="https://hutadev.vercel.app/imagens/demostracao/demo_home.webp"
        />

        <link rel="icon" href="https://hutadev.vercel.app/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://hutadev.vercel.app/apple-touch-icon.png" />

        <meta
          name="google-site-verification"
          content="Yq84L51dBQ4wTZwfwB-N5qo8RykOcCs8s5_P-GncX-c"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
