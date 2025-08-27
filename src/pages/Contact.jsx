export default function Contact() {
  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2">Have questions or want to collaborate? Send us a message.</p>
      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="border rounded-md px-3 py-2" placeholder="Name" required />
        <input className="border rounded-md px-3 py-2" type="email" placeholder="Email" required />
        <textarea className="border rounded-md px-3 py-2" rows="5" placeholder="Message" required />
        <button className="bg-wicys-purple text-white font-semibold px-4 py-2 rounded-md w-fit">Send</button>
      </form>
              <div className="mt-6 text-sm text-gray-600">Email: wicsuh@gmail.com • Instagram/LinkedIn/Discord links in footer.</div>
    </div>
  )
}


