import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPost, getRelatedPosts, BlogPost } from "@/lib/data/blog-data";
import { blogCategories } from "@/lib/data/content";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2,
  BookOpen,
  ArrowRight,
  User,
  Heart,
  MessageSquare
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const category = blogCategories.find(cat => cat.id === post.category);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-facelab-purple/5 to-facelab-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <Link href="/blogs">
            <Button variant="ghost" size="sm" className="mb-6 rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Category Badge */}
          <Badge 
            className={`mb-4 ${
              post.category === 'patient-stories' ? 'bg-facelab-purple' :
              post.category === 'tips' ? 'bg-facelab-green text-facelab-black' :
              'bg-gray-500'
            }`}
          >
            {category?.name}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight facelab-black">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/images/doctors/${post.author.toLowerCase().replace(' ', '-').replace('.', '')}.jpg`} />
                <AvatarFallback className="bg-facelab-purple text-white text-xs">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span>By {post.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>

            <Button variant="outline" size="sm" className="rounded-full ml-auto">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <Card className="overflow-hidden shadow-lg mb-8">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <BookOpen className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Article Featured Image</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {/* Format content with proper styling */}
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/\n## /g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">')
                      .replace(/\n### /g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">')
                      .replace(/\n#### /g, '<h4 class="text-lg font-semibold text-gray-900 mt-4 mb-2">')
                      .replace(/\n\*([^*]+)\*/g, '<p class="italic text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-facelab-purple my-6">$1</p>')
                      .replace(/\n- /g, '<li>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^/, '<p class="mb-4">')
                      .replace(/$/, '</p>')
                  }}
                />
              </div>

              {/* Before/After Section */}
              {post.beforeAfter && (
                <Card className="mt-12 overflow-hidden shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 facelab-purple text-center">
                      Before & After Results
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="relative">
                        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <span className="text-sm">Before Image</span>
                          </div>
                        </div>
                        <Badge className="absolute top-2 left-2 bg-red-500">Before</Badge>
                      </div>
                      <div className="relative">
                        <div className="aspect-square bg-facelab-green/10 rounded-lg flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <span className="text-sm">After Image</span>
                          </div>
                        </div>
                        <Badge className="absolute top-2 right-2 bg-facelab-green text-facelab-black">After</Badge>
                      </div>
                    </div>
                    <p className="text-center text-gray-600 italic">
                      {post.beforeAfter.description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h4 className="font-semibold mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-12 bg-facelab-gray-light border-none">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={`/images/doctors/${post.author.toLowerCase().replace(' ', '-').replace('.', '')}.jpg`} />
                      <AvatarFallback className="bg-facelab-purple text-white text-lg">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 facelab-black">{post.author}</h4>
                      <p className="text-gray-600 mb-4">
                        {post.author === 'Dr. Wathsala' 
                          ? 'Specialist in orthodontics and 3D smile design with over 12 years of experience. Pioneer in digital dentistry and clear aligner therapy.'
                          : 'Expert in facial surgery and digital dentistry with 15 years of clinical excellence. Recognized for innovative surgical techniques.'
                        }
                      </p>
                      <Link href="/about-us">
                        <Button variant="outline" size="sm" className="rounded-full">
                          <User className="mr-2 h-4 w-4" />
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Actions */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Like this article
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Leave a comment
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">In This Article</h4>
                    <div className="space-y-2 text-sm">
                      {post.content.match(/## ([^\n]+)/g)?.map((heading, index) => (
                        <div key={index} className="text-gray-600 hover:facelab-purple cursor-pointer">
                          {heading.replace('## ', '')}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-facelab-purple text-white">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-3">Ready to Transform Your Smile?</h4>
                    <p className="text-sm mb-4 opacity-90">
                      Schedule a consultation with our expert team today.
                    </p>
                    <Link href="/contact">
                      <Button className="bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full w-full">
                        Book Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-facelab-gray-light">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center facelab-black">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group border-2 border-gray-100 hover:border-facelab-purple/30 transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-video bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-400" />
                    </div>
                    <Badge 
                      className={`absolute top-3 left-3 ${
                        relatedPost.category === 'patient-stories' ? 'bg-facelab-purple' :
                        relatedPost.category === 'tips' ? 'bg-facelab-green text-facelab-black' :
                        'bg-gray-500'
                      }`}
                    >
                      {blogCategories.find(cat => cat.id === relatedPost.category)?.name}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:facelab-purple transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}m
                      </div>
                      <Link href={`/blogs/${relatedPost.slug}`}>
                        <Button size="sm" variant="ghost" className="rounded-full text-facelab-purple">
                          Read
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blogs">
                <Button className="bg-facelab-purple hover:bg-facelab-purple/90 rounded-full px-8">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}