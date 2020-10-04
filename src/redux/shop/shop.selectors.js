import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


// collectionUrlParam is a variable of this selector
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => 
        collections[collectionUrlParam]
);