import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { banques } from '../../data/mockData';

const QuickActions: React.FC = () => {
  const actions = [
    {
      id: 'newTransfer',
      title: 'Nouveau virement',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      color: 'bg-blue-500'
    },
    {
      id: 'addAccount',
      title: 'Ajouter un compte',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      color: 'bg-green-500'
    },
    {
      id: 'cardSettings',
      title: 'Gérer mes cartes',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'bg-purple-500'
    },
    {
      id: 'contact',
      title: 'Contacter un conseiller',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      <Card>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions Rapides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {actions.map((action, index) => (
            <motion.button
              key={action.id}
              className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${action.color} text-white w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                {action.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{action.title}</span>
            </motion.button>
          ))}
        </div>
      </Card>
      
      <Card>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Mes Banques Connectées</h2>
        <div className="space-y-3">
          {banques.map((banque, index) => (
            <motion.div
              key={banque.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center mr-3 border border-gray-200">
                  <img 
                    src={banque.logo} 
                    alt={banque.nom} 
                    className="w-7 h-7 object-contain"
                    onError={(e) => {
                      // Remplacer par les initiales en cas d'erreur de chargement
                      const target = e.target as HTMLElement;
                      target.parentElement!.innerHTML = banque.nom.charAt(0);
                    }}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{banque.nom}</p>
                  <p className="text-xs text-green-600">Connecté</p>
                </div>
              </div>
              
              <motion.button 
                className="text-blue-600 hover:text-blue-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          className="mt-4 w-full py-2 border border-dashed border-blue-300 rounded-lg text-blue-600 flex items-center justify-center hover:bg-blue-50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Connecter une nouvelle banque
        </motion.button>
      </Card>
    </div>
  );
};

export default QuickActions;
