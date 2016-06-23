import {Tweet} from "./tweet";
export class TwitterService {
    getTweets():Tweet[] {
        return [
            new Tweet("http://lorempixel.com/100/100/people?1", "Christophe", "@toefel", "Fellin Good 2day", 10, true),
            new Tweet("http://lorempixel.com/100/100/people?2", "Tjernobiel", "@blaataap", "Me so ...., oh oh, me so ....", 7, false),
            new Tweet("http://lorempixel.com/100/100/people?3", "Ralphy", "@puipui", "I dunno whot the fok un tokkin bout", 600, true),
            new Tweet("http://lorempixel.com/100/100/people?4", "Kqosh", "@kosterr", "Fellin Good 2day, yea yea me 2 biatch", 32, true)
        ];
    }
}