import type { JSX } from 'solid-js';

interface InputProps extends Partial<HTMLInputElement> {
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  label: string;
}

export const Input = (props: InputProps) => {
  return (
    <div class="w-full">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for={props.name}
      >
        {props.label}
      </label>
      <input
        name={props.name}
        id={props.name}
        class="input"
        placeholder="Enter card number"
        value={props.value}
        onInput={props.onInput}
      />
    </div>
  );
};
