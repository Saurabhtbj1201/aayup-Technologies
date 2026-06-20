import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingLogo } from "@/components/ui/floating-logo";

const blogPosts = [
	{
		id: "ai-web-dev",
		title: "The Future of AI in Web Development",
		summary: `How AI is changing developer workflows and the web user experience. Practical uses, tooling, and what to watch next.`,
		readingTime: "6 min read",
		tags: ["AI", "Web", "Tools"],
		keyPoints: [
			"AI accelerates repetitive tasks like testing and formatting",
			"Personalization at scale improves UX",
			"Developers should learn to integrate AI assistants into workflows",
		],
		content: `Artificial intelligence is revolutionizing web development by automating tasks, enhancing user experience, and enabling smarter applications. In this article, we explore the latest trends and how developers can leverage AI tools for better productivity and innovation.\n\nAI-powered code assistants, chatbots, and personalized content delivery are just a few examples of how AI is shaping the future of the web.`,
		author: "Aayush Pandey",
		date: "2024-03-15",
		image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
		category: "AI & Technology",
		related: ["mobile-best-practices", "communication-skills-tech"],
	},
	{
		id: "mobile-best-practices",
		title: "Best Practices for Mobile App Development",
		summary: `Guidelines and practical tips to build performant and user-friendly mobile apps.`,
		readingTime: "5 min read",
		tags: ["Mobile", "Performance", "UX"],
		keyPoints: [
			"Prioritize performance and perceived speed",
			"Design for intermittent connectivity and offline usage",
			"Measure and iterate with real user metrics",
		],
		content: `Creating high-performance mobile applications requires careful planning, efficient coding, and a focus on user experience. This post covers essential guidelines for building apps that users love.\n\nFrom responsive design to offline support and performance optimization, discover the best practices that set successful apps apart.`,
		author: "Sarthak Verma",
		date: "2024-03-10",
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
		category: "Mobile Development",
		related: ["ai-web-dev"],
	},
	{
		id: "communication-skills-tech",
		title: "Communication Skills for Tech Professionals",
		summary: `Soft skills that help engineers and tech professionals collaborate and advance their careers.`,
		readingTime: "4 min read",
		tags: ["Career", "Communication", "Soft Skills"],
		keyPoints: [
			"Practice active listening and empathy",
			"Write clear documentation and status updates",
			"Present ideas with structure and purpose",
		],
		content: `Technical skills are important, but communication is key to success in the tech industry. Learn why soft skills matter and how to improve your communication abilities for better teamwork and career growth.\n\nTips include active listening, clear documentation, and effective presentation skills.`,
		author: "Akanksha Pandey",
		date: "2024-03-05",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
		category: "Career Development",
		related: ["ai-web-dev"],
	},
];

const BlogDetail = () => {
	const { id } = useParams();
	const post = blogPosts.find((b) => b.id === id);

	if (!post) {
		return (
			<div className="min-h-screen flex flex-col">
				<Navigation />
				<div className="flex-1 flex items-center justify-center">
					<div className="text-center">
						<h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
						<Link to="/blog" className="text-primary underline">
							Back to Blog
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/30">
			<Navigation />
			<main className="flex-1 container mx-auto px-4 py-20 relative">
				<FloatingLogo />
				<div className="max-w-3xl mx-auto">
					<img
						src={post.image}
						alt={post.title}
						className="w-full h-64 object-cover rounded-xl mb-8"
					/>
					<span className="bg-primary px-3 py-1 rounded-full text-xs font-medium text-white mb-4 inline-block">
						{post.category}
					</span>
					<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
					<div className="flex items-center space-x-4 text-sm text-foreground/60 mb-6">
						<span>{new Date(post.date).toLocaleDateString()}</span>
						<span>By {post.author}</span>
						{post.readingTime && (
							<span className="ml-2">• {post.readingTime}</span>
						)}
					</div>
					{post.summary && (
						<p className="text-base text-foreground/70 italic mb-6">{post.summary}</p>
					)}
					{post.tags && (
						<div className="flex flex-wrap gap-2 mb-6">
							{post.tags.map((t) => (
								<span key={t} className="text-xs bg-muted px-2 py-1 rounded-full">
									{t}
								</span>
							))}
						</div>
					)}
					<div className="text-lg text-foreground/80 whitespace-pre-line mb-8">
						{post.content}
					</div>
					{post.keyPoints && (
						<div className="mb-8">
							<h3 className="text-lg font-semibold mb-3">Key Takeaways</h3>
							<ul className="list-disc pl-5 space-y-2 text-foreground/80">
								{post.keyPoints.map((kp) => (
									<li key={kp}>{kp}</li>
								))}
							</ul>
						</div>
					)}
					{post.related && post.related.length > 0 && (
						<div className="mt-6">
							<h4 className="font-medium mb-2">Related posts</h4>
							<ul className="space-y-2">
								{post.related.map((rid) => {
									const related = blogPosts.find((b) => b.id === rid);
									if (!related) return null;
									return (
										<li key={rid}>
											<Link to={`/blog/${related.id}`} className="text-primary underline">
												{related.title}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					)}
					<Link to="/blog" className="text-primary underline">
						← Back to Blog
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default BlogDetail;
