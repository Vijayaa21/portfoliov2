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

    // Sort by creation date - newest projects first (most recent at top)
    portfolioRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

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

// Get project image - uses GitHub social preview or tech-themed gradients
function getProjectImage(repo) {
  // Use GitHub's social preview image (OpenGraph image) if available
  // This uses the raw.githubusercontent.com endpoint for social preview
  const socialPreview = `https://opengraph.githubassets.com/1/${repo.full_name}`;
  
  // Return the GitHub-generated social preview image
  // This shows repo name, description, stats - looks professional
  return socialPreview;
}
