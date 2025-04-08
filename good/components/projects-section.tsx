import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Embedding Model with Instructions",
      description:
        "This project explores the impact of instruction-based prompting on embedding models across NLP tasks. We benchmark BERT, T5, and GPT-3 on datasets like IMDB and arXiv to evaluate whether task-specific instructions enhance text embeddings for classification tasks.",
      imageSrc: "/images/embedding-model.png",
      imageAlt: "Embedding Model with Instructions",
      projectUrl: "https://github.com/ChenYang-personal/embedding-model-with-instruction",
    },
    {
      title: "Image Captioning System",
      description:
        "I developed an advanced image captioning system by utilizing Inception V3 for feature extraction and LSTM/GRU for sequence generation. Using the Flickr_8K dataset, I trained and evaluated the model's performance using BLEU scores and semantic distance metrics.",
      imageSrc: "/images/image-generation.png",
      imageAlt: "Image Captioning System",
      projectUrl: "https://github.com/ChenYang-personal/image-caption-generation",
    },
    {
      title: "Sentiment Analysis on Boeing Stock",
      description:
        "This project focused on analyzing the impact of expert sentiments on Boeing's stock price. I collected and processed over 100 news articles to derive sentiment scores using TextBlob and employed autoregression techniques to predict sentiment trends.",
      imageSrc: "/images/sentiment-analysis.png",
      imageAlt: "Sentiment Analysis on Boeing Stock",
      projectUrl: "https://github.com/ChenYang-personal/Sentiment-Analysis-on-Boeing-Stock",
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
