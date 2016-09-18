import { computed, observable, asFlat, action } from 'mobx';
import StepModel from './models/StepModel';

class SeqFormStore {

  @observable activeIndex = 0;

  //@observable steps = asFlat([]);

  @observable steps = [];

  @computed get unFinishedStepCount() {
    return this.steps.filter(step => !step.done).length;
  }


  @action addStep(title, status){
    this.steps.push(new StepModel(title, status));
  }


}

let seqFormStore = new SeqFormStore();

export default seqFormStore;
