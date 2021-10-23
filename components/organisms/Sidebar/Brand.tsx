// Declarate props
interface BrandProps {
  title: String;
}
export default function Brand(props: BrandProps) {
  // Get props
  const { title } = props;
  return (
    <div className="ml-6 font-mono text-2xl h-16 text-gray-100 flex items-center">
      {title}
    </div>
  );
}
