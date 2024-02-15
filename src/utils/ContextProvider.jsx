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

 


export const MyContext = createContext()
export const MyProvider = ({ children }) => {


    const [marketPlaceDataBase, setMarketPlaceDataBase] = useState([
        {
            title: "Boxy T-Shirt ",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item3,
            img1:Item3, 
            img2:Item3, 
            img3:Item3, 
            img4:Item3, 
            img5:Item3, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxy4 T-Shirt",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item5,
            img1:Item5, 
            img2:Item5, 
            img3:Item5, 
            img4:Item5, 
            img5:Item5, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxy3 T-Shirt v",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item6,
            img1:Item6, 
            img2:Item6, 
            img3:Item6, 
            img4:Item6, 
            img5:Item6, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxy5 T-Shirt v",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item7,
            img1:Item7, 
            img2:Item7, 
            img3:Item7, 
            img4:Item7, 
            img5:Item7, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxy6 T-Shirt v",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item9,
            img1:Item9, 
            img2:Item9, 
            img3:Item9, 
            img4:Item9, 
            img5:Item9, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxy8 T-Shirt v",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item10,
            img1:Item10, 
            img2:Item10, 
            img3:Item10, 
            img4:Item10, 
            img5:Item10, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxy9 T-Shirt v",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item11,
            img1:Item11, 
            img2:Item11, 
            img3:Item11, 
            img4:Item11, 
            img5:Item11, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxyi T-Shirt v",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item12,
            img1:Item12, 
            img2:Item12, 
            img3:Item12, 
            img4:Item12, 
            img5:Item12, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
        },
        {
            title: "Boxy T-Shirt l",
            price: "20.00",
            AncienPrice: "70.00",
            image: Item13,
            img1:Item13, 
            img2:Item13, 
            img3:Item13, 
            img4:Item13, 
            img5:Item13, 
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            Categorie: "dress",
            gender: "women",
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

