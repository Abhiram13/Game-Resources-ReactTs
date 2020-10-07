export interface State {
     data: Item[];
     char: string;
     backup: Item[];
     user: User | object;
     loggedIn: boolean;
}

export interface Data {
     documents: Item[];
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
     comments: object[],
}

export interface AuthoriseState {
     loginData: string | object;
     signinData: string | object;
     userExist: boolean;
}

interface LoginValues {
     login_username: string;
     login_password: string;
}

interface SignUpValues {
     userName: string;
     firstName: string;
     lastName: string;
     passWord: string;
     checkBox: boolean;
}

export interface LoginInterface {
     credentials: ((a: LoginValues) => void);
     newUser: ((a: boolean) => void);
}

export interface SignInInterface {
     create: ((a: SignUpValues) => void);
     exist: ((a: boolean) => void);
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
     getValue: ((a: string) => void);
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

export interface InputProps {
     readonly type: string;
     readonly placeholder: string;
     readonly class: string;
     value: ((a: string) => void);
     id: string;
}

export interface InputState {
     [id: string]: string;
}

export interface postMethod {
     (xhhtp: XMLHttpRequest): void;
}