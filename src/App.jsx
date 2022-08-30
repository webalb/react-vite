import React from 'react';
import styles from './style';

import {  Navbar, Business, Billing, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Herro, Stats, Testimonials, } from './components';

const App = () => (
    <div className='w-full overflow-hidden bg-primary'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Herro/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer/>
        </div>
      </div>



    </div>

  ); 


export default App