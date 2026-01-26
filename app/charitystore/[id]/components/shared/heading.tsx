interface HeadingProps {
  title: string;
  children?: React.ReactNode;
}

export const Heading = ({ title, children }: HeadingProps) => {
  return (
    <div className="flex gap-2 border-b border-gray-300 pb-4">
      <p className="text-2xl font-bold">{title}</p>
      {children}
    </div>
  );
};
