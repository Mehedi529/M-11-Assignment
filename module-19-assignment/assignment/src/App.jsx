import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import Contacts from './components/Contacts/Contacts';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ThankYou from './components/ThankYou/ThankYou';
import NotFound from './components/NotFound/NotFound';
import FAQ from './components/FAQ/FAQ';
import Reviews from './components/Reviews/Reviews';
import SearchResults from './components/SearchResults/SearchResults';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import AccountRegistration from './components/AccountRegistration/AccountRegistration';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/faq" component={FAQ} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
        <Route path="/account-registration" component={AccountRegistration} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import Contacts from './components/Contacts/Contacts';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ThankYou from './components/ThankYou/ThankYou';
import NotFound from './components/NotFound/NotFound';
import FAQ from './components/FAQ/FAQ';
import Reviews from './components/Reviews/Reviews';
import SearchResults from './components/SearchResults/SearchResults';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import AccountRegistration from './components/AccountRegistration/AccountRegistration';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/faq" component={FAQ} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
        <Route path="/account-registration" component={AccountRegistration} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
