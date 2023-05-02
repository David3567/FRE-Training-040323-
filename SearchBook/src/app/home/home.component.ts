import { Component, Input } from '@angular/core';
import { BookList } from '../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  BookData : BookList[] = [
    {
      picture : "http://books.google.com/books/content?id=sLfHGZzEy9cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title : "Master XML",
      publisher : "Excel Books India",
    }, {
      picture : "http://books.google.com/books/content?id=Fq3FAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title : "Java Programming Interviews Exposed",
      publisher : "John Wiley & Sons",
      pubDate: "2014-01-30",
      description: "If you are a skilled Java programmer but are concerned about theJava coding interview process, this real-world guide can help youland your next position Java is a popular and powerful language that is a virtualrequirement for businesses making use of IT in their dailyoperations.",
    }
  ]
}
