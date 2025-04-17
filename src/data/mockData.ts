export interface Transaction {
  id: string;
  date: string;
  montant: number;
  description: string;
  categorie: string;
  type: 'credit' | 'debit';
}

export interface BankAccount {
  id: string;
  nom: string;
  numero: string;
  solde: number;
  devise: string;
  transactions: Transaction[];
}

export interface User {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  avatar: string;
  comptes: BankAccount[];
}

export const mockUser: User = {
  id: '1',
  nom: 'Dubois',
  prenom: 'Marie',
  email: 'marie.dubois@email.com',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  comptes: [
    {
      id: '101',
      nom: 'Compte Courant',
      numero: 'FR76 3000 4000 0100 0000 1234 567',
      solde: 2450.75,
      devise: '€',
      transactions: [
        {
          id: 't1',
          date: '2025-04-15',
          montant: 850.00,
          description: 'Salaire',
          categorie: 'Revenus',
          type: 'credit'
        },
        {
          id: 't2',
          date: '2025-04-14',
          montant: 45.99,
          description: 'Restaurant Le Gourmet',
          categorie: 'Alimentation',
          type: 'debit'
        },
        {
          id: 't3',
          date: '2025-04-12',
          montant: 120.50,
          description: 'Supermarché Carrefour',
          categorie: 'Courses',
          type: 'debit'
        },
        {
          id: 't4',
          date: '2025-04-10',
          montant: 65.00,
          description: 'SNCF',
          categorie: 'Transport',
          type: 'debit'
        },
        {
          id: 't5',
          date: '2025-04-08',
          montant: 200.00,
          description: 'Transfert Épargne',
          categorie: 'Épargne',
          type: 'debit'
        }
      ]
    },
    {
      id: '102',
      nom: 'Compte Épargne',
      numero: 'FR76 3000 4000 0100 0000 9876 543',
      solde: 15750.25,
      devise: '€',
      transactions: [
        {
          id: 't6',
          date: '2025-04-08',
          montant: 200.00,
          description: 'Transfert depuis Compte Courant',
          categorie: 'Transfert',
          type: 'credit'
        },
        {
          id: 't7',
          date: '2025-03-08',
          montant: 500.00,
          description: 'Transfert depuis Compte Courant',
          categorie: 'Transfert',
          type: 'credit'
        }
      ]
    }
  ]
};

export const chartData = {
  depenses: [
    { categorie: 'Alimentation', montant: 450 },
    { categorie: 'Transport', montant: 250 },
    { categorie: 'Logement', montant: 800 },
    { categorie: 'Loisirs', montant: 180 },
    { categorie: 'Santé', montant: 120 }
  ],
  evolution: [
    { mois: 'Janvier', solde: 1200 },
    { mois: 'Février', solde: 1350 },
    { mois: 'Mars', solde: 1100 },
    { mois: 'Avril', solde: 2450 }
  ]
};

export const notifications = [
  {
    id: 'n1',
    titre: 'Paiement reçu',
    message: 'Vous avez reçu un virement de 850,00 €',
    date: '2025-04-15',
    lue: false
  },
  {
    id: 'n2',
    titre: 'Prélèvement à venir',
    message: 'Un prélèvement de 45,00 € est prévu le 20/04/2025',
    date: '2025-04-14',
    lue: true
  },
  {
    id: 'n3',
    titre: 'Alerte seuil',
    message: 'Votre compte Épargne a dépassé 15 000 €',
    date: '2025-04-11',
    lue: true
  }
];

export const banques = [
  { id: 'b1', nom: 'BNP Paribas', logo: 'https://logo.clearbit.com/bnpparibas.com' },
  { id: 'b2', nom: 'Société Générale', logo: 'https://logo.clearbit.com/societegenerale.fr' },
  { id: 'b3', nom: 'Crédit Agricole', logo: 'https://logo.clearbit.com/credit-agricole.fr' },
  { id: 'b4', nom: 'La Banque Postale', logo: 'https://logo.clearbit.com/labanquepostale.fr' },
  { id: 'b5', nom: 'Boursorama Banque', logo: 'https://logo.clearbit.com/boursorama.com' }
];
