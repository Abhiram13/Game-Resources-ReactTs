export interface State {
   items: Item[];
   backup: Item[];
}

export interface Data {
   documents: Item[];
}

export interface User {
   _id: string;
   comments?: object[];
   firstname: string;
   isAdmin: boolean;
   lastname: string;
   likes?: object[];
   loggedIn?: null | boolean;
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
   loginData: LoginRequest;
   signinData: SignUpRequest;
   userExist: boolean;
}

export interface LoginRequest {
   username: string;
   password: string;
}

export interface SignUpRequest {
   username: string;
   firstname: string;
   lastname: string;
   password: string;
   isAdmin: boolean;
}

export interface ILoginResponse {
   token: string;
   user: User;
}

export interface LoginInterface {
   credentials: ((a: LoginRequest) => void);
   newUser: ((a: boolean) => void);
}

export interface SignInInterface {
   create: ((a: SignUpRequest) => void);
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

export interface ItemListProps {
   item: Item,
   redirect: (id: string) => void,
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
   // readonly class: string;
   value: ((a: string) => void);
   id: string;
}

export interface InputState {
   [id: string]: string;
}

export interface postMethod {
   (xhhtp: XMLHttpRequest): void;
}

export interface ICookieLoginResponse {
   message: string,
   status: number,
}