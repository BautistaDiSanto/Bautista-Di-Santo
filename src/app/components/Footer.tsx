export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-300">
          © {new Date().getFullYear()} Juan. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 