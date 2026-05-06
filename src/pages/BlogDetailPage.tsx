// import { useParams, Link } from "react-router-dom";
// import { Layout } from "@/components/layout";
// import { blogPosts } from "@/data/blog-posts";
// import {
//   Calendar,
//   User,
//   Clock,
//   ArrowLeft,
//   Tag,
//   Share2,
//   Bookmark,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// export default function BlogDetailPage() {
//   const { slug } = useParams<{ slug: string }>();
//   const post = blogPosts.find((p) => p.slug === slug);

//   if (!post) {
//     return (
//       <Layout>
//         <div className="container-section py-20 text-center">
//           <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
//           <p className="text-muted-foreground mb-8">
//             The article you are looking for does not exist or has been moved.
//           </p>
//           <Button asChild>
//             <Link to="/blog">Return to Blog</Link>
//           </Button>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       {/* Article Header */}
//       <section className="bg-secondary/30 py-12 md:py-20 border-b">
//         <div className="container-section max-w-4xl">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="mb-8 hover:bg-accent/10 text-accent group"
//             asChild
//           >
//             <Link to="/blog">
//               <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
//               Back to Articles
//             </Link>
//           </Button>

//           <div className="flex items-center gap-2 mb-6">
//             <Badge
//               variant="outline"
//               className="bg-accent/10 text-accent border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest"
//             >
//               {post.category}
//             </Badge>
//             <span className="text-muted-foreground flex items-center gap-1 text-sm">
//               <Clock className="h-4 w-4" />
//               {post.readTime}
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
//             {post.title}
//           </h1>

//           <div className="flex flex-wrap items-center gap-8 py-6 border-y border-border/50">
//             <div className="flex items-center gap-3">
//               <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
//                 {post.author.charAt(0)}
//               </div>
//               <div>
//                 <div className="text-sm font-bold">{post.author}</div>
//                 <div className="text-xs text-muted-foreground">
//                   Lead Researcher
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-sm text-muted-foreground">
//               <Calendar className="h-4 w-4" />
//               {post.date}
//             </div>

//             <div className="ml-auto flex items-center gap-3">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full h-10 w-10"
//               >
//                 <Share2 className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full h-10 w-10"
//               >
//                 <Bookmark className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Article Content */}
//       <section className="py-16 md:py-24">
//         <div className="container-section max-w-4xl">
//           <div className="grid lg:grid-cols-1 gap-12">
//             <article className="prose prose-lg dark:prose-invert max-w-none">
//               <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-12 border-l-4 border-accent pl-6">
//                 {post.excerpt}
//               </p>

//            <div
//   className="article-content space-y-6"
//   dangerouslySetInnerHTML={{ __html: post.content }}
// />

//               <div className="mt-16 pt-8 border-t">
//                 <div className="flex flex-wrap gap-2">
//                   <span className="text-sm font-bold mr-2 self-center">
//                     Tags:
//                   </span>
//                   {post.tags.map((tag) => (
//                     <Badge
//                       key={tag}
//                       variant="secondary"
//                       className="hover:bg-accent hover:text-white transition-colors cursor-pointer"
//                     >
//                       <Tag className="mr-1 h-3 w-3" />
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             </article>

//             {/* Newsletter CTA inside article */}
//             <Card className="mt-20 bg-primary text-primary-foreground border-none overflow-hidden">
//               <CardContent className="p-8 md:p-12 relative">
//                 <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
//                   <div className="flex-1 text-center md:text-left">
//                     <h3 className="text-2xl font-bold mb-2">
//                       Subscribe to our newsletter
//                     </h3>
//                     <p className="text-primary-foreground/70">
//                       Get the latest African research news delivered to your
//                       inbox.
//                     </p>
//                   </div>
//                   <div className="w-full md:w-auto">
//                     <Button className="bg-accent hover:bg-accent/90 text-white font-bold w-full md:w-auto px-8 py-6 h-auto text-lg rounded-xl">
//                       Join 10,000+ Readers
//                     </Button>
//                   </div>
//                 </div>
//                 {/* Subtle background decoration */}
//                 <div className="absolute top-0 right-0 h-32 w-32 bg-accent/20 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
//                 <div className="absolute bottom-0 left-0 h-32 w-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl opacity-20" />
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/data/blog-posts";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";
export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container-section py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const [bookmarked, setBookmarked] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  return saved.includes(post.slug);
});

const handleBookmark = () => {
  const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  let updated;
  if (bookmarked) {
    updated = saved.filter((s: string) => s !== post.slug);
    toast.success("Removed from bookmarks");
  } else {
    updated = [...saved, post.slug];
    toast.success("Article bookmarked!");
  }
  localStorage.setItem("bookmarks", JSON.stringify(updated));
  setBookmarked(!bookmarked);
};

const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    });
  } else {
    await navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  }
};
  return (
    <Layout>
      <style>{`
        .article-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(var(--accent), 0.2);
          line-height: 1.3;
          color: inherit;
        }
        .article-content h2:first-child {
          margin-top: 0;
        }
        .article-content p {
          font-size: 1.0625rem;
          line-height: 1.9;
          margin-bottom: 1.25rem;
          color: hsl(var(--muted-foreground));
        }
        .article-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .article-content ul,
        .article-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .article-content ul { list-style-type: disc; }
        .article-content ol { list-style-type: decimal; }
        .article-content li {
          font-size: 1.0625rem;
          line-height: 1.9;
          margin-bottom: 0.4rem;
          color: hsl(var(--muted-foreground));
        }
        .article-content strong {
          font-weight: 600;
          color: inherit;
        }
        .article-content blockquote {
          border-left: 4px solid hsl(var(--accent));
          padding-left: 1.25rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: hsl(var(--muted-foreground));
        }
      `}</style>

      {/* Article Header */}
      <section className="bg-secondary/30 py-12 md:py-20 border-b">
        <div className="container-section max-w-4xl">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 hover:bg-accent/10 text-accent group"
            asChild
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-6">
            <Badge
              variant="outline"
              className="bg-accent/10 text-accent border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest"
            >
              {post.category}
            </Badge>
            <span className="text-muted-foreground flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-border/50">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold">{post.author}</div>
                <div className="text-xs text-muted-foreground">
                  Lead Researcher
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>

            <div className="ml-auto flex items-center gap-3">
            <Button
  variant="outline"
  size="icon"
  className="rounded-full h-10 w-10"
  onClick={handleShare}
>
  <Share2 className="h-4 w-4" />
</Button>

<Button
  variant="outline"
  size="icon"
  className={`rounded-full h-10 w-10 ${
    bookmarked ? "bg-accent text-white border-accent" : ""
  }`}
  onClick={handleBookmark}
>
  <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container-section max-w-4xl">
          <div className="grid lg:grid-cols-1 gap-12">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-12 border-l-4 border-accent pl-6">
                {post.excerpt}
              </p>

              <div
                className="article-content space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-16 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-bold mr-2 self-center">
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="hover:bg-accent hover:text-white transition-colors cursor-pointer"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>

            {/* Newsletter CTA inside article */}
            <Card className="mt-20 bg-primary text-primary-foreground border-none overflow-hidden">
              <CardContent className="p-8 md:p-12 relative">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">
                      Subscribe to our newsletter
                    </h3>
                    <p className="text-primary-foreground/70">
                      Get the latest African research news delivered to your
                      inbox.
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <Button className="bg-accent hover:bg-accent/90 text-white font-bold w-full md:w-auto px-8 py-6 h-auto text-lg rounded-xl">
                      Join 10,000+ Readers
                    </Button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-32 w-32 bg-accent/20 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 h-32 w-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl opacity-20" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
