import { Movie } from "./movie";
import { User } from "./user";

export class CartItem {

    cId!: number;
    user: User;
    movie: Movie;
    quantity: number = 1;
    

    constructor(user: User,movie: Movie) {
        this.user = user;
        this.movie = movie;
    }

}
