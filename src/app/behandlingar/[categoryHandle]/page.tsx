import CategoryDetail from "@/components/categories/CategoryDetail";

export default function CategoryPage({
  params,
}: {
  params: { categoryHandle: string };
}) {
  const { categoryHandle } = params;

  return <CategoryDetail categoryHandle={categoryHandle} />;
}
