import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Calendar</a>
          </Link>
        </li>
        <li>
          <Link href="/list" legacyBehavior>
            <a className="hover:underline">List</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery" legacyBehavior>
            <a className="hover:underline">Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/addEvent" legacyBehavior>
            <a className="hover:underline">Add Event</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
