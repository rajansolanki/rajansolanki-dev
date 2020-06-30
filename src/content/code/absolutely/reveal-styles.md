```scss
#contact.show {
  &,
  ~ #blog,
  ~ footer {
    transform: translateY($email + $email-margin);
    transition: transform 400ms ease;

    @include sm {
      transform: translateY($email + $email-margin-sm);
    }

    @include md {
      transform: translateY($email-md + $email-margin-md);
    }

    @include lg {
      transform: translateY($email-md + $email-margin-lg);
    }
  }
}
```
