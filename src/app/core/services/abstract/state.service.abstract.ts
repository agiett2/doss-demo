import { StateInterface } from 'src/app/shared/interfaces/state.interface';

export abstract class StateServiceAbstract {
  public abstract getStates = (): StateInterface[] => [];
}
