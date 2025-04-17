import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="bg-gray-50 py-6 border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-gray-800 text-lg">FinSecure</h4>
            <p className="text-sm text-gray-600">
              Votre plateforme bancaire sécurisée pour gérer vos finances en toute confiance, avec une protection de vos données conforme aux normes RGPD.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-gray-800">Produits</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#comptes" className="hover:text-blue-600">Comptes bancaires</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#epargne" className="hover:text-blue-600">Épargne</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#credits" className="hover:text-blue-600">Crédits</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#assurances" className="hover:text-blue-600">Assurances</a>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-gray-800">Ressources</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#aide" className="hover:text-blue-600">Centre d'aide</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#securite" className="hover:text-blue-600">Sécurité</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#blog" className="hover:text-blue-600">Blog</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#contact" className="hover:text-blue-600">Nous contacter</a>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-bold text-gray-800">Légal</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#conditions" className="hover:text-blue-600">Conditions d'utilisation</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#confidentialite" className="hover:text-blue-600">Politique de confidentialité</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#cookies" className="hover:text-blue-600">Gestion des cookies</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>
                <a href="#mentions" className="hover:text-blue-600">Mentions légales</a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            © {currentYear} FinSecure. Tous droits réservés.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <motion.a 
              href="#facebook"
              whileHover={{ y: -3, color: "#4267B2" }}
              className="hover:text-blue-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </motion.a>
            
            <motion.a 
              href="#twitter"
              whileHover={{ y: -3, color: "#1DA1F2" }}
              className="hover:text-blue-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </motion.a>
            
            <motion.a 
              href="#linkedin"
              whileHover={{ y: -3, color: "#0A66C2" }}
              className="hover:text-blue-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            
            <motion.a 
              href="#instagram"
              whileHover={{ y: -3, color: "#E1306C" }}
              className="hover:text-pink-500"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
