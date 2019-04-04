import React from 'react';
import App, { Container } from 'next/app';
import { StateProvider } from '../context/state';

let initialState = {};
let reducer = {};
if(process.browser === true) {
    const jsonProducts = require('../static/stub/products.json');
    let localState = JSON.parse(window.localStorage.getItem('appStateLocal')) || [];
    initialState = {
        products: localState.products || jsonProducts,
        cartItems: localState.cartItems || []
    }
    
    if ( !localState.products ) {
        window.localStorage.setItem('appStateLocal', JSON.stringify(initialState));
    }
    reducer = (state, action) => {
        let naviState = {};
        switch (action.type) {
          case 'addToCart':
            //  IF / ELSE to find is the product already exists
            naviState = {
              ...state,
              cartItems: [ ...state.cartItems, action.cartItem ]
            }
            break;
          case 'clearCart':
            naviState = {
              ...state,
              cartItems: []
            }
            break;
          default:
            naviState = state;
        }
    
        // LocalStorage
        window.localStorage.setItem('appStateLocal', JSON.stringify(naviState));
        
        // Return State object
        return naviState;
    };
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Container>
                <Component {...pageProps} />
            </Container>
        </StateProvider>
    );
  }
}

export default MyApp;
