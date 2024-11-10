// src/Contact.js
function Contact() {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">We’d love to hear from you! Reach out to us through any of the following channels:</p>
        <ul className="list-disc list-inside">
          <li>Email: <a href="mailto:contact@example.com" className="text-blue-600">contact@example.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="text-blue-600">+1 234 567 890</a></li>
          <li>Address: 1234 Business Lane, Suite 100, Cityville</li>
        </ul>
        <p className="mt-4">Or connect with us on social media for the latest updates and industry insights.</p>
      </div>
    );
  }
  
  export default Contact;
  