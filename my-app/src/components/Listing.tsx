import {ReactElement} from "react";
import { VerifedItem } from "../App.tsx";


const Listing = (items: {items: VerifedItem[]}): ReactElement => {

    const renderItem = (item: VerifedItem): ReactElement => {
        const getPrice = (currencyCode: string, itemPrice: string): string => {
            if (currencyCode === "USD") return `$ ${itemPrice}`
            else if (currencyCode === "EUR") return `€ ${itemPrice}`
            return `${itemPrice} ${currencyCode}`
        }

        const getQuantityColorClass = (itemQuantity: number): string => {
            if (itemQuantity <= 10) return "item-quantity level-low"
            else if (itemQuantity <= 20) return "item-quantity level-medium"
            return "item-quantity level-high"
        }

        return (
            <div className="item" key={item.listing_id}>
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} alt=""/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">{getPrice(item.currency_code, item.price)}</p>
                    <p className={getQuantityColorClass(item.quantity)}>{item.quantity}</p>
                </div>
            </div>
        )
    }

    if (items.items.length === 0) {
        return <></>
    }

    return (
        <div className="item-list">
            {items.items.map((verifedItem: VerifedItem) => renderItem(verifedItem))}
        </div>
    );
};

export default Listing;