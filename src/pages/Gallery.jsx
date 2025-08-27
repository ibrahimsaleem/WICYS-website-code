import img1 from '../assets/fair.jpg'
import img2 from '../assets/session.jpg'
import img3 from '../assets/memberUH.jpg'
import Reveal from '../components/Reveal.jsx'

export default function Gallery() {
  const images = [img1, img2, img3]
  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-2 text-gray-600">Moments from events, workshops, and our community.</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <Reveal key={i}>
            <img src={src} alt={`Gallery ${i+1}`} className="w-full h-56 object-cover rounded-xl border" />
          </Reveal>
        ))}
      </div>
    </div>
  )
}


