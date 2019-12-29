export const resourceStartRecord = () => ({
    loading: false,
    loaded: false,
    error: null,
    entities: []
});

export const itemStartRecord = () => ({
    loading: false,
    loaded: false,
    error: null,
    item: null
});

export const arrToObj = arr => {
    return arr.reduce((init, item) => {
        init[item.id] = item;
        return init;
    }, {});
};