import Select from 'react-select';

type InputProps = {
  label: string;
  name: string;
  value: { value: string; label: string };
  onChange: (newValue: { value: string; label: string } | null) => void;
  options: { value: string; label: string }[];
};

const Dropdown = ({ label, name, value, onChange, options }: InputProps) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor={name}>{label}</label>

      <Select
        value={value}
        id={name}
        name={name}
        options={options}
        onChange={(value) => onChange(value)}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: '#16183B',
            color: 'white',
            padding: '11px',
            width: '100%',
            borderRadius: '5px',
            border: 'solid 1px #3f4595',
            fontSize: '1.4rem',
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            color: 'white',
            backgroundColor: '#16183B',
            padding: '12px 20px',
            fontSize: '1.4rem',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: '#3f4595',
            },
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: 'white',
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: '#16183B',
          }),
        }}
      />
    </div>
  );
};

export default Dropdown;
