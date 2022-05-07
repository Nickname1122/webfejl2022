import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Play } from 'src/app/shared/models/play';
import { PlayService } from 'src/app/shared/services/play.service';

@Component({
  selector: 'app-add-play',
  templateUrl: './add-play.component.html',
  styleUrls: ['./add-play.component.css']
})
export class AddPlayComponent implements OnInit, AfterViewInit {

  @ViewChild('date') date?: ElementRef;
  @ViewChild('time') time?: ElementRef;
  @ViewChild('place') place?: ElementRef;
  @ViewChild('title') title?: ElementRef;
  @ViewChild('price') price?: ElementRef;
  addButton = document.querySelector("#addButton");
  play?: Play;

  addPlayForm = new FormGroup({
    id: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    place: new FormControl(''),
    title: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private fb: FormBuilder, private location: Location, private router: Router, private playService: PlayService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.addPlayForm.value);
    this.addPlay();
  }

  ngAfterViewInit(): void {
    this.update();
  }

  goBack() {
    this.location.back();
  }

  addPlay() {
    if (this.play) {
      this.playService.delete(this.play.id);
    }
    this.playService.create(this.addPlayForm.value).then(_ => {
      this.router.navigateByUrl('/plays');
    }).catch(error => {
      console.error(error);
    });
  }

  update() {
    const play = this.playService.getPlay();

    if (play) {
      this.playService.getById(play.id).subscribe(play => {
        this.play = play;

        if (this.date && this.time && this.place && this.title && this.price && this.play) {
          this.date.nativeElement.value = this.play.date;
          this.time.nativeElement.value = this.play.time;
          this.place.nativeElement.value = this.play.place;
          this.title.nativeElement.value = this.play.title;

          this.addPlayForm.setValue({
            'id': this.play?.id,
            'date': this.date.nativeElement.value,
            'time': this.time.nativeElement.value,
            'place': this.place.nativeElement.value,
            'title': this.title.nativeElement.value,
            'price': this.price.nativeElement.value,
          });
        }

        this.addPlayForm.get('price')?.addValidators([Validators.required]);
      })

    }

  }


}
