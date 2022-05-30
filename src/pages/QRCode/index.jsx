import '../../styles/QRCode/index.css'
import qrCode from '../../assets/QRCode/images/qr-code.png'

export default function QRCode() {
  return (
    <div className="bg-[#d6e2f0] min-h-screen flex justify-center items-center font-['Outfit']">
      <div className='flex flex-col flex-wrap items-center mx-4 text-center bg-white rounded-xl md:w-[26rem] drop-shadow-lg'>
        <div className='m-4 overflow-hidden rounded-xl'>
          <img src={qrCode} alt='QR Code' className='w-full' />
        </div>
        <h2 className='mx-4 my-2 text-2xl font-bold text-[#1f3251]'>
          Improve your front-end skills by building projects
        </h2>
        <p className='mx-6 mt-4 mb-8 text-[#7b879d]'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}
