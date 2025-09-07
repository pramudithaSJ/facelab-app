"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { blogCategories } from "@/lib/data/content";
import { getBlogPosts, BlogPost } from "@/lib/data/blog-data";
import Link from "next/link";
import { 
  Search, 
  Clock, 
  ArrowRight,
  BookOpen,
  Sparkles,
  TrendingUp,
  Filter
} from "lucide-react";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts] = useState<BlogPost[]>(getBlogPosts());

  // Filter posts based on category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];
  const regularPosts = filteredPosts.slice(selectedCategory === 'all' ? 1 : 0);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 mt-16 pb-20 bg-gradient-to-br from-facelab-green/10 to-facelab-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="facelab-black">FaceLab </span>
            <span className="facelab-green">Blog</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover inspiring patient stories, expert dental tips, and the latest 
            innovations in oral health and smile design.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full text-center touch-target"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold facelab-green">{posts.length}</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold facelab-green">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold facelab-green">10K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-gray-500 flex-shrink-0" />
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full whitespace-nowrap ${
                selectedCategory === 'all' ? 'bg-facelab-purple' : 'border-gray-300'
              }`}
            >
              All Articles
            </Button>
            
            {blogCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full whitespace-nowrap ${
                  selectedCategory === category.id 
                    ? category.id === 'patient-stories' ? 'bg-facelab-purple' :
                      category.id === 'tips' ? 'bg-facelab-green text-facelab-black' :
                      'bg-gray-500'
                    : 'border-gray-300'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'all' && featuredPost && (
        <section className="py-12 bg-facelab-gray-light">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 facelab-purple" />
              <h2 className="text-2xl font-bold facelab-black">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden shadow-xl border-2 border-facelab-purple/20 hover:border-facelab-purple/40 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Featured Image */}
                <div className="relative aspect-video lg:aspect-auto bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <BookOpen className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Featured Article Image</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-facelab-purple">
                    Featured
                  </Badge>
                </div>
                
                {/* Content */}
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge 
                      className={
                        featuredPost.category === 'patient-stories' ? 'bg-facelab-purple' :
                        featuredPost.category === 'tips' ? 'bg-facelab-green text-facelab-black' :
                        'bg-gray-500'
                      }
                    >
                      {blogCategories.find(cat => cat.id === featuredPost.category)?.name}
                    </Badge>
                    <span className="text-sm text-gray-500">•</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 facelab-black leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/images/doctors/${featuredPost.author.toLowerCase().replace(' ', '-').replace('.', '')}.jpg`} />
                        <AvatarFallback className="text-xs bg-facelab-purple text-white">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{featuredPost.author}</div>
                        <div className="text-xs text-gray-500">
                          {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      <Button className="bg-facelab-purple hover:bg-facelab-purple/90 rounded-full">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <>
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="h-5 w-5 facelab-green" />
                <h2 className="text-2xl font-bold facelab-black">
                  {selectedCategory === 'all' ? 'Latest Articles' : 
                   blogCategories.find(cat => cat.id === selectedCategory)?.name || 'Articles'}
                </h2>
                <span className="text-gray-500">({filteredPosts.length})</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="group border-2 border-gray-100 hover:border-facelab-green/30 transition-all duration-300 hover:shadow-xl">
                    {/* Article Image */}
                    <div className="relative aspect-video bg-gray-100 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <BookOpen className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-sm">Article Image</p>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <Badge 
                        className={`absolute top-3 left-3 ${
                          post.category === 'patient-stories' ? 'bg-facelab-purple' :
                          post.category === 'tips' ? 'bg-facelab-green text-facelab-black' :
                          'bg-gray-500'
                        }`}
                      >
                        {blogCategories.find(cat => cat.id === post.category)?.name}
                      </Badge>
                      
                      {/* Read Time */}
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}m
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:facelab-purple transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Author and Date */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`/images/doctors/${post.author.toLowerCase().replace(' ', '-').replace('.', '')}.jpg`} />
                            <AvatarFallback className="text-xs bg-facelab-purple text-white">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-xs font-medium">{post.author}</div>
                            <div className="text-xs text-gray-500">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          </div>
                        </div>
                        
                        <Link href={`/blogs/${post.slug}`}>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="rounded-full text-facelab-purple hover:bg-facelab-purple/10"
                          >
                            Read
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <BookOpen className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">No articles found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? `No articles match your search for "${searchQuery}"`
                  : `No articles available in the selected category`
                }
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-facelab-purple hover:bg-facelab-purple/90 rounded-full"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-facelab-purple text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with FaceLab
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest dental tips, patient stories, and exclusive updates 
            delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 rounded-full px-6 py-3 touch-target"
            />
            <Button 
              className="bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full px-8 py-3 touch-target"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-70 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}