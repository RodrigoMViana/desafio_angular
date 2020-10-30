export interface User {
    admin: boolean;
    email: string;
    id: number;
    login: string;
    nome: string;
}

export interface ResponseUsers {
    admin: boolean;
    email: string;
    id: number;
    login: string;
    nome: string;

}

    export interface RequestCreate {
        email: string;
        login: string;
        nome: string;
        senha: string;
        }
    

    export interface ResponseCreate {
        id: number;
        nome: string;
        email: string;
        login: string;
        admin: boolean;
        senha: string;
        }

  //modelos para o get user  

    export interface ResponseUser {
        admin: boolean;
        email: string;
        id: number;
        login: string;
        nome: string;
    }

    export interface RequestUser {
        admin: boolean;
        email: string;
        id: number;
        login: string;
        nome: string;
        
    }


    export interface RequestUpdate {
        admin: boolean;
        email: string;
        id: number;
        login: string;
        nome: string;
    }
    

    export interface ResponseUpdate {
        admin: boolean;
        email: string;
        id: number;
        login: string;
        nome: string;
        senha: string;
}
