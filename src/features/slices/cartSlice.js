import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrices: 0
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            try {
                const exist = state.cart.find((item) =>
                    item.id === product.id && item.size === product.size && item.color === product.color);

                if (exist) {
                    exist.amount++;
                    exist.totalPrices += product.price;
                    state.totalAmount++;
                    state.totalPrices += product.price;
                } else {
                    state.cart.push({
                        id: product.id,
                        price: product.price,
                        size: product.size,
                        amount: 1,
                        img: product.img,
                        totalPrice: product.price,
                        name: product.name,
                        text: product.text,
                        color: product.color,
                    });
                    state.totalAmount++;
                    state.totalPrices += product.price;
                }
            } catch (error) {
                return error;
            }
        },
        removeFromCart(state, action) {
            const product = action.payload;
            try {
                const exist = state.cart.find(
                    (item) =>
                        item.id === product.id &&
                        item.size === product.size &&
                        item.color === product.color
                );
                if (exist.amount === 1) {
                    state.cart = state.cart.filter(
                        (item) =>
                            item.id !== product.id ||
                            item.size !== product.size ||
                            item.color !== product.color
                    );
                    state.totalAmount--;
                    state.totalPrices -= product.price;
                } else {
                    exist.amount--;
                    exist.totalPrices -= product.price;
                    state.totalAmount--;
                    state.totalPrices -= product.price;
                }
            } catch (error) {
                return error;
            }
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;