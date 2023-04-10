import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-white">
      <h1 className="text-6xl font-bold text-cyan-700">Hello World</h1>
    </main>
  );
}
