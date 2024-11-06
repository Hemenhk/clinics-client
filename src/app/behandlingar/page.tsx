import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Categories from "@/components/categories/Categories";
import { connectToDatabase } from "@/lib/dbConnect";
import TreatmentCategory from "@/models/categories";

export default async function TreatmentCategoriesPage() {
  const queryClient = new QueryClient();

  const getAllCategories = async () => {
    await connectToDatabase();
    return TreatmentCategory.find();
  };

  await queryClient.prefetchQuery({
    queryKey: ["treatment-categories"],
    queryFn: getAllCategories,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Categories />
    </HydrationBoundary>
  );
}
