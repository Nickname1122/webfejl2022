import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Play } from '../../shared/models/play';
import { PlayService } from '../../shared/services/play.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit {

  plays: Array<Play> = [];

  playsForm = this.createForm({
    id: '',
    date: 0,
    time: '',
    place: '',
    title: '',
    price: ''
  });

  constructor(private fb: FormBuilder, private router: Router, private playService: PlayService, private userService: UserService) { }

  ngOnInit(): void {
    this.playService.getAll().subscribe(data => {
      data.forEach(play => {
        this.plays.push(play);
      });
    })
  }

  createForm(model: Play) {
    let formGroup = this.fb.group(model);
    formGroup.get('date')?.addValidators([Validators.required]);
    formGroup.get('time')?.addValidators([Validators.required]);
    formGroup.get('place')?.addValidators([Validators.required]);
    formGroup.get('title')?.addValidators([Validators.required]);
    formGroup.get('price')?.addValidators([Validators.required]);
    return formGroup;
  }

  update(play: Play) {
    this.playService.passToAddPlay(play);
  }

  del(id: string) {
    this.playService.delete(id).then(_ => {
      this.router.navigateByUrl('/plays');
    }).catch(error => {
      console.log(error);
    });
  }

  buy(play: Play) {
    this.playService.passToBuy(play);
  }

}
