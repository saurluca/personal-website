import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
      <h1 className="text-3xl font-bold text-text">Seite nicht gefunden</h1>
      <p className="mt-4 text-text-secondary">
        <Link href="/" className="text-primary hover:underline">
          Zurück zur Startseite
        </Link>
      </p>
    </main>
  );
}
