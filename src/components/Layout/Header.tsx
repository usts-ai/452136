import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../UI/Button';
import { mockUser, notifications } from '../../data/mockData';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.lue).length;

  return (
    <motion.header 
      className="bg-white shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
    >
      <div className="flex items-center">
        <motion.div
          className="text-blue-600 font-bold text-2xl mr-2"
          whileHover={{ scale: 1.05 }}
        >
          FinSecure
        </motion.div>
        <motion.div 
          className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Votre banque en ligne sécurisée
        </motion.div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <motion.button
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {unreadCount > 0 && (
              <motion.span 
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                {unreadCount}
              </motion.span>
            )}
          </motion.button>
          
          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 border-b border-gray-100">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">Aucune notification</div>
                  ) : (
                    notifications.map((notif) => (
                      <motion.div 
                        key={notif.id}
                        className={`p-3 border-b border-gray-100 ${!notif.lue ? 'bg-blue-50' : ''}`}
                        whileHover={{ backgroundColor: '#f0f7ff' }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-medium text-sm">{notif.titre}</div>
                        <div className="text-xs text-gray-600 mt-1">{notif.message}</div>
                        <div className="text-xs text-gray-400 mt-1">{notif.date}</div>
                      </motion.div>
                    ))
                  )}
                </div>
                <div className="p-2 border-t border-gray-100 bg-gray-50 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-800">Voir toutes les notifications</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="relative group">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mr-2 text-right">
              <div className="text-sm font-semibold">{mockUser.prenom} {mockUser.nom}</div>
              <div className="text-xs text-gray-500">{mockUser.email}</div>
            </div>
            <motion.img 
              src={mockUser.avatar} 
              alt="Avatar" 
              className="w-9 h-9 rounded-full border-2 border-blue-100"
              whileHover={{ borderColor: '#3b82f6' }}
            />
          </motion.div>
          
          <motion.div 
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#profil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Mon profil</a>
            <a href="#parametres" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Paramètres</a>
            <a href="#aide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Aide et support</a>
            <div className="border-t border-gray-100 my-1"></div>
            <a href="#deconnexion" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Déconnexion</a>
          </motion.div>
        </div>
        
        <Button variant="primary" size="sm">
          Nouvelle opération
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
