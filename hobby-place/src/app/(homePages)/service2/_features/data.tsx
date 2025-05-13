import { usePetPost } from "@/app/provider/PetPostProvider";
import { useServiceCategory } from "@/app/provider/ServiceCategoryProvider";

export const data = () => {
  const { serviceCategories, servicePosts } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useServiceCategory();
  console.log(serviceCategories, "serviceCategories");
  console.log(servicePosts, "servicePosts");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { petPost, category, petPostId, petPostCategories } = usePetPost();
  console.log(petPost, category, petPostId, petPostCategories);
};
