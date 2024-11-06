import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { connectToDatabase } from "@/lib/dbConnect";
import TreatmentCategory from "@/models/categories";
import Home from "@/components/home/Home";

export default async function HomePage() {
  const queryClient = new QueryClient();

  const getAllCategories = async () => {
    await connectToDatabase();
    return TreatmentCategory.find();
  };

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
