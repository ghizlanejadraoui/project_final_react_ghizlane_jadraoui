import { createContext, useState } from "react";
import Item3 from "../../src/assets/image/item-03.jpg";
import Item4 from "../../src/assets/image/item-04.jpg";
import Item5 from "../../src/assets/image/item-05.jpg";
import Item6 from "../../src/assets/image/item-06.jpg";
import Item7 from "../../src/assets/image/item-07.jpg";
import Item8 from "../../src/assets/image/item-08.jpg";
import Item9 from "../../src/assets/image/item-09.jpg";
import Item10 from "../../src/assets/image/item-10.jpg";
import Item11 from "../../src/assets/image/item-11.jpg";
import Item12 from "../../src/assets/image/item-12.jpg";
import Item13 from "../../src/assets/image/item-13.jpg";
import Item14 from "../../src/assets/image/item-14.jpg";
import Item15 from "../../src/assets/image/item-15.jpg";
import Item16 from "../../src/assets/image/men.webp";
import Item19 from "../../src/assets/image/support.webp";

 


export const MyContext = createContext()
export const MyProvider = ({ children }) => {


    const [marketPlaceDataBase, setMarketPlaceDataBase] = useState([
        {
            title: "Fashion Men's Watch",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item5,
            img1:Item5, 
            img2:Item5, 
            img3:Item5, 
            img4:Item5, 
            img5:Item5, 
            description: "Fashion Men's Watch Outdoor Sports Business Men's Wrist Watch, Ideal choice for Gifts.",
            Categorie: "Accessoire",
            gender: "men",
            quantity:1,
            id:2,
            type: "old"
        },
        {
            title: "Boxy3 T-Shirt v",
            price: "7.55",
            AncienPrice: "17.49",
            image: Item14,
            img1:Item14, 
            img2:Item14, 
            img3:Item14, 
            img4:Item14, 
            img5:Item14, 
            description: "Ultralight Men's Crew Neck T-Shirt - Quick Drying, Sweat Absorbing, Breathable Sport Shirt For Fitness, Gym, And Running.",
            Categorie: "dress",
            gender: "men",
            quantity:1,
            id:3,
            type: "old"
        },
        {
            title: "Blue Ripped Short",
            price: "11.04",
            AncienPrice: "31.99",
            image: Item7,
            img1:Item7, 
            img2:Item7, 
            img3:Item7, 
            img4:Item7, 
            img5:Item7, 
            description: "Blue Ripped Short Denim Pants, Raw Hem Distressed Slash Pockets Slim Fit Casual Short Denim Trousers, Women's Denim Jeans & Clothing.",
            Categorie: "dress",
            gender: "women",
            quantity:1,
            id:4,
            type: "old"
        },
        {
            title: "Women's Sneakers",
            price: "7.97",
            AncienPrice: "65.74",
            image: Item6,
            img1:Item6, 
            img2:Item6, 
            img3:Item6, 
            img4:Item6, 
            img5:Item6, 
            description: "Women's Fashion Flat Skate Shoes, All-Match Round Toe Lace Up Low Top Sneakers, All-Match Walking Trainers.",
            Categorie: "shoes",
            gender: "women",
            quantity:1,
            id:5,
            type: "new"
        },
        {
            title: "Casual Fashion Top Shirt",
            price: "5.78",
            AncienPrice: "19.96",
            image: Item10,
            img1:Item10, 
            img2:Item10, 
            img3:Item10, 
            img4:Item10, 
            img5:Item10, 
            description: "Casual Fashion Top Shirt, Letter Print Short Sleeve T-Shirt Round Neck T-Shirts, Women's Clothing.",
            Categorie: "dress",
            gender: "women",
            quantity:1,
            id:6,
            type: "new"

        },
        {
            title: "Curvy Skinny Jean",
            price: "13.94",
            AncienPrice: "77.38",
            image: Item13,
            img1:Item13, 
            img2:Item13, 
            img3:Item13, 
            img4:Item13, 
            img5:Item13, 
            description: "High Rise Curvy Skinny Jeans, Light Blue Long Plicated Legs Denim Pants, Women's Denim Jeans & Clothing.",
            Categorie: "dress",
            gender: "women",
            quantity:1,
            id:7,
            type: "new"

        },
       
        {
            title: "Boxyi T-Shirt v",
            price: "11.80",
            AncienPrice: "55.10",
            image: Item12,
            img1:Item12, 
            img2:Item12, 
            img3:Item12, 
            img4:Item12, 
            img5:Item12, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
            quantity:1,
            id:8,
            type: "sale"

        },
        {
            title: "Electric Razor",
            price: "23.00",
            AncienPrice: "90.00",
            image: Item16,
            img1:Item16, 
            img2:Item16, 
            img3:Item16, 
            img4:Item16, 
            img5:Item16, 
            description: "Electric Razor and Strong Shaver For Men, Dry&Wet 3D Mens Electric Shaver, Rechargeable Rotary Shaving Machines, Father's Day Gift For Father Dad Men Husband Boyfriend",
            Categorie: "dress",
            gender: "men",
            quantity:1,
            id:9,
            type: "sale"

        },
        {
            title: "Casual Short Sleeve",
            price: "4.87",
            AncienPrice: "6.69",
            image: Item14,
            img1:Item14, 
            img2:Item14, 
            img3:Item14, 
            img4:Item14, 
            img5:Item14, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "men",
            quantity:1,
            id:10,
            type: "sale"
        },
        

    ])


    const [dataBase, setDataBase] = useState([
        
    ])

    const [connected, setConnected] = useState([])
  
    return (
        <>
            <MyContext.Provider value={[marketPlaceDataBase, setMarketPlaceDataBase]}>
                {children}
            </MyContext.Provider>
        </>
    )
}

