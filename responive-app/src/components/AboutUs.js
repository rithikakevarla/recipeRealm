import React from 'react';
import './AboutUs.css'; // Link the CSS file
import CreditPage from './Creditpage';

const AboutSashakt = () => {
  return (
    <div className="PageContainer">
      <div className="TopSection">
        <div className="TextBox">
          <h1 className="Heading">Welcome to Recipe Realm!</h1>
          <p className="Paragraph">
            At Recipe Realm, we believe that every cook deserves to explore their
            culinary creativity in a way that sparks inspiration, encourages experimentation, and fosters a
            sense of accomplishment. Our team of six passionate individuals—Sudheep,
            Lalith, Yeshwanth, Tejaswini, Rithika, and Sripad—is dedicated to making
            your cooking experience an exhilarating adventure.
          </p>
          <p className="Paragraph">
            In the vibrant world of Recipe Realm, users embark on a thrilling journey
            where new recipes are discovered through play, and mastering the art of cooking
            becomes an exciting quest. Our carefully crafted features, delightful
            interface, and engaging content weave together to create an immersive
            experience that not only educates but also entertains.
          </p>
          <p className="Paragraph">
            Join us on this exciting expedition as we empower the chefs of tomorrow,
            one recipe at a time. Recipe Realm—because every cook deserves to be informed,
            inspired, and truly empowered!
          </p>
          <p className="Paragraph">🚀 Let the culinary adventure begin! 🚀</p>
        </div>
      </div>
      <div className="BottomSection">
        <CreditPage />
      </div>
    </div>
  );
};

export default AboutSashakt;
