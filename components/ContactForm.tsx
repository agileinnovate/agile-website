export default function ContactForm() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-8">Have a project in mind? Let's build it together.</p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded text-black"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded text-black"
        />
        <button className="bg-black text-white py-3 rounded font-semibold hover:bg-gray-800">
          Send Message
        </button>
      </form>
    </section>
  );
}
