import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-[100dvh] bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-50">
            404
          </h1>
          <p className="text-2xl font-medium text-gray-600 dark:text-gray-400">
            Oops! Project not found.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            The Project you are looking for does not exist.
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/backoffice/my-projects"
        >
          Go to my projects
        </Link>
      </div>
    </main>
  );
}
