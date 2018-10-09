import React from 'react';

const styles = {
  container: {
    marginTop: '64px',
    padding: '24px',
  },
  title: {
    borderBottom: '1px solid #004D67',
    color: '#004354',
  },
};

const About = () => (
  <div style={styles.container}>
    <h2 style={styles.title}>A propos</h2>
    <p>
      {"Cette application a été développée en ayant comme objectif de facilité \
    l'apprentissage des différents termes issues des techniques de l'aikido."}
    </p>
    <h2 style={styles.title}>Propriété intellectuelle</h2>
    <p>Cette application est sous licence MIT.</p>
    <p>Les images et dessins des techniques intégrées dans cette application sont la propriété de la <a href="http://www.aikido.com.fr/">FFAAA</a> et ne sauraient être reproduits librement sans demande préalable à la FFAAA et sans l’indication de la source. Il est possible de demander une autorisation de reproduction uniquement à des fins personnelles, associatives ou professionnelles, mais en aucun cas ne peut faire l’objet d’exploitation commerciale ou publicitaire.</p>
    <p>Les informations relatives aux stages proviennent du site <a href="http://www.stages-aikido.fr/">stages-aikido.fr</a></p>
    <h2 style={styles.title}>Développement</h2>
    <p>Par <a href="http://jbehuet.fr">Jérôme BEHUET</a></p>
    <br />
  </div>
);

export default About;
