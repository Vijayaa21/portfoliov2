// Fetches GitHub repositories with the 'portfolio-project' topic
export async function getPortfolioProjects(username = 'Vijayaa21') {
  try {
    const headers = {
      Accept: 'application/vnd.github.mercy-preview+json', // Required for topics
    };

    // Add authorization if token is available (higher rate limits)
    if (process.env.GITHUB_ACCESS_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_ACCESS_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers }
    );

    if (!response.ok) {
      console.error('GitHub API error:', response.status, response.statusText);
      return [];
    }

    const repos = await response.json();

    // Filter for repos that have the 'portfolio-project' topic
    const portfolioRepos = repos.filter(
      (repo) => repo.topics && repo.topics.includes('portfolio-project')
    );

    // Sort by most recently updated first
    portfolioRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    // Transform to match your project card structure
    return portfolioRepos.map((repo) => ({
      title: formatRepoName(repo.name),
      description: repo.description || 'No description provided.',
      tech: repo.topics.filter((topic) => topic !== 'portfolio-project'), // Use other topics as tech stack
      level: getLevelFromTopics(repo.topics),
      image: getProjectImage(repo),
      github: repo.html_url,
      demo: repo.homepage || null,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      updatedAt: repo.updated_at,
      isFromGitHub: true, // Flag to identify auto-fetched projects
    }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}

// Convert repo name to readable title (e.g., "my-cool-project" -> "My Cool Project")
function formatRepoName(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Determine project level from topics
function getLevelFromTopics(topics) {
  if (topics.includes('advanced') || topics.includes('complex')) return 'advanced';
  if (topics.includes('intermediate') || topics.includes('medium')) return 'intermediate';
  if (topics.includes('beginner') || topics.includes('simple')) return 'beginner';
  return 'intermediate'; // Default level
}

// Get project image - uses Open Graph image or a placeholder based on language
function getProjectImage(repo) {
  // You can use the social preview image if available via a different API
  // For now, we'll use language-based placeholder images
  const languageImages = {
    JavaScript: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
    TypeScript: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
    Python: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop',
    Java: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    'C++': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
    Go: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    Rust: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
    Ruby: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    PHP: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=600&h=400&fit=crop',
    HTML: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop',
    CSS: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  };

  return (
    languageImages[repo.language] ||
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
  );
}
