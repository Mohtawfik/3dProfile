import React from 'react';
import ContactPage from '../components/ContactPage';
import InnerLayout from './InnerLayout';

const ContactPageRoute = () => (
  <InnerLayout>
    <div className="contact-container">
      <ContactPage />
    </div>
  </InnerLayout>
);

export default ContactPageRoute;
