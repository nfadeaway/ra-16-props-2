import {ReactElement} from "react";


const Listing = (items: object = {items: []}): ReactElement => {
    type VerifedItem = {
        listing_id: number,
        url: string,
        MainImage: {
            url_570xN: string,
        }
        title: string,
        currency_code: string,
        price: string,
        quantity: number
    };

    const verifedItems: VerifedItem[] = [];

    if (items.items && items.items.length > 0) {
        items.items.forEach((item: Object): void => {
            if (item.state === "active") {
                verifedItems.push(
                    {
                        listing_id: item.listing_id,
                        url: item.url,
                        MainImage: {
                            url_570xN: item.MainImage.url_570xN,
                        },
                        title: item.title,
                        currency_code: item.currency_code,
                        price: item.price,
                        quantity: item.quantity,
                    }
                )
            }
        });
    }

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

    if (verifedItems.length === 0) {
        return <></>
    }

    return (
        <div className="item-list">
            {verifedItems.map((verifedItem: VerifedItem) => renderItem(verifedItem))}
        </div>
    );
};

export default Listing;