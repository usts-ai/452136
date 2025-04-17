import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Footer from '../../components/Layout/Footer';
import AccountSummary from '../../components/Dashboard/AccountSummary';
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import DataVisualization from '../../components/Dashboard/DataVisualization';
import QuickActions from '../../components/Dashboard/QuickActions';

const DashboardPage: React.FC = () => {
  useEffect(() => {
    // Ajouter un effet de scroll au chargement pour une animation plus fluide
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
            <p className="text-gray-600">Bienvenue sur FinSecure, votre espace bancaire sécurisé.</p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <AccountSummary />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentTransactions />
              <DataVisualization />
            </div>
            
            <QuickActions />
            
            {/* Section de sécurité animée */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start">
                <div className="mr-4 bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Sécurité renforcée</h3>
                  <p className="text-gray-600 mb-3">
                    Votre sécurité est notre priorité. Nous utilisons des technologies de chiffrement avancées conformes à la DSP2 (Directive sur les Services de Paiement) pour protéger vos données et transactions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.span 
                      className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs"
                      whileHover={{ scale: 1.1, backgroundColor: "#e9d5ff" }}
                    >
                      Authentification forte
                    </motion.span>
                    <motion.span 
                      className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                      whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                    >
                      Conformité RGPD
                    </motion.span>
                    <motion.span 
                      className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs"
                      whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                    >
                      Chiffrement des données
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
