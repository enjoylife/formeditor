import { observable } from 'mobx';

export default class StepModel {
  @observable title;
  @observable status;

  constructor(title, status) {
    this.title = title;
    this.status = status;
  }
}