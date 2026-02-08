import { PageSection } from "../components/PageSection";
import ReviewsContent from "./components/ReviewsContent";
import { childItems, ownerItems } from "./data/mockData";

export default function ReviewsPage() {
  const role = "owner";

  return (
    <PageSection title="감사 리뷰" className="bg-white">
      <ReviewsContent items={ownerItems} role={role} />
    </PageSection>
  );
}
