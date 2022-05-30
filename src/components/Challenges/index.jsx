import Challenge from './Challenge'

export default function Challenges() {
  return (
    <div className='flex flex-col flex-wrap md: md:flex-row'>
      <Challenge title='QR Code' path='/qr-code' />
    </div>
  )
}
