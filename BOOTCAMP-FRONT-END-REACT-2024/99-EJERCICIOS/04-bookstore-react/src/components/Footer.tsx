import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer () {
  return (
    <footer className='bg-emerald-500 px-4 py-4 flex items-center justify-center'>

      <nav className='flex items-center gap-4'>
        <a href="https://facebook.com" target='_blank' rel="noopener noreferer">
          <FaFacebookF size={25} color="#303030" />
        </a>
        <a href="https://instagram.com" target='_blank' rel="noopener noreferer">
          <FaInstagram size={25} color="#303030" />
        </a>
        <a href="https://linkedin.com" target='_blank' rel="noopener noreferer">
          <FaLinkedinIn size={25} color="#303030" />
        </a>
      </nav>

    </footer>
  );
}

export default Footer;
