import Challenge from './Challenge'
import qrCodeThumbnail from '../../assets/QRCode/images/preview.jpg'

export default function Challenges() {
  return (
    <div className='flex flex-col flex-wrap md: md:flex-row'>
      <Challenge title='QR Code' path='/qr-code' thumbnail={qrCodeThumbnail} />
    </div>
  )
}
