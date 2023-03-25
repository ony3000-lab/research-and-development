type CounterLabelProps = {
  label: string;
};

export default function CounterLabel({ label }: CounterLabelProps) {
  return <span className="px-1">{label}</span>;
}
