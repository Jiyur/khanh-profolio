type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='font-heading text-center text-3xl font-medium capitalize'>
      {children}
    </h2>
  );
}
