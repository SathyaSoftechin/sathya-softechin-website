import logo from "@/assets/sathya-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Sathya Softech-in" className="h-12" />
            <p className="text-sm text-gray-300">
              Building trust through technology
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300 mb-1">
              © 2025 Sathya Softech-in. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
