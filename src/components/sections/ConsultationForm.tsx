import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  contactNotice,
  contactSubmitLabel,
  contactSuccess,
  projectTypes,
  timingOptions,
} from "../../content/contact";
import { Button } from "../shared/Button";

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "town"
  | "projectType"
  | "timing"
  | "message";

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const emptyValues: Values = {
  name: "",
  email: "",
  phone: "",
  town: "",
  projectType: "",
  timing: "",
  message: "",
};

const fieldOrder: FieldName[] = [
  "name",
  "email",
  "phone",
  "town",
  "projectType",
  "timing",
  "message",
];

function validateField(field: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  if (field === "name" && !trimmed) return "Please enter your name.";
  if (field === "email") {
    if (!trimmed) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return "Please enter a valid email address, such as name@example.com.";
    }
  }
  if (field === "message" && !trimmed) {
    return "Please tell us a little about your project.";
  }
  return undefined;
}

function validateAll(values: Values): Errors {
  const errors: Errors = {};
  for (const field of fieldOrder) {
    const message = validateField(field, values[field]);
    if (message) errors[field] = message;
  }
  return errors;
}

const controlStyles =
  "mt-2 block w-full border bg-cream px-4 py-3 text-base text-olive placeholder:text-olive/50 focus:outline-hidden focus-visible:outline-hidden";

const normalBorder =
  "border-frame-accent/40 focus:border-olive focus:shadow-[inset_0_0_0_1px_#233628] focus-visible:border-olive focus-visible:shadow-[inset_0_0_0_1px_#233628]";

const errorBorder =
  "border-[#8a2f1f] shadow-[inset_0_0_0_1px_#8a2f1f] focus:border-[#8a2f1f] focus-visible:border-[#8a2f1f]";

type FieldProps = {
  field: FieldName;
  label: string;
  required?: boolean;
  error?: string;
  children: (props: {
    id: string;
    className: string;
    "aria-invalid": boolean | undefined;
    "aria-describedby": string | undefined;
    "aria-required": boolean | undefined;
  }) => React.ReactNode;
};

function Field({ field, label, required, error, children }: FieldProps) {
  const id = `contact-${field}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-olive">
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (required)</span>
          </>
        ) : (
          <span className="font-normal text-olive/70"> (optional)</span>
        )}
      </label>
      {children({
        id,
        className: `${controlStyles} ${error ? errorBorder : normalBorder}`,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
        "aria-required": required ? true : undefined,
      })}
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-[#8a2f1f]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ConsultationForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const [focusSuccess, setFocusSuccess] = useState(false);

  useEffect(() => {
    if (submitted && focusSuccess) {
      successRef.current?.focus();
      setFocusSuccess(false);
    }
  }, [submitted, focusSuccess]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as FieldName;
    const value = event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
    }
  }

  function handleBlur(field: FieldName) {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateField(field, values[field]) }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched(Object.fromEntries(fieldOrder.map((field) => [field, true])));

    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    setSubmitted(true);
    setFocusSuccess(true);
  }

  function resetForm() {
    setValues(emptyValues);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div role="status" className="bg-beige-panel px-[clamp(1.75rem,4vw,3rem)] py-[clamp(2.5rem,5vw,4rem)] text-beige-text">
        <h2
          ref={successRef}
          tabIndex={-1}
          className="text-3xl font-semibold tracking-[-0.02em] focus-visible:outline-beige-text"
        >
          {contactSuccess.heading}
        </h2>
        <p className="mt-4 max-w-[30rem] leading-7">{contactSuccess.body}</p>
        <Button className="mt-8" onClick={resetForm}>
          {contactSuccess.button}
        </Button>
      </div>
    );
  }

  return (
    <div>
      <p className="border-l-2 border-frame-accent pl-4 text-base leading-7 text-olive">
        {contactNotice}
      </p>

      <form ref={formRef} noValidate onSubmit={handleSubmit} className="mt-8 grid gap-6">
        <p className="text-sm text-olive/75">
          <span aria-hidden="true">* </span>Required fields
        </p>

        <Field field="name" label="Name" required error={errors.name}>
          {(a11y) => (
            <input
              {...a11y}
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
            />
          )}
        </Field>

        <Field field="email" label="Email" required error={errors.email}>
          {(a11y) => (
            <input
              {...a11y}
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
            />
          )}
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field field="phone" label="Phone" error={errors.phone}>
            {(a11y) => (
              <input
                {...a11y}
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange}
              />
            )}
          </Field>
          <Field field="town" label="Town or city" error={errors.town}>
            {(a11y) => (
              <input
                {...a11y}
                name="town"
                type="text"
                autoComplete="address-level2"
                value={values.town}
                onChange={handleChange}
              />
            )}
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field field="projectType" label="Project type" error={errors.projectType}>
            {(a11y) => (
              <select
                {...a11y}
                name="projectType"
                value={values.projectType}
                onChange={handleChange}
              >
                <option value="">Select a project type</option>
                {projectTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <Field field="timing" label="Preferred timing" error={errors.timing}>
            {(a11y) => (
              <select
                {...a11y}
                name="timing"
                value={values.timing}
                onChange={handleChange}
              >
                <option value="">Select a timeframe</option>
                {timingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </Field>
        </div>

        <Field field="message" label="Tell us about your project" required error={errors.message}>
          {(a11y) => (
            <textarea
              {...a11y}
              name="message"
              rows={6}
              value={values.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
            />
          )}
        </Field>

        <div>
          <Button type="submit">{contactSubmitLabel}</Button>
        </div>
      </form>
    </div>
  );
}
