import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Research Experience</h3>
              <p className="text-gray-700">
                My research focuses on embedding models and Named Entity Recognition (NER) systems, exploring the
                capabilities of models like BERT, T5, and GPT-2 with datasets such as IMDb, Yelp, and arXiv. I have
                analyzed how general and specific instruction prompts influence model performance, demonstrating minimal
                impact on accuracy.
              </p>
              <p className="text-gray-700 mt-4">
                A significant part of my work involves designing a benchmark for Closed Domain NER using the BIRD-Bench
                dataset to extract and link entities from SQL queries. By fine-tuning T5 for NER tasks, I achieved high
                precision, recall, and F1-scores on custom benchmarks, and evaluated other NER models like Flair and
                Luke to assess classification performance using metrics such as Seqeval.
              </p>
              <p className="text-gray-700 mt-4">
                This research contributes to advancing NER and embedding model performance and was recognized with a
                proposal selected for presentation at Ontario Database Day 2024.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
