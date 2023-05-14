import Header from "./header";
import Link from "next/link";
import Image from 'next/image';

export default function DashBg() {
    return (
        <div className="min-h-screen bg-cover bg-center" style={{ background: `url(b2trader-updates-feb-3-1.png)` }}>
          <div className="container mx-auto">
            <h1 className="text-4xl text-white">ABCD</h1>
          </div>
        </div>
      );
}
