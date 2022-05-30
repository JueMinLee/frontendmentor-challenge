import Home from '../pages/Home'
import QRCode from '../pages/QRCode'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/qr-code',
    element: <QRCode />,
  },
]

export default routes
