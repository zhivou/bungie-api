import React from 'react'
import { Popup } from 'semantic-ui-react'

const ItemInfo = (props) => (
    <Popup
        trigger={ props.trigger }
        content={ ShowFutureLaunches(props) }
        basic
    />
);

const ShowFutureLaunches = (props) => {
    return(
        <div>
            {props.item.itemTypeAndTierDisplayName}
        </div>
    )
};

export default ItemInfo