export const profile = {
  fullName: "NGOUYE DIEGANE GNING",
  title: "Analyste SOC | Administrateur Système & Cloud | DevSecOps & AI",
  email: "gningngouye2001@gmail.com",
  phone: "+221 77 952 77 84",
  location: "Dakar, Sénégal",
  bio: "Administrateur système et cloud avec une spécialisation DevSecOps et IA, spécialisé dans la détection de menaces, la réponse aux incidents et l'automatisation sécurisée. Je combine des connaissances théoriques en cryptographie (Master UCAD) avec une maîtrise opérationnelle des infrastructures Cloud AWS, de l'automatisation via Ansible et des solutions IA. Orienté Zero Trust, durcissement système, réduction de surface d'attaque et surveillance proactive des environnements critiques.",
  avatarUrl: "/ngouye.png",
  githubUrl: "https://github.com/ngouyegning",
  linkedinUrl: "https://www.linkedin.com/in/ngouye-gning-316a812b3",
  cvUrl: "#"
};

export const projects = [
  {
    id: 0,
    title: "SamaBoutik",
    description: "Créez votre vitrine en 2 minutes. La solution e-commerce tout-en-un.",
    longDescription: "Gérez vos produits, recevez des commandes sur WhatsApp et suivez vos livraisons en temps réel. La plateforme idéale pour lancer son e-commerce sans friction.",
    imageUrl: "/samaboutik.png",
    demoUrl: "https://samaboutik-nine.vercel.app",
    category: "Full Stack",
    featured: true,
    startDate: "2026-08-01",
    endDate: "2026-09-01",
    technologies: ["React", "Vercel", "E-commerce", "SaaS"]
  },
  {
    id: 1,
    title: "Pipeline CI/CD AWS CodePipeline",
    description: "Pipeline complet CodeBuild → CodeDeploy avec intégration sécurisée.",
    longDescription: "Conception et déploiement d'un pipeline CI/CD sur AWS : CodePipeline pour l'orchestration, CodeBuild pour la compilation et les tests, CodeDeploy pour le déploiement blue/green sur EC2 et ECS. Intégration SAST (Bearer, SonarQube, Semgrep), scan IaC (Checkov, tfsec), secrets (Gitleaks, TruffleHog), images (Dockle), SCA (Trivy) et DAST (OWASP ZAP).",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    githubUrl: "https://github.com/ngouyegning/aws-cicd-pipeline",
    category: "DevSecOps",
    featured: true,
    startDate: "2025-01-01",
    endDate: "2026-06-06",
    technologies: ["AWS", "CodePipeline", "CodeBuild", "CodeDeploy", "Docker", "GitHub Actions"]
  },
  {
    id: 2,
    title: "Infrastructure as Code — Terraform AWS",
    description: "Provisioning multi-environnements (dev/staging/prod) avec Terraform.",
    longDescription: "Modules Terraform réutilisables pour provisionner VPC, ECS Fargate, RDS PostgreSQL, ALB, IAM roles et S3. State remote sur S3 avec locking DynamoDB. Politiques de sécurité intégrées : encryption at rest, least privilege IAM, Security Groups restrictifs et CloudWatch alerting.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600",
    githubUrl: "https://github.com/ngouyegning/terraform-aws-infra",
    category: "Cloud",
    featured: true,
    startDate: "2024-08-01",
    endDate: "2025-03-01",
    technologies: ["Terraform", "AWS", "ECS", "RDS", "VPC", "IAM"]
  },
  {
    id: 3,
    title: "Cluster Kubernetes Production",
    description: "Déploiement K8s avec Helm, monitoring et sécurité renforcée.",
    longDescription: "Mise en place d'un cluster Kubernetes (EKS) avec namespaces isolés, Ingress NGINX, cert-manager pour TLS automatique, Horizontal Pod Autoscaler. Charts Helm pour le déploiement des microservices Spring Boot. Stack observabilité : Prometheus, Grafana, Loki. Politiques NetworkPolicy et RBAC.",
    imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600",
    githubUrl: "https://github.com/ngouyegning/k8s-production",
    category: "DevSecOps",
    featured: true,
    startDate: "2024-04-01",
    endDate: "2024-12-01",
    technologies: ["Kubernetes", "Docker", "Helm", "AWS EKS", "Prometheus", "Grafana"]
  },
  {
    id: 4,
    title: "Automatisation Cloud AWS avec Ansible",
    description: "Gestion et administration d'une infrastructure cloud AWS via Ansible.",
    longDescription: "Playbooks Ansible pour provisionner et durcis des serveurs Linux sur AWS, installer des agents de supervision et automatiser des déploiements sécurisés. Workflow avec pipelines CI/CD, hardening système et validation de configurations.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    githubUrl: "https://github.com/ngouyegning/ansible-jenkins-automation",
    category: "DevSecOps",
    featured: false,
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    technologies: ["Ansible", "AWS", "Linux", "Security Hardening", "Bash"]
  },
  {
    id: 5,
    title: "Plateforme SIEM Wazuh",
    description: "Déploiement complet d'une architecture Wazuh pour supervision de la sécurité.",
    longDescription: "Installation et configuration de Wazuh Manager, agents et indexer. Collecte centralisée de logs, règles de détection personnalisées, dashboards d'analyse et réponse aux incidents de premier niveau.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
    category: "SOC",
    featured: false,
    startDate: "2024-09-01",
    endDate: "2025-02-01",
    technologies: ["Wazuh", "ELK", "SIEM", "FIM", "Alerting"]
  },
  {
    id: 6,
    title: "Segmentation Réseau & Durcissement FortiGate",
    description: "Architecture sécurisée DMZ / LAN / WAN avec politiques FortiGate avancées.",
    longDescription: "Conception d'une segmentation réseau pour isoler services critiques, déploiement de règles IPS, NAT, filtrage applicatif et zonage sécurisé sur FortiGate.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    category: "Sécurité Réseau",
    featured: false,
    startDate: "2024-10-01",
    endDate: "2025-03-01",
    technologies: ["FortiGate", "Firewall", "IPS", "Segmentation", "VLAN"]
  },
  {
    id: 7,
    title: "PlatMoi — Portfolio DevSecOps",
    description: "Plateforme portfolio Spring Boot + React avec PostgreSQL containerisé.",
    longDescription: "Application portfolio full stack : API REST Spring Boot, frontend React, base PostgreSQL. Docker Compose pour le dev local, pipeline GitHub Actions pour CI/CD, déploiement containerisé prêt pour Kubernetes.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    demoUrl: "http://localhost:5173",
    githubUrl: "https://github.com/ngouyegning/platmoi",
    category: "Full Stack",
    featured: false,
    startDate: "2025-01-01",
    endDate: "2026-06-06",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "GitHub Actions"]
  }
];

export const experiences = [
  {
    id: 1,
    company: "Freelance / Projets Cloud",
    role: "Profil DevSecOps",
    location: "Dakar, Sénégal",
    description: "Conception et implémentation de pipelines CI/CD, infrastructures cloud AWS et pratiques DevSecOps pour des équipes de développement.",
    startDate: "2024-01-01",
    current: true,
    achievements: [
      "Mise en place de pipelines AWS CodePipeline pour 3+ applications",
      "Déploiement de clusters Kubernetes (EKS) en production",
      "Automatisation IaC avec Terraform sur multi-environnements",
      "Intégration SAST, DAST et SCA dans les pipelines CI/CD",
      "Réduction du temps de déploiement de 45 min à 8 min"
    ]
  }
];

export const educations = [
  {
    id: 1,
    institution: "Université Cheikh Anta Diop de Dakar",
    degree: "Master 2",
    field: "Mathématiques, Cryptographie et Sécurité",
    location: "Dakar, Sénégal",
    description: "Master orienté cryptographie, sécurité des systèmes et protection des données.",
    startDate: "2025-09-01",
    endDate: "2026-06-01"
  },
  {
    id: 2,
    institution: "Université Cheikh Anta Diop de Dakar",
    degree: "Master 1",
    field: "Mathématiques, Cryptographie et Sécurité",
    location: "Dakar, Sénégal",
    description: "Approfondissement des protocoles cryptographiques, sécurité des réseaux et systèmes.",
    startDate: "2024-09-01",
    endDate: "2025-06-01"
  },
  {
    id: 3,
    institution: "Université Cheikh Anta Diop de Dakar",
    degree: "Licence",
    field: "Mathématiques, Cryptographie et Sécurité",
    location: "Dakar, Sénégal",
    description: "Formation initiale en mathématiques appliquées, cryptographie et cybersécurité.",
    startDate: "2023-09-01",
    endDate: "2024-06-01"
  },
  {
    id: 4,
    institution: "Lycée d'enseignement général de Ndondol",
    degree: "Baccalauréat S2",
    field: "Sciences Mathématiques",
    location: "Sénégal",
    description: "Diplôme de fin d'études secondaires spécialisé en mathématiques et sciences.",
    startDate: "2019-09-01",
    endDate: "2020-06-01"
  }
];

export const skills = [
  // Conteneurisation
  { id: 1, name: "Docker", category: "Conteneurisation", description: "Build, run & gestion d'images conteneurs", level: 92, icon: "🐳" },
  { id: 2, name: "Docker Compose", category: "Conteneurisation", description: "Orchestration multi-conteneurs en local", level: 88, icon: "📦" },
  { id: 3, name: "Kubernetes", category: "Conteneurisation", description: "Orchestration, scaling & haute dispo", level: 88, icon: "☸️" },
  { id: 4, name: "Helm", category: "Conteneurisation", description: "Charts & déploiements K8s versionnés", level: 82, icon: "⛵" },
  { id: 5, name: "Amazon ECR", category: "Conteneurisation", description: "Registry privé d'images Docker", level: 80, icon: "🏪" },

  // Infrastructure as Code
  { id: 6, name: "Terraform", category: "Infrastructure as Code", description: "Provisioning cloud déclaratif & state", level: 90, icon: "🏗️" },
  { id: 7, name: "Ansible", category: "Infrastructure as Code", description: "Configuration, déploiement & automation", level: 85, icon: "📋" },

  // CI/CD
  { id: 8, name: "Jenkins", category: "CI/CD", description: "Pipelines déclaratifs & multi-branches", level: 88, icon: "🔧" },
  { id: 9, name: "GitHub Actions", category: "CI/CD", description: "Workflows CI/CD intégrés au repo Git", level: 90, icon: "⚡" },
  { id: 10, name: "AWS CodeBuild", category: "CI/CD", description: "Compilation, tests & build automatisés", level: 85, icon: "🔨" },
  { id: 11, name: "AWS CodeDeploy", category: "CI/CD", description: "Déploiement blue/green & rolling", level: 85, icon: "🚀" },
  { id: 12, name: "AWS CodePipeline", category: "CI/CD", description: "Orchestration complète du pipeline AWS", level: 87, icon: "🔗" },

  // Cloud AWS
  { id: 13, name: "Amazon EC2", category: "Cloud AWS", description: "Instances compute & auto-scaling", level: 85, icon: "💻" },
  { id: 14, name: "Amazon ECS", category: "Cloud AWS", description: "Orchestration conteneurs managée", level: 83, icon: "📦" },
  { id: 15, name: "Amazon EKS", category: "Cloud AWS", description: "Kubernetes managé sur AWS", level: 82, icon: "☸️" },
  { id: 16, name: "Amazon S3", category: "Cloud AWS", description: "Stockage objets & artefacts CI/CD", level: 84, icon: "🪣" },
  { id: 17, name: "Amazon Route 53", category: "Cloud AWS", description: "Gestion DNS hautement disponible et routage de trafic", level: 80, icon: "🌐" },
  { id: 18, name: "Amazon CloudFront", category: "Cloud AWS", description: "Réseau de diffusion de contenu (CDN) mondial et sécurisé", level: 82, icon: "⚡" },
  { id: 19, name: "Amazon Certificate Manager", category: "Cloud AWS", description: "Gestion, déploiement et renouvellement automatique des certificats SSL/TLS", level: 85, icon: "🔒" },
  { id: 20, name: "AWS Amplify", category: "Cloud AWS", description: "Déploiement automatisé et hébergement de serveurs front-end et d'applications mobiles", level: 84, icon: "🚀" },
  { id: 21, name: "Amazon RDS", category: "Cloud AWS", description: "Bases de données managées", level: 78, icon: "🗄️" },
  { id: 22, name: "Amazon VPC", category: "Cloud AWS", description: "Réseau isolé, subnets & NAT", level: 80, icon: "🌐" },
  { id: 23, name: "AWS IAM", category: "Cloud AWS", description: "Rôles, policies & least privilege", level: 86, icon: "🔑" },
  { id: 24, name: "AWS CloudWatch", category: "Cloud AWS", description: "Logs, métriques & alerting", level: 82, icon: "📊" },
  { id: 25, name: "AWS Secrets Manager", category: "Cloud AWS", description: "Rotation & injection de secrets", level: 80, icon: "🔐" },
  { id: 26, name: "Wazuh", category: "SOC / SIEM", description: "Déploiement et gestion d'une plateforme SIEM pour surveillance et détection.", level: 84, icon: "🛡️" },
  { id: 27, name: "FortiGate", category: "Sécurité Réseau", description: "Firewalling, IPS et segmentation réseau avancés.", level: 82, icon: "🧱" },
  { id: 28, name: "iptables", category: "Sécurité Réseau", description: "Filtrage de paquets Linux et règles NAT.", level: 80, icon: "🛡️" },
  { id: 29, name: "UFW", category: "Sécurité Réseau", description: "Pare-feu simplifié pour serveurs Ubuntu et Debian.", level: 78, icon: "🔒" },
  { id: 30, name: "VMware", category: "Virtualisation", description: "Administration d'environnements VMware pour serveurs Linux et Windows.", level: 80, icon: "🖥️" },

  // SAST
  { id: 31, name: "Bearer", category: "SAST", description: "OWASP Top 10, CWE Top 25, flux sensibles & privacy RGPD", level: 86, icon: "🛡️" },
  { id: 32, name: "SonarQube", category: "SAST", description: "25+ langages — qualité + sécurité, tableau de bord centralisé", level: 88, icon: "🔍" },
  { id: 33, name: "Semgrep", category: "SAST", description: "30+ langages — règles personnalisables, rapide & open source", level: 85, icon: "📐" },
  { id: 34, name: "CodeQL", category: "SAST", description: "Java, JS, Python, Go, C++ — requêtes puissantes, intégré GitHub", level: 82, icon: "🧬" },
  { id: 35, name: "Bandit", category: "SAST", description: "Python — analyse simple & spécialisée sécurité", level: 80, icon: "🐍" },

  // Securite IaC
  { id: 36, name: "Checkov", category: "Sécurité IaC", description: "Terraform, K8s, Dockerfile, ARM — 1000+ règles, policies as code", level: 88, icon: "✅" },
  { id: 37, name: "KICS", category: "Sécurité IaC", description: "Multi-IaC — large couverture Terraform, K8s, CloudFormation…", level: 82, icon: "🔎" },
  { id: 38, name: "tfsec", category: "Sécurité IaC", description: "Terraform — scan spécialisé, précis & rapide", level: 84, icon: "🏗️" },

  // Securite Images Docker
  { id: 39, name: "Dockle", category: "Sécurité Images", description: "Images Docker — bonnes pratiques & CIS Benchmarks", level: 86, icon: "🐳" },

  // Detection Secrets
  { id: 40, name: "Gitleaks", category: "Détection Secrets", description: "Scan secrets Git — rapide, règles complètes & pre-commit hooks", level: 90, icon: "🔑" },
  { id: 41, name: "TruffleHog", category: "Détection Secrets", description: "Détection secrets — vérification credentials actifs en ligne", level: 85, icon: "🐷" },

  // DAST
  { id: 42, name: "OWASP ZAP", category: "DAST", description: "Référence open source — spider, active scan, fuzzing", level: 88, icon: "🕷️" },
  { id: 43, name: "Burp Suite", category: "DAST", description: "Fonctionnalités avancées, fuzzer puissant", level: 85, icon: "🎯" },
  { id: 44, name: "Nikto", category: "DAST", description: "Simple, rapide — détection misconfigurations serveur web", level: 78, icon: "🔎" },
  { id: 45, name: "Nuclei", category: "DAST", description: "Ultra-rapide — 11 000+ templates communautaires", level: 90, icon: "⚡" },
  { id: 46, name: "Nmap + NSE", category: "DAST", description: "Classique & polyvalent — scripts NSE pour vulnérabilités", level: 82, icon: "🗺️" },
  { id: 47, name: "mitmproxy", category: "DAST", description: "Proxy scriptable en Python", level: 84, icon: "🔀" },

  // SCA
  { id: 48, name: "Trivy", category: "SCA", description: "CVE dans images Docker, OS packages & dépendances", level: 88, icon: "🛡️" },
  { id: 49, name: "Snyk", category: "SCA", description: "Vulnérabilités dépendances npm, Maven, pip", level: 85, icon: "📦" },
  { id: 50, name: "OWASP Dependency-Check", category: "SCA", description: "Détection CVE dans bibliothèques tierces", level: 82, icon: "🔗" },
  { id: 51, name: "Grype", category: "SCA", description: "Analyse CVE packages & images conteneurs", level: 78, icon: "🔬" },

  // Observabilite
  { id: 52, name: "Prometheus", category: "Observabilité", description: "Collecte métriques & alerting", level: 80, icon: "📈" },
  { id: 53, name: "Grafana", category: "Observabilité", description: "Dashboards & visualisation", level: 78, icon: "📉" },

  // Developpement
  { id: 54, name: "Spring Boot", category: "Développement", description: "API REST & microservices Java", level: 85, icon: "🍃" },
  { id: 55, name: "React", category: "Développement", description: "Interfaces web modernes", level: 82, icon: "⚛️" },
  { id: 56, name: "PostgreSQL", category: "Développement", description: "Base relationnelle production", level: 78, icon: "🐘" },
  { id: 57, name: "Linux / Bash", category: "Développement", description: "Administration serveurs & scripting", level: 88, icon: "🐧" },
  { id: 58, name: "Git", category: "Développement", description: "Versioning & GitFlow", level: 90, icon: "📦" }
];

export const cybersecurityCertifications = [
  {
    id: "cert-3",
    name: "Student SOC Program Foundations training",
    issuer: "Microsoft",
    issuedDate: "2026-03-12",
    description: "Formation aux fondamentaux du centre opérationnel de sécurité (SOC).",
    icon: "🛡️",
    imageUrl: "/certs/student-soc-program-foundations-microsoft.png",
    active: true
  },
  {
    id: "cert-4",
    name: "CS50's Introduction to Programming with Python",
    issuer: "Harvard University",
    issuedDate: "2025-01-01",
    description: "Introduction approfondie à la programmation et à l'algorithmique avec Python.",
    icon: "🐍",
    imageUrl: "/certs/cs50p-introduction-to-programming-with-python.png",
    active: true
  },
  {
    id: "cert-5",
    name: "Introduction à la méthode EBIOS Risk Manager",
    issuer: "Club EBIOS & ANSSI",
    issuedDate: "2025-12-28",
    description: "Formation sur la méthode de gestion des risques de cybersécurité EBIOS RM.",
    icon: "📊",
    imageUrl: "/certs/introduction-a-la-methode-ebios-risk-manager.png",
    active: true
  },
  {
    id: "cert-6",
    name: "Certified Ransomware Protection Officer (CRPO)",
    issuer: "EU Cyber Academy",
    issuedDate: "2026-02-23",
    description: "Certification sur la protection, la résilience et la réponse contre les ransomwares.",
    icon: "🔐",
    imageUrl: "/certs/crpo.png",
    active: true
  },
  {
    id: "cert-7",
    name: "Intelligence Artificielle pour tous",
    issuer: "FORCE-N",
    issuedDate: "2026-02-01",
    description: "Attestation de réussite du programme sur les concepts et applications de l'IA.",
    icon: "🤖",
    imageUrl: "/certs/certificat-en-intelligence-artificielle.png",
    active: true
  }
];
