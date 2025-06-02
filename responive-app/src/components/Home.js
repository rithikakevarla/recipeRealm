import React from 'react';
import './Home.css';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';

const Home = () => {
  return (
    <main id="home" className='home-div' style={{ overflowY: 'auto', maxHeight: '100vh', padding: '20px' }}>
      <section className='div1' id="whats-cooking" style={{ marginBottom: '40px' }}>
        <div className='container' id="container-1">
          <h1>What's Cooking? 🍳</h1>
          <h2 style={{ fontSize: '1.1rem', color: '#6c584c', marginBottom: '20px' }}>
            Here’s why Recipe-Realm is your new kitchen BFF.
          </h2>
          <p><strong>✨ Smart Recipes, Just for You:</strong> Tired of Googling what to make with random leftovers? Enter your ingredients and we’ll whip up a personalized recipe faster than you can say “microwave magic.”</p>
          <p><strong>🔍 Know Your Food:</strong> Get the 411 on any dish — cooking time, nutrition, tips, and even those grandma-style pro hacks.</p>
          <p><strong>🤖 Chat with Annapurna:</strong> Our AI chef BFF isn’t just smart — she’s helpful, friendly, and won’t judge your instant noodle habits.</p>
        </div>
        <div className='lower'></div>
      </section>

      <section className='div2' id="how-to-use">
        <div className='container' id="container-2">
          <h1>How-to-Use</h1>
          <p>1. Enter each ingredient in the search bar and press enter if you find it in the auto-suggest list. Check if all the ingredients appear below in the yellow boxes. After ensuring that all the items have been added, click the 'Generate Recipe' button. Your recipe will be generated based on the selected ingredients.</p>
          <img src={pic1} alt="Search Bar" />
          <p>2. Select any dish.</p>
          <img src={pic2} alt="Yellow Boxes" />
          <p>3. Use the chatbot for any queries</p>
          <img src={pic3} alt="Generate Button" />
        </div>
        <div className='lower'></div>
      </section>
    </main>
  );
};

export default Home;
