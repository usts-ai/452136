import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { mockUser } from '../../data/mockData';

const RecentTransactions: React.FC = () => {
  // Rassembler toutes les transactions de tous les comptes
  const allTransactions = mockUser.comptes.flatMap(compte => 
    compte.transactions.map(transaction => ({
      ...transaction,
      compte: compte.nom
    }))
  );
  
  // Trier par date (plus récente en premier)
  const sortedTransactions = [...allTransactions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 8); // Limiter à 8 transactions

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Transactions Récentes</h2>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
          Voir tout
        </button>
      </div>
      
      <div className="space-y-3">
        {sortedTransactions.map((transaction, index) => (
          <motion.div 
            key={transaction.id}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ x: 5 }}
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                transaction.type === 'credit' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}>
                {transaction.type === 'credit' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <div>
                <p className="font-medium text-gray-800">{transaction.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{transaction.compte}</span>
                  <span className="mx-1">•</span>
                  <span>{transaction.date}</span>
                  <span className="mx-1">•</span>
                  <span className="text-gray-600 font-medium">{transaction.categorie}</span>
                </div>
              </div>
            </div>
            
            <div className={`font-medium ${
              transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'credit' ? '+' : '-'}
              {transaction.montant.toLocaleString('fr-FR')} €
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 text-center">
        <motion.button 
          className="text-blue-600 font-medium text-sm py-2 hover:text-blue-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Télécharger le relevé
        </motion.button>
      </div>
    </Card>
  );
};

export default RecentTransactions;
