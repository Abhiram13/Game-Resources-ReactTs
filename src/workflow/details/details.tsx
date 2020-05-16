import React, { useEffect, useState } from 'react';
import { getRequest } from '../../helpers/helper';
import { Item } from '../home/home';

const Details:React.FunctionComponent = ():React.ReactElement => {

    const [item, getItem] = useState<Item | object>({});

    // below method will only be called when Component gets Mounted
    useEffect(() => {
        const url = `${window.location.pathname.split('/')[1]}/details`;

        getRequest(url).then((response:Item) => {
            getItem(response as Item);
        });
    }, []);

    console.log(item);
    return (
        <h3>Details Page</h3>
    )
}

export default Details;