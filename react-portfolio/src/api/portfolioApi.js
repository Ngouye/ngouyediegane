import { profile, projects, experiences, educations, skills, cybersecurityCertifications } from '../data/portfolioData';

// Simuler un léger délai réseau pour l'effet de chargement
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPortfolio() {
  // Pas de délai, chargement instantané

  return {
    profile,
    projects,
    experiences,
    educations,
    skills,
    cybersecurityCertifications
  };
}

export async function getProjects(featured) {
  if (featured) {
    return projects.filter(p => p.featured);
  }
  return projects;
}

export async function getProject(id) {
  const project = projects.find(p => p.id === parseInt(id));
  if (!project) throw new Error("Projet non trouvé");
  return project;
}

export async function sendContact(data) {
  await delay(800);
  // Simuler un succès
  return { message: "Message envoyé avec succès (simulation)" };
}
