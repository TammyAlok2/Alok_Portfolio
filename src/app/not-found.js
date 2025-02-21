import Link from "next/link"
import { Home } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <div className="text-center space-y-6 animate-fade-in-up">
        <Image width={1500} height={1100} src={"/page-not-found/404_page-not-found.png"} alt="page-not-found" className="object-contain w-full h-full ratio-auto absolute z-[-1]" />
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-white hover:bg-[#247ce2] border-[0.1rem] hover:text-white border-[#247ce2] rounded-lg hover:opacity-[.9] active:scale-95 transition-colors duration-200"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

