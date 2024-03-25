import '../styles/layout.css'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div>
        <Navbar />
        <div>{children}</div>
        <Footer />
    </div>
  )
}
