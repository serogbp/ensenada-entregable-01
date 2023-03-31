// Api creada en mocki.io
export const getPosts = async () => {
	try {
		const result = await fetch("https://mocki.io/v1/5c9bb357-85cf-4854-93b5-16ff51bbf8ce");
		if (result.ok) {
			const json = await result.json();
			return json;
		}
		return getBackupAPI();
	} catch (error) {
		return getBackupAPI();
	}
};

// Si por algún motivo no se puede hacer el fetch, usar este backup de la api
const getBackupAPI = () => {
	return [
		{
			title: "Should AI development beyond GPT-4 be paused?",
			imageUrl: "https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e",
			tags: ["#discuss", "#ai", "#healthydebate", "#openai"],
		},
		{
			title: "5 innovative dev tools to improve your workflow",
			imageUrl: "",
			tags: ["#programming", "#productivity", "#devops", "#tooling"],
		},
		{
			title: "Build a .NET API in 3 minutes with Chat GPT 🤯",
			imageUrl: "",
			tags: ["#dotnet", "#csharp", "#chatgpt", "#openai"],
		},
		{
			title: "#DEVDiscuss: Design Patterns",
			imageUrl: "",
			tags: ["#devdiscuss", "#programming", "#designpatterns", "#design"],
		},
		{
			title: "What Is Your Greatest (Unique) Strength as a Developer?",
			imageUrl: "",
			tags: ["#discuss", "#beginners", "#codenewbie"],
		},
		{
			title: "Enhancing Code Quality: How ChatGPT Can Help You Follow Best Practices and Maintainable Code 🚀",
			imageUrl: "",
			tags: ["#ai", "#productivity", "#tutorial"],
		},
		{
			title: "How to Create Responsive Containers for Your Website: Step-by-Step Tutorial",
			imageUrl: "",
			tags: ["#webdev", "#css", "#html", "#tutorial"],
		},
		{
			title: "React Server Components Without a Framework",
			imageUrl: "",
			tags: ["#react", "#typescript", "#javascript", "#webdev"],
		},
		{
			title: "Moonly weekly progress update #42",
			imageUrl: "",
			tags: ["#javascript", "#growth", "#blockchain", "#saas"],
		},
		{
			title: "Graph Databases vs Relational Databases: What and why?",
			imageUrl: "",
			tags: ["#webdev", "#database", "#computerscience", "#programming"],
		},
		{
			title: "How I passed the AWS Certified Database — Specialty Exam (DBS-C01)",
			imageUrl: "",
			tags: [],
		},
		{
			title: "📚 34 JavaScript String Methods Cheatsheet",
			imageUrl: "",
			tags: ["#webdev", "#javascript", "#beginners", "#cheatsheet"],
		},
		{
			title: "A detailed guide on how to implement Server-side Rendering (SSR) in a NextJs Application",
			imageUrl: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b",
			tags: ["#nextjs", "#webdev", "#react", "#javascript"],
		},
		{
			title: "Guzzle üzerinden Proxy kullanımı",
			imageUrl: "",
			tags: ["#guzzle", "#proxy", "#bash"],
		},
		{
			title: "Getting Started With Python's ABC",
			imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
			tags: ["#oop", "#python", "#programming", "#tutorial"],
		},
		{
			title: "Do you know about the Accounting Information System (AIS)?",
			imageUrl: "",
			tags: ["#webdev", "#beginners", "#programming", "#ais"],
		},
		{
			title: "Conditional Rendering in React: Best Practices and Examples",
			imageUrl: "",
			tags: ["#react", "#reactnative", "#programming", "#webdev"],
		},
		{
			title: "Best practices for novice developers",
			imageUrl: "",
			tags: ["#frontend", "#backend", "#programming", "#ux"],
		},
		{
			title: "Air Traffic Routing With Memgraph",
			imageUrl: "",
			tags: ["#memgraph", "#algorithms", "#graphdatabase", "#aviation"],
		},
		{
			title: "How do you keep yourself motivated and passionate about coding?",
			imageUrl: "",
			tags: ["#help", "#career", "#programming", "#health"],
		},
		{
			title: "The Solution Architect's Guide to Serverless",
			imageUrl: "",
			tags: ["#solutionsarchitect", "#serverless"],
		},
		{
			title: "Welcome Thread - v218",
			imageUrl: "",
			tags: ["#welcome"],
		},
		{
			title: "Avalonia UI and MAUI - Something for everyone",
			imageUrl: "",
			tags: ["#avaloniaui", "#dotnet", "#maui", "#crossplatform"],
		},
		{
			title: "10 open-source alternatives to run your businesses",
			imageUrl: "https://images.unsplash.com/photo-1569017388730-020b5f80a004",
			tags: ["#javascript", "#python", "#opensource", "#startup"],
		},
		{
			title: "Type Narrowing vs Type Casting in TypeScript",
			imageUrl: "",
			tags: ["#typescript", "#javascript", "#webdev", "#beginners"],
		},
		{
			title: "A Complete Step-by-Step Guide to Start a Blog for Software Developers",
			imageUrl: "",
			tags: ["#webdev", "#beginners", "#career", "#writing"],
		},
		{
			title: "Can ChatGPT Terraform Simple Networking In AWS?",
			imageUrl: "",
			tags: ["#aws", "#awscommunitybuilders", "#terraform", "#chatgpt"],
		},
		{
			title: "How to build a mood tracker app in Flutter",
			imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
			tags: ["#flutter", "#appwrite", "#mobilefullstack", "#mobiledevelopment"],
		},
		{
			title: "Working With Azure Synapse Analytics Service Using Azure Cloud Portal",
			imageUrl: "",
			tags: ["#webdev", "#javascript", "#programming", "#devops"],
		},
		{
			title: "Checking if we migrated all the pages",
			imageUrl: "",
			tags: ["#automation", "#gatsby", "#nextjs", "#landingpage"],
		},
		{
			title: "Implementing Datadog For Kubernetes",
			imageUrl: "",
			tags: ["#kubernetes", "#devops", "#docker", "#git"],
		},
		{
			title: "Things I Wish I Knew Before Starting A Tech Blog",
			imageUrl: "",
			tags: ["#writing"],
		},
		{
			title: "RxJS 7 - Pipeable Operators",
			imageUrl: "",
			tags: ["#webdev", "#javascript", "#rxjs", "#angular"],
		},
		{
			title: "Compare Colors Palettes",
			imageUrl: "",
			tags: ["#colors", "#palette", "#compare", "#webdev"],
		},
		{
			title: "Flappy App, Why and How to make a game in Power Apps",
			imageUrl: "",
			tags: ["#powerapps", "#powerplatform", "#gamedev", "#lowcode"],
		},
		{
			title: "Aaah, a quick review I see.",
			imageUrl: "",
			tags: ["#watercooler"],
		},
		{
			title: 'Talk Notes: "Simple Made Easy" by Rich Hickey (2011)',
			imageUrl: "",
			tags: ["#techtalks"],
		},
		{
			title: "ReactJS Tutorial for Beginners: Build Your First React Application (Part 2)",
			imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
			tags: ["#react", "#beginners", "#webdev", "#frontend"],
		},
		{
			title: "How to Optimize Performance of Strapi-Powered Websites and Applications",
			imageUrl: "",
			tags: [],
		},
		{
			title: "A step-by-step guide on using Redux Toolkit with React",
			imageUrl: "",
			tags: ["#react", "#tutorial", "#devops"],
		},
		{
			title: "Only 34% of developers got this JS concept right 😱❗️❗️",
			imageUrl: "",
			tags: ["#javascript", "#beginners", "#webdev", "#programming"],
		},
		{
			title: "What advice do you have for someone starting out as a developer and trying to build a portfolio of projects?",
			imageUrl: "",
			tags: ["#discuss", "#programming", "#codenewbie"],
		},
		{
			title: "Breaking and building encryption in NFC digital wallets 📳",
			imageUrl: "",
			tags: ["#encryption", "#cryptography", "#security", "#appsec"],
		},
		{
			title: "Always-Listening Voice Commands for Vaadin web applications",
			imageUrl: "",
			tags: ["#picovoice", "#vaadin", "#java"],
		},
		{
			title: "Zerando HackerRank ( 24 )",
			imageUrl: "",
			tags: [],
		},
		{
			title: "How to Center a Div : CSS Tips and Tricks",
			imageUrl: "",
			tags: [],
		},
		{
			title: "Manage Prometheus TSDB in the better way!",
			imageUrl: "",
			tags: ["#prometheus"],
		},
		{
			title: "Manage Calendar & Address Book Micro-services",
			imageUrl: "",
			tags: ["#cloud", "#docker", "#microservices", "#opensource"],
		},
		{
			title: "7 Best Practices Used in Python for Automation",
			imageUrl: "",
			tags: ["#python", "#automaton", "#bestpractices", "#programming"],
		},
		{
			title: "How to Extract Bing News Data with SerpApi and Python",
			imageUrl: "",
			tags: ["#webscraping", "#python", "#tutorial", "#programming"],
		},
	];
};
