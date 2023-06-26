export const metadata = {
  title: 'TODO: // Update this title',
  description: 'TODO: // Update this description',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
