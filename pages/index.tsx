import Dashboard from "@/components/Dashboard"
import { Metadata } from "next"
import { useSearchParams } from 'next/navigation';

export const metadata = {
  icons: {
    icon: [
      { url: '/assets/icon.svg', type: 'image/png' },
    ]
  },

}


export default function Home() {
  const searchParams = useSearchParams();
  const dishname = searchParams.get('dishname');
  return (
    <>
      <Dashboard dishname={dishname} />
    </>
  );
}
