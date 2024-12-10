const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><a href="/contact" className="hover:underline">Contacto</a></li>
              <li><a href="/privacy" className="hover:underline">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="mt-4">
              Email: <a href="mailto:info@tu-sitio.com" className="hover:underline">info@tu-sitio.com</a>
            </p>
            <p className="mt-2">Teléfono: +1 234 567 890</p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex mt-4 space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:opacity-75">FB</a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:opacity-75">TW</a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:opacity-75">IG</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          © {new Date().getFullYear()} Tu Vox. Todos los derechos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  