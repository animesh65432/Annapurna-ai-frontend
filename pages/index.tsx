import Dashboard from "@/components/Dashboard"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-poppins',
  display: 'swap',
})
export const metadata = {
  title: 'My App',
  description: 'Using Google Fonts',
}

export default function Home() {
  return (
    <div className={`${poppins.variable}`}>
      <Dashboard />
    </div>
  );
}
