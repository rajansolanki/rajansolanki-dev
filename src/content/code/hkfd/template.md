```html
<ng-container *ngIf="text" [ngSwitch]="true">
  <ng-template [ngSwitchCase]="!!text.url">
    <a
      href="{{ text?.url }}"
      target="_blank"
      rel="nofollow noopener"
      [attr.aria-label]="text?.text"
    >
      {{ text?.text }}
    </a>
  </ng-template>
  <ng-template [ngSwitchCase]="text?.attributes?.heading">
    <h3>{{ text?.text }}</h3>
  </ng-template>
  <ng-template [ngSwitchCase]="text?.attributes?.bold">
    <b>{{ text?.text }}</b>
  </ng-template>
  <ng-template [ngSwitchCase]="text?.attributes?.italic">
    <i>{{ text?.text }}</i>
  </ng-template>
  <ng-template ngSwitchDefault>{{ text?.text }}</ng-template>
</ng-container>
```
