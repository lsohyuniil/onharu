import { PageSection } from "../../components/PageSection";
import ReviewWriteForm from "./components/ReviewWriteForm";
import { storeList } from "./data/mockData";

export default function ReviewsWritePage() {
  return (
    <PageSection title="감사 리뷰 작성" className="p-4 sm:p-8">
      <ReviewWriteForm stores={storeList} />
    </PageSection>
  );
}
