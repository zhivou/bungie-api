import React from 'react'
import { Popup } from 'semantic-ui-react'
import './ItemInfo.scss'

const style = {
    borderRadius: 0,
    borderColor: "transparent",
    padding: '0',
    background: 'black',
    boxShadow: '0 9px 25px rgba(0, 0, 0, 0.25)',
    opacity: '0.97'
};

const ItemInfo = (props) => (
    <Popup
        trigger={ props.trigger }
        content={ ShowFutureLaunches(props) }
        style={style}
        basic
    />
);

const ShowFutureLaunches = (props) => {
    return(
        <div className="pop-up-wrapper">
            <div className="item-header" id={ props.item.inventory.tierTypeName }>
                <div className="first-line">{ props.item.itemTypeAndTierDisplayName }</div>
                <div className="second-line">{ props.item.displayProperties.name }</div>
            </div>
            <div className="item-footer">
                <div className="footer-line">{ props.item.displayProperties.description }</div>
                <div className="footer-line">{ props.item.inventory.tierTypeName }</div>
            </div>
        </div>
    )
};

export default ItemInfo