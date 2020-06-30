```tsx
<FormikForm>
  {transitions.map(renderEmailFields)}
  <Field isInvalid={touched.message && !!errors.message}>
    <Input
      as={TextArea}
      id="message"
      name="message"
      placeholder="Message"
      required
      aria-label="Message"
    />
  </Field>
  <Button
    as={isOpen ? 'button' : 'a'}
    type={isOpen ? 'submit' : undefined}
    disabled={isSubmitting || !isValid}
    isSubmitting={isSubmitting}
    onClick={!isOpen ? handleOpenClick : undefined}
    aria-label="Email"
  >
    {status === 'error' ? 'Uh oh, try again?' : 'Email'}
  </Button>
</FormikForm>
```
