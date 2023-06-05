export interface userData {
    userId: string;
    userPw: string;
}

export interface plans {
    info : string[];
    red?: boolean;
    index?: number;
}

export interface eachBox {
    bigText? : string;
    smallText? : string;
    image? : string; 
    id? : number;
    even? : boolean;
}