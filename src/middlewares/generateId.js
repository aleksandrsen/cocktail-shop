import uuid from "uuid/v4"

export default store => next => action => {
    let {generateId, ...rest} = action;
    if (!generateId) {
        next(action);
    } else {
        next({
            ...rest,
            generateId: uuid()
        });
    }

}