import Header from "./header";
import Link from "next/link";
import Image from 'next/image';

export default function MyFooter() {
  return (
    <>
      
      <footer className="fixed bottom-0 w-full bg-gray-200 py-2 text-center">
        <div className="text-sm">
          Digital Crypto Currency &copy; {new Date().getFullYear()}
          <br />
          <Link href="./privacy">Privacy</Link> |
          <Link href="./faq">FAQ</Link> |
          <Link href="./support">Support</Link>
        </div>
      </footer>
    </>
  );
}
