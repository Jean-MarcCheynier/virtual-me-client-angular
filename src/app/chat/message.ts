export class Message {
    type: string;
    from: string;
    content: any;
    delay = 1.5;

    constructor(content: any, from= 'user', type= 'text' ) {
        this.type = type;
        this.from = from;
        this.content = content;
    }
}