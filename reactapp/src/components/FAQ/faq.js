import React from 'react';
import './faq.css';

const Accordion = () => {
  return (
    <div >
        <div className='main'>
      <h1>Frequently Asked Questions</h1>
      <div className="row">
        <div className="col">
         
          <div className='outer'>
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="chck1" />
              <label className="tab-label" htmlFor="chck1">How can I book a multi-sector itinerary?</label>
              <div className="tab-content">
              Multi-sector hotel rooms and vacations can be booked by calling us on +91 92111 77444 (standard charges apply)
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck2" />
              <label className="tab-label" htmlFor="chck2">How do I know that my booking is confirmed?</label>
              <div className="tab-content">
              Whether a booking is made online or over the phone, a confirmation would be sent to you 
              via e-mail, which would include your reservation number and travel details.
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck3" />
              <label className="tab-label" htmlFor="chck3"> Why do I have to book my onward and 
              return trips differently for combination flights? </label>
              <div className="tab-content">
              If you select combination flights, you would be re-directed to the individual airlines’ site.
               [For eg – for a Delhi-Mumbai-Delhi trip, onward travel (Delhi-Mumbai) on Jet Airways and return travel (Mumbai-Delhi) on Kingfisher Airlines, you would be required to book individually on Jet Airways and Kingfisher Airlines websites.]

              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck4" />
              <label className="tab-label" htmlFor="chck4">How do I cancel or change my flight 
              reservation?</label>
              <div className="tab-content">
              We only search the flights for you. If you want to change your booking you need to
               contact the airline partner where you bought your ticket. Our partners section has a
               compiled list of phone numbers and addresses of all airline partners we search
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck5" />
              <label className="tab-label" htmlFor="chck5">Can I change my hotel booking?</label>
              <div className="tab-content">
              You may change your hotel reservation details. However, certain charges as 
              per the hotel policies might be applicable.

              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck6" />
              <label className="tab-label" htmlFor="chck6">What are the terms and conditions that 
              will apply to all bookings?</label>
              <div className="tab-content">
              We only search the flights for you. If you want to change your booking you need to
               contact the airline partner where you bought your ticket. Our partners section has a
               compiled list of phone numbers and addresses of all airline partners we search
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Accordion;
