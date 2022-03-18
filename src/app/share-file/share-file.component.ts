import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-file',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.scss']
})
export class ShareFileComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  share!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'MOUHAMAD';
    this.description = 'Ya MOUHAMAD PSL';
    this.createdDate = new Date();
    this.share = 7; //number of likes
    this.imageUrl = './assets/images/CORAN.jpeg';
  }

}
