```ts
class BannerService {
  displayError(error: string): Observable<void> {
    this.dismissError();

    this.errorSource.next(error);

    this.errorActionSource = new AsyncSubject<void>();
    return this.errorActionSource.asObservable();
  }
}
```
