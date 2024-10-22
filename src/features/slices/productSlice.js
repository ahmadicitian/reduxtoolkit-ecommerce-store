import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData.jsx";

const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem("Redux-Store-filterProducts")) || storeData,
        singleProduct: JSON.parse(sessionStorage.getItem("Redux-Store-SingleProduct")) || storeData,
        error: false
    },
    reducers: {
        filterProducts(state, action) {
            try {
                const filterProductsData = storeData.filter((product) => {
                    return product.type === action.payload
                });
                state.filteredProducts = filterProductsData;
                state.error = false

                const saveFilterData = JSON.stringify(filterProductsData);
                sessionStorage.setItem("Redux-Store-filterProducts", saveFilterData);
            } catch (error) {
                return error;
            }
        },

        getSingleProduct(state, action) {
            var product = storeData.filter((pro) => pro.id === action.payload);
            state.singleProduct = product;
            var saveSingleProduct = JSON.stringify(product);
            sessionStorage.setItem("Redux-Store-SingleProduct", saveSingleProduct);
            // console.log("Product", product)
        },

        filterByGender(state, action) {
            try {
                const genderProducts = state.filteredProducts.filter((product) =>
                    product.gender === action.payload);
                state.error = false;
                state.filteredProducts = genderProducts;
                const productExists = genderProducts.length > 0;
                if (productExists) {
                    state.error = false;
                    const saveData = JSON.stringify(genderProducts);
                    sessionStorage.setItem("Redux-Store-FilterData", saveData);
                } else {
                    state.error = true;
                    state.filteredProducts = [];
                }
            } catch (err) {
                return err;
            }
        },

        sortByPrice(state) {
            try {
                const sortedProducts = state.filteredProducts.sort((a, b) => a.price > b.price ? -1 : 1);
                state.filteredProducts = sortedProducts;
                let productExists = sortedProducts.length > 0;
                if (productExists) {
                    state.error = false;
                    const saveData = JSON.stringify(sortedProducts);
                    sessionStorage.setItem("Redux-Store-FilterData", saveData);
                } else {
                    state.error = true;
                    state.filteredProducts = [];
                }
            } catch (error) {
                return error;
            }
        },

        filterByColor(state, action) {
            try {
                const selectedColorProducts = state.filteredProducts.filter((product) =>
                    product.color.includes(action.payload));
                state.error = false;
                state.filteredProducts = selectedColorProducts;
                const productExists = selectedColorProducts.length > 0;
                if (productExists) {
                    state.error = false;
                    const saveData = JSON.stringify(selectedColorProducts);
                    sessionStorage.setItem("Redux-Store-FilterData", saveData);
                } else {
                    state.error = true;
                    state.filteredProducts = [];
                }
            } catch (err) {
                return err;
            }
        },

        filterBySize(state, action) {
            try {
                const selectedSizeProducts = state.filteredProducts.filter((product) =>
                    product.size.includes(action.payload));
                state.error = false;
                state.filteredProducts = selectedSizeProducts;
                const productExists = selectedSizeProducts.length > 0;
                if (productExists) {
                    state.error = false;
                    const saveData = JSON.stringify(selectedSizeProducts);
                    sessionStorage.setItem("Redux-Store-FilterData", saveData);
                } else {
                    state.error = true;
                    state.filteredProducts = [];
                }
            } catch (err) {
                return err;
            }
        }

    }
});

export const {
    filterProducts,
    getSingleProduct,
    filterByColor,
    filterByGender,
    filterBySize,
    sortByPrice } = productSlice.actions;
export default productSlice.reducer;