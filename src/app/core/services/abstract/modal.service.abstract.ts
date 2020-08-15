import { Subject } from 'rxjs/internal/Subject';

export abstract class ModalServiceAbstract {
  public abstract message$: Subject<string>;
  public abstract open = (type?: string): void => {};
}
