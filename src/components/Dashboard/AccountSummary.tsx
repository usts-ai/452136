import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { mockUser } from '../../data/mockData';

const AccountSummary: React.FC = () => {
  const totalBalance = mockUser.comptes.reduce((total, compte) => total + compte.solde, 0);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Mes Comptes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-blue-100">Solde Total</h3>
                <p className="text-2xl font-semibold mt-1">{totalBalance.toLocaleString('fr-FR')} €</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex items-center text-blue-100 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span>+8.2% ce mois-ci</span>
            </div>
          </Card>
        </motion.div>

        {mockUser.comptes.map((compte, index) => (
          <motion.div
            key={compte.id}
            custom={index + 1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="h-full">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-700">{compte.nom}</h3>
                  <p className="text-gray-500 text-sm">{compte.numero.slice(0, 10)}...</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xl font-semibold text-gray-800">{compte.solde.toLocaleString('fr-FR')} {compte.devise}</p>
              </div>
              
              {compte.transactions.length > 0 && (
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Dernière transaction</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{compte.transactions[0].description}</p>
                      <p className="text-xs text-gray-500">{compte.transactions[0].date}</p>
                    </div>
                    <p className={`text-sm font-medium ${compte.transactions[0].type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {compte.transactions[0].type === 'credit' ? '+' : '-'}
                      {compte.transactions[0].montant.toLocaleString('fr-FR')} €
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AccountSummary;
