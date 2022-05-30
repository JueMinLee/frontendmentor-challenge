import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-gray-200'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
