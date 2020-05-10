import React from 'react';

export interface Context {
    total: number;
    data: any;
}

const Totalitems = React.createContext<Context>({total: 0, data: ''});
const ItemProvider = Totalitems.Provider;
const ItemConsumer = Totalitems.Consumer;

export { ItemProvider, ItemConsumer, Totalitems };