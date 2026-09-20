import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Chong Li Sean — Portfolio',
  description:
    'Data analytics & software engineering portfolio — Runeted, Re:Connect SG, and design work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Nav />
          <main className="container-page py-16 sm:py-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
