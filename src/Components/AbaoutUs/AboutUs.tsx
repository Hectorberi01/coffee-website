import React from 'react';
import './AboutUs.css';


const owners = [
  {
    name: 'Sabrina Akretche',
    photo: '/images/Sabrina.png',
    contact: {
      phone: '+33 6 38 35 33 29',
      address: 'Paris 18-ème',
      email: 'sabrina.ak@gmail.com'
    },
    education: [
      'Bac S générale 2011',
      'Licence en économie gestion en 2014',
      'Mastere en communication Digitale et marketing chez Talis 2016'
    ],
    interests: [
      { name: 'Voyage', level: 3 },
      { name: 'Cinéma', level: 2 },
      { name: 'Musique', level: 2 }
    ],
    experience: [
      'Responsable Marketing, METRO 2016/2019',
      'Responsable Marketing chez Bouygues 2019/2021'
    ],
    description: 'Je suis Sabrina, responsable de la communication marketing...'
  },
  {
    name: 'Kahina Kadoum',
    photo: 'owner2',
    contact: {
      phone: '+33 7 65 45 87 01',
      address: 'Paris 16-ème',
      email: 'kahinakadoum@gmail.com'
    },
    education: [
      'Bac S générale en 2015',
      'BTS MCO en 2018 Campus du Lac BDX',
      'Bachelor, responsable de la distribution, Campus du Lac BDX',
      'Mastère en gestion de projet et finance chez Talis'
    ],
    interests: [
      { name: 'Photographie', level: 2 },
      { name: 'Sport', level: 2 },
      { name: 'Voyage', level: 3 }
    ],
    experience: [
      'Responsable magasin STARBUCKS 2020/2023'
    ],
    description: "Je m'appelle KAHINA KADOUM, je m'occuperai de la partie finance..."
  },
  {
    name: 'Diagne Amy Colle',
    photo: 'owner3',
    contact: {
      phone: '+33 6 56 78 64 28',
      address: 'île de France/Val d’oise',
      email: 'amy.97@gmail.com'
    },
    education: [
      'Bac L2 Science économique et sociale 2015',
      'Licence LEA Anglais/Espagnol(Commerce international) PARIS 3 2016-2019',
      'Mastère Management de la Stratégie et de la Performance Commerciale 2020/2022'
    ],
    interests: [
      { name: 'Cuisine', level: 3 },
      { name: 'Voyage', level: 2 },
      { name: 'Cinéma', level: 2 }
    ],
    experience: [
      'Employée polyvalente chez Momen’Tea (job Etudiant ), 2018/2022'
    ],
    description: "Je m'appelle AMY et j'occuperai la fonction de chargée de production..."
  },
  {
    name: 'Fahad Atanda',
    photo: 'owner4',
    contact: {
      phone: '+33 7 88 55 20 01',
      address: 'Lille',
      email: 'fahad.55@gmail.com'
    },
    education: [
      'BAC en 2015',
      'Licence en Marketing digitale à l’université de Strasbourg en 2018',
      'Master Communication Digital chez Talis en 2021'
    ],
    interests: [
      { name: 'Football', level: 3 },
      { name: 'Cuisine', level: 2 },
      { name: 'Voyage', level: 2 }
    ],
    experience: [
      'Responsable Management et performance commerciale chez Macdonald’s 2021/2024'
    ],
    description: "Je m'appelle Fahad, je suis manager avec une part de 15% dans l'entreprise..."
  },
  {
    name: 'Feres Tarraz',
    photo: 'owner5',
    contact: {
      phone: '+33 7 69 30 56 24',
      address: 'Bordeaux',
      email: 'fares.tarraz@gmail.com'
    },
    education: [
      'BAC en 2016',
      'BTS MUC en 2018, lycée saint joseph la salle Paris'
    ],
    interests: [
      { name: 'Rugby', level: 3 },
      { name: 'Cinéma', level: 2 },
      { name: 'Musique', level: 2 }
    ],
    experience: [
      'Responsable en Salle en apprentissage chez Marrakech FOOD 2016/2018',
      'Responsable du restaurant Marrakech FOOD 2018/2024'
    ],
    description: "Je m'appelle FARES TARRAZ et je suis le Gérant de l’entreprise..."
  }
];

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      {owners.map((owner) => (
        <div key={owner.name} className="owner-section">
          <div className="owner-photo">
            <img src={owner.photo} alt={owner.name} />
          </div>
          <div className="owner-details">
            <h3 className="owner-name">{owner.name}</h3>
            <div className="owner-contact">
              <h3>Contact</h3>
              <ul>
                <li>{owner.contact.phone}</li>
                <li>{owner.contact.address}</li>
                <li>{owner.contact.email}</li>
              </ul>
            </div>
            <div className="owner-education">
              <h3>Formation</h3>
              <ul>
                {owner.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
            <div className="owner-interests">
              <h3>Centres d'intérêt</h3>
              <ul>
                {owner.interests.map((interest, index) => (
                  <li key={index}>
                    {interest.name}
                    <div className="interest-bar">
                      <span className="level" style={{ width: `${interest.level * 33}%` }}></span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="owner-experience">
              <h3>Expérience professionnelle</h3>
              <ul>
                {owner.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
            <div className="owner-description">
              <h3>Qui suis-je</h3>
              <p>{owner.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutUs;
