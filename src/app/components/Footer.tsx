export default function Footer() {
  return (
    <footer className="dark:border-gray-800 border-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center dark:text-gray-300">
          © {new Date().getFullYear()} Juan. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 