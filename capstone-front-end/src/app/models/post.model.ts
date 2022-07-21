import { formatDate } from "@angular/common";

export class Post {
    postId?: number;
    title?: string;
    header?: string;
    body?: string;
    postDate?: any;
    expireDate?: any;
    isApproved?: boolean;
    userId?: number;

}

export class Post2
{
    post_id:number | undefined;
    title:string | undefined;
    header:string | undefined;
    content:string | undefined;
    post_date:string | undefined;
    expiry_date:string | undefined;
    category_id:number | undefined;
    user_id:number | undefined;
    is_approved:boolean |undefined;
  
    constructor() 
    {
      this.post_id = 0;
      this.header = "My Title";
      this.title = this.header;
      this.content = "My Content";
      this.post_date = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
      let date = new Date();
      this.expiry_date = formatDate(date.setDate(date.getDate() + 30), 'yyyy-MM-dd', 'en_US');
      this.category_id = 1;
      this.user_id = 1;
      this.is_approved = false;
  
    }
  
}