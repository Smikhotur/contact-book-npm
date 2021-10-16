import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ContactDetails} from '../../components/ListGroups/ContactDetails/ContactDetails.jsx';
import HeaderAllContacts from '../../components/AllContacts/HeaderAllContacts/HeaderAllContacts.jsx';

export const MyFavourites = ({config}) => {
  let pathname = window.location.pathname

  return (
    <section className="contact-book__main-content">
      <Switch>
        <Route path={`/contact-book/my-favourites/person`}>
          <ContactDetails config={config} />
        </Route>
        <Route path="/">
          <HeaderAllContacts config={config} />
        </Route>
      </Switch>
    </section>
  );
};
