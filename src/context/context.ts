import React from 'react';

export interface Context {
   total: number;
   searchFunction: (char: string) => void;
}

const Totalitems = React.createContext<Context>({total: 0, searchFunction: function () {}});
const ItemProvider = Totalitems.Provider;
const ItemConsumer = Totalitems.Consumer;

export {ItemProvider, ItemConsumer, Totalitems};