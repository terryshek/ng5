import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()

export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goals', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoals(goal){
    this.goals.next(goal)
  }
}
