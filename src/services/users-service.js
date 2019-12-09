import users from "../normalize-data/users";

export default class UsersService {
    constructor() {
    }

    getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(users), 1500);
        })
    };

    getBlogPostById(eventId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = users.find(({id}) => id === eventId);
                resolve(event);
            }, 1500);
        })
    };
}