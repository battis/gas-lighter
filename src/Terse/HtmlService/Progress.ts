import C from '../CacheService';

export default class Progress {
  private key: string;

  private prefix(token: string, delimiter: string = '.') {
    return ['battis', 'Terse', 'HtmlService', 'Progress', this.key, token].join(
      delimiter
    );
  }

  private get status() {
    return this.prefix('status');
  }

  private get value() {
    return this.prefix('value');
  }

  private get max() {
    return this.prefix('max');
  }

  private get complete() {
    return this.prefix('complete');
  }

  private get html() {
    return this.prefix('html');
  }

  private get(key: string) {
    return C.getUserCache(key);
  }

  private put(key: string, value: any) {
    return C.putUserCache(
      key,
      typeof value == 'string' ? value : JSON.stringify(value)
    );
  }

  private remove(key: string) {
    return CacheService.getUserCache().remove(key);
  }

  public constructor(key: string) {
    this.key = key;
    this.reset();
  }

  private putAndUpdate(key, value) {
    this.put(key, value);
    this.update();
  }

  public setStatus = this.putAndUpdate.bind(this, this.status);
  public getStatus = this.get.bind(this, this.status);

  public setValue = this.putAndUpdate.bind(this, this.value);
  public getValue = this.get.bind(this, this.value);

  public setMax = this.putAndUpdate.bind(this, this.max);
  public getMax = this.get.bind(this, this.max);

  public markComplete = this.put.bind(this, this.complete, true);
  public markIncomplete = this.put.bind(this, this.complete, false);
  public isComplete = this.get.bind(this, this.complete);

  private setHtml = this.put.bind(this, this.html);
  public getHtml = this.get.bind(this, this.html);

  public reset() {
    this.markIncomplete();
    this.remove(this.status);
    this.setValue(0);
  }

  private update() {
    this.setHtml(
      `<div class="battis Terse HtmlService Element Progress">
        <progress
          class="progress"
          value="${this.getValue()}"
          max="${this.getMax()}"
        />
        <div class="status">${this.getStatus()}</div>
      </div>`
    );
  }
}
