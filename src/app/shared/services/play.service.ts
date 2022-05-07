import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Play } from '../models/play';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  collectionName = 'Plays';

  constructor(private afs: AngularFirestore, private router: Router) { }

  create(play: Play) {
    play.id = this.afs.createId();
    return this.afs.collection<Play>(this.collectionName).doc(play.id).set(play);
  }

  getAll() {
    return this.afs.collection<Play>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Play>(this.collectionName).doc(id).valueChanges();
  }

  update(play: Play) {
    return this.afs.collection<Play>(this.collectionName).add(play);
  }

  delete(id: string) {
    return this.afs.collection<Play>(this.collectionName).doc(id).delete();
  }

  play?: Play;

  passToAddPlay(play: Play) {
    this.play = play;
    this.router.navigateByUrl('/add-play');
  }

  passToBuy(play: Play) {
    this.play = play;
    this.router.navigateByUrl('/buy');
  }

  getPlay() {
    return this.play;
  }

}
