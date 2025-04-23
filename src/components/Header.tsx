export default function Header() {
  return (
    <header className="bg-indigo-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-purple-300">Home</a></li>
          <li><a href="/posts" className="hover:text-purple-300">Posts</a></li>
          <li><a href="/about" className="hover:text-purple-300">About</a></li>
          <li><a href="/contact" className="hover:text-purple-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
} 