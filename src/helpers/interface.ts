export interface State {
     data: any | Array<any>;
     char: string;
     backup: string | Array<object> | any;
     user: User | object;
     loggedIn: boolean;
}

export interface Data {
     documents: Array<object>;
}

export interface User {
     _id: string;
     comments: object[];
     firstname: string;
     isAdmin: boolean;
     lastname: string;
     likes: object[];
     loggedIn: null | boolean;
     password: string;
     username: string;
}

export interface Likes {
     _id: string;
     username: string;
     firstname: string;
     lastname: string;
}

export interface Item {
     _id: string;
     itemName: string;
     category: string;
     imageURL: string;
     description: string;
     rating?: number;
     likes: Likes[],
     comments: any[],
}

export interface AuthoriseState {
     loginData: string | object;
     signinData: string | object;
     userExist: boolean;
}

export interface LoginInterface {
     credentials: any;
     newUser: any;
}

export interface SignInInterface {
     create: any;
     exist: any;
}

export interface FormState {
     itemName: string;
     description: string;
     category: string;
     imageURL: string;
     rating: number;
}

export interface ViewModalProps {
     item: Item,
}

export interface SearchNameProps {
     getValue: any;
}

export interface SearchNameItem {
     _id: string,
     itemName: string,
}

export interface SearchNameState {
     value: string,
     list: string,
     array: Item[],
}