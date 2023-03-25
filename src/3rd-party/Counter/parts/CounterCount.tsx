type CounterCountProps = {
  count: number;
};

export default function CounterCount({ count }: CounterCountProps) {
  return <span className="px-1 font-bold">{count}</span>;
}
