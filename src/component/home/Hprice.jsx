import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Heading from "../common/heading/Heading";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false);

  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
    },
  });

  return (       
    
    <div className="faq-item">

      <div className="question" onClick={() => setOpen(!isOpen)}>
        {question}
      </div>
      <animated.div
        className="answer"
        style={{ height, opacity }}
      >
        {answer}
      </animated.div>
    </div>
  );
};

const FAQ = () => {

  const faqData = [
    {
      question: 'Quelles sont les services offertes?',
      answer: 'Les services offerts sont:STRATÉGIE DIGITALE ,COMMUNITY MANAGEMENT ,CRÉATION DE SITE INTERNET,PUBLICITÉ RÉSEAUX SOCIAUX'
      
      
    },
    {
      question: 'comment peut-on vous contacter?',
      answer: 'vous pouvez nous contacter via tél:55759343 ou bien nous envyer un mail :contact.greenix@gmail.com.',
    },
    {
      question: 'Est-ce que les formations sont-elles certifiées ?',
      answer: 'Oui,toutes nos formations sont certifiées.',
    },
    {
      question: 'Quelles sont les bases de Greenix?',
      answer: 'NOTRE VISION:Nous visons à être le leader sur le marché et une référence en marketing digital,NOS VALEURS : -	Ecoute -	Conseil -	Créativité  -	Satisfaction client'
    },
    // Add more FAQ items as needed
  ];

  return (
    <section className='testimonal padding'>
    <div className='container'>
      <Heading  title='Les questions les plus fréequentes' />
    <div className="k">
    <div className="faq-container">
      
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div></div></div></section>
  );
};

export default FAQ;
