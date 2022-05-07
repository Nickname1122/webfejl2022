import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Play } from 'src/app/shared/models/play';
import { PlayService } from 'src/app/shared/services/play.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  @ViewChild('date') date?: ElementRef;
  @ViewChild('time') time?: ElementRef;
  @ViewChild('place') place?: ElementRef;
  @ViewChild('title') title?: ElementRef;
  @ViewChild('price') price?: ElementRef;
  @ViewChild('quantity') quantity?: ElementRef;
  @ViewChild('total') total?: ElementRef;

  constructor(private playService: PlayService) { }

  play?: Play;

  playForm = new FormGroup({
    id: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    place: new FormControl(''),
    title: new FormControl(''),
    price: new FormControl('')
  });

  updateTotal() {
    const play = this.playService.getPlay();
    if (play) {
      this.playService.getById(play.id).subscribe(play => {
        this.play = play;
        if (this.total && this.play && this.quantity) {
          this.total.nativeElement.value = (parseInt(this.quantity.nativeElement.value) * parseInt(this.play.price)).toString();
        }
      })
    }
  }

  ngAfterViewInit(): void {
    const play = this.playService.getPlay();
    if (play) {
      this.playService.getById(play.id).subscribe(play => {
        this.play = play;
        if (this.price && this.date && this.time && this.place && this.title && this.total && this.play && this.quantity) {
          this.date.nativeElement.value = this.play.date;
          this.time.nativeElement.value = this.play.time;
          this.place.nativeElement.value = this.play.place;
          this.title.nativeElement.value = this.play.title;
          this.price.nativeElement.value = this.play.price;

          this.playForm.setValue({
            'id': this.play?.id,
            'date': this.date.nativeElement.value,
            'time': this.time.nativeElement.value,
            'place': this.place.nativeElement.value,
            'title': this.title.nativeElement.value,
            'price': this.price.nativeElement.value,
          });
        }
      })
    }
  }

  ngOnInit(): void {
    const play = this.playService.getPlay();
    if (play) {
      this.playService.getById(play.id).subscribe(play => {
        this.play = play;
        if (this.total && this.price && this.quantity && this.date && this.time && this.place && this.title && this.play) {
          this.date.nativeElement.value = this.play.date;
          this.time.nativeElement.value = this.play.time;
          this.place.nativeElement.value = this.play.place;
          this.title.nativeElement.value = this.play.title;
          this.price.nativeElement.value = this.play.price;
          this.quantity.nativeElement.value = '0';
          this.total.nativeElement.value = '0';

          this.playForm.setValue({
            'id': this.play?.id,
            'date': this.date.nativeElement.value,
            'time': this.time.nativeElement.value,
            'place': this.place.nativeElement.value,
            'title': this.title.nativeElement.value,
            'price': this.price.nativeElement.value,
          });
        }
      })
    }
  }
}