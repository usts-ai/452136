import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { chartData } from '../../data/mockData';

const DataVisualization: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'depenses' | 'evolution'>('depenses');
  
  // Trouver la valeur maximale pour normaliser les graphiques
  const maxDepense = Math.max(...chartData.depenses.map(item => item.montant));
  const maxEvolution = Math.max(...chartData.evolution.map(item => item.solde));

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Analyse Financière</h2>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeChart === 'depenses' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
            onClick={() => setActiveChart('depenses')}
          >
            Dépenses
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeChart === 'evolution' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
            onClick={() => setActiveChart('evolution')}
          >
            Évolution
          </button>
        </div>
      </div>
      
      <div className="h-64">
        {activeChart === 'depenses' ? (
          <div className="h-full flex items-end space-x-6">
            {chartData.depenses.map((item, index) => (
              <motion.div 
                key={item.categorie}
                className="flex-1 flex flex-col items-center justify-end h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div 
                  className="w-full bg-blue-500 rounded-t-lg relative group"
                  style={{ 
                    height: `${(item.montant / maxDepense) * 100}%`,
                    backgroundColor: `hsl(${210 + index * 15}, 80%, 60%)`
                  }}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: `hsl(${210 + index * 15}, 90%, 50%)`
                  }}
                  layout
                >
                  <motion.div 
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-1 px-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  >
                    {item.montant} €
                  </motion.div>
                </motion.div>
                <div className="text-xs font-medium text-gray-600 mt-2 truncate w-full text-center">
                  {item.categorie}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="h-full relative">
            <div className="absolute inset-0 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                    transition: { duration: 1.5, ease: "easeInOut" }
                  }}
                  d={`M 0,${200 - (chartData.evolution[0].solde / maxEvolution) * 200} ${chartData.evolution.map((point, i) => {
                    const x = (i / (chartData.evolution.length - 1)) * 400;
                    const y = 200 - (point.solde / maxEvolution) * 200;
                    return `L ${x},${y}`;
                  }).join(' ')}`}
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="absolute bottom-0 w-full flex justify-between px-2 text-xs text-gray-500">
              {chartData.evolution.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.mois.slice(0, 3)}
                </motion.div>
              ))}
            </div>
            
            <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-between py-2 text-xs text-gray-500">
              <div>{maxEvolution} €</div>
              <div>{Math.round(maxEvolution / 2)} €</div>
              <div>0 €</div>
            </div>
            
            {chartData.evolution.map((point, index) => (
              <motion.div
                key={index}
                className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-md"
                style={{
                  left: `${(index / (chartData.evolution.length - 1)) * 100}%`,
                  bottom: `${(point.solde / maxEvolution) * 100}%`,
                  transform: 'translate(-50%, 50%)'
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.5, backgroundColor: '#2563eb' }}
              >
                <motion.div 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-1 px-2 rounded text-xs opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {point.solde} €
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          {activeChart === 'depenses' 
            ? 'Répartition de vos dépenses par catégorie pour le mois en cours'
            : 'Évolution de votre solde total sur les 4 derniers mois'
          }
        </p>
      </div>
    </Card>
  );
};

export default DataVisualization;
