
export class Tweet {
    mediaUrl: string; //http://lorempixel.com/100/100/people/?blat
    name: string;
    twitterHandle: string;
    message: string;
    likes: number;
    iLike: boolean;


    constructor(mediaUrl:string, name:string, twitterHandle:string, message:string, likes:number, iLike:boolean) {
        this.mediaUrl = mediaUrl;
        this.name = name;
        this.twitterHandle = twitterHandle;
        this.message = message;
        this.likes = likes;
        this.iLike = iLike;
    }
}