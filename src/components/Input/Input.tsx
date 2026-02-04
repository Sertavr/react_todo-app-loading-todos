import { forwardRef } from 'react';

type Props = {
  type: 'text' | 'checkbox' | 'subit' | 'radio';
  className: string;
  dataCy: string;
  placeholder?: string;
  onBlur?: () => void;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, className, dataCy, placeholder = '', onBlur = () => {} }, ref) => (
    <input
      data-cy={dataCy}
      type={type}
      className={className}
      placeholder={placeholder}
      onBlur={onBlur}
      ref={ref}
    />
  ),
);

Input.displayName = 'Input';
