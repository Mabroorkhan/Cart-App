import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    data: [{
        id: nanoid(),
        category: "Car",
        title: "Honda City 2005 Automatic",
        price: 15000,
        details: `Honda city 
            Model 2005
            Automatic transmission 
            New engine installed 
            Inner original 
            Outside shower
            Ac ok
            All documents clear 
            Demand 10 lac`,
        variants: [{
            type: "color",
            options: [{ name: "Gun Metallic", price: 90 },
            { name: "White", price: 100 },
            { name: "Blue Metallic", price: 101 },
            { name: "Red", price: 105 }
            ]
        }, {
            type: "Horse Power",
            options: [{ name: "1300cc", price: 110 },
            { name: "1500cc", price: 150 },
            { name: "1600cc", price: 115 },
            { name: "1800cc", price: 109 }
            ]
        }
        ]
    },
    {
        id: nanoid(),
        category: "Car",
        title: "Honda Civic 2013 Automatic",
        price: 21800,
        details: `Honda Civic 2013 triborn 
            Complete file 
            2 piece touchup 
            Tax paid 2018 June remaining tax 55000
            Demand 21,80000`,
        color: ["White", "Pearl White", "Black", "Red"],
        variants: [{
            type: "color",
            options: [{ name: "White", price: 800 },
            { name: "Perl White", price: 900 },
            { name: "Black", price: 220 },
            { name: "Red", price: 218 }
            ]
        }]
    },
    {
        id: nanoid(),
        category: "Cell Phone",
        title: "Samsung Galaxy S8+",
        price: 32000,
        details: `Samsung Galaxy S8+ Fresh
            Fresh Stock
            USA Variant
            PTA Approved
            4 gb 64 gb
            Snapdragon 835`,
        variants: [{
            type: "color",
            options: [
                { name: "red", price: 12 },
                { name: "black", price: 22 }
            ]
        }]
    },
    {
        id: nanoid(),
        category: "Cell Phone",
        title: "Samsung Galaxy Note 8",
        price: 38000,
        details: `Samsung Galaxy Note 8 Fresh
            Fresh Stock
            USA Variant
            PTA Approved
            6 gb 64 gb
            Snapdragon 835`,
        variants: [{
            type: "color",
            options: [{ name: "Black", price: 300 },
            { name: "White", price: 200 },
            { name: "Golden", price: 120 },
            { name: "Brown", price: 380 }
            ]
        }]
    },
    {
        id: nanoid(),
        category: "Cell Phone",
        title: "Realme 5 pro",
        price: 35000,
        details: `Realme 5 pro
            box pack available
            snapdragon 712
            VOOC 3.0 Fast charging`,
        variants: [{
            type: "Memory",
            options: [{ name: "6gb 64b", price: 30 },
            { name: "6gb 128gb", price: 20 },
            { name: "8gb 64gb", price: 40 },
            { name: "8gb 128gb", price: 50 }
            ]
        }]
    },
    {
        id: nanoid(),
        category: "Electronic",
        title: "huawie EPON/GPON Router",
        price: 4700,
        details: `Huawie EPON/GPON Router stock available in resonable rates 
            Quality Guaranteed
            High Speed Conectivity
            No Lag No Hang problem
            Wide area wifi coverage`,
        variants: [{
            type: "color",
            options: [{ name: "White", price: 400 },
            { name: "Black", price: 650 }
            ]
        }]
    },
    {
        id: nanoid(),
        category: "Jewellery",
        title: "Titanium Ring",
        price: 1000,
        details: `Titanium carbon coated ring 
            Casual use and party usable
            best quality
            diffrent sizes and designs available`,
        variants: [{
            type: "color",
            options: [{ name: "Black", price: 10 },
            { name: "Blue", price: 30 },
            { name: "Golden", price: 15 },
            { name: "Silver", price: 25 }
            ]
        }]
    },
    {
        id: nanoid(),
        category: "Jewellery",
        title: "Silver Ring",
        price: 1000,
        details: `Silver ring 
                    Ring price 1000 but stones vary in price
                    diffrent sizes and designs available
                    Different stones are listed
                    Saphire = 2000 per carate
                    diamond = 20000 per carate
                    Ruby = 15000 per carate
                    Agate = 400 per carate`,
        variants: [
            {
                type: "Stones",
                options: [{ name: "Saphire", price: 10 },
                { name: "Diamond", price: 80 },
                { name: "Ruby", price: 60 },
                { name: "Agate", price: 30 }
                ]
            }]
    },
    {
        id: nanoid(),
        category: "Accessories",
        title: "Leather Wallets",
        price: 1499,
        details: `Leather Wallets for gents 
                    available in diffents designs and colours
                    all are export quality`,
        variants: [
            {
                type: "Color",
                options: [{ name: "Black", price: 19 },
                { name: "Tan", price: 59 },
                { name: "Red", price: 14 },
                { name: "Brown", price: 29 }
                ]
            }]
    },
    {
        id: nanoid(),
        category: "Accessories",
        title: "Eyesight Glasses Available",
        price: 1299,
        details: `Fancy glasses available 
                    for casual and party wear`,
        variants: [
            {
                type: "Color",
                options: [{ name: "Black", price: 10 },
                { name: "Tan", price: 17 },
                { name: "Red", price: 23 },
                { name: "Brown", price: 29 }
                ]
            }]
    },
    ]
}

const CartSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {

        updateProduct: (state, action) => {
            // let ac = action.payload;
            // let obj = {
            //     id: nanoid(),
            //     ac
            // }

            state.data.push(action.payload);
        }
    }
})

export default CartSlice;