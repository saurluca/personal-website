import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
          <h1 className="text-3xl font-bold text-text">Page not found</h1>
          <p className="mt-4 text-text-secondary">
            <Link href="/" className="text-primary hover:underline">
              Back to home
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
