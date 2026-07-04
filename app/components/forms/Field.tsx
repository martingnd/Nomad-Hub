export function TextField({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-brown">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-brown/15 bg-white px-4 py-3 text-[14.5px] font-normal text-ink outline-none focus:border-terracotta"
      />
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  required = true,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-brown">
      {label}
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="resize-none rounded-xl border border-brown/15 bg-white px-4 py-3 text-[14.5px] font-normal text-ink outline-none focus:border-terracotta"
      />
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
  required = true,
  defaultValue = "",
}: {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-brown">
      {label}
      <select
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="rounded-xl border border-brown/15 bg-white px-4 py-3 text-[14.5px] font-normal text-ink outline-none focus:border-terracotta"
      >
        <option value="" disabled>
          Sélectionner…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
