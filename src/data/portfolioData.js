export const profile = {
  fullName: "NGOUYE DIEGANE GNING",
  title: "Analyste SOC | Administrateur Système & Cloud | DevSecOps & AI",
  email: "gningngouye2001@gmail.com",
  phone: "+221 77 952 77 84",
  location: "Dakar, Sénégal",
  // Formation en cours, affichée dans l'accueil et « À propos »
  degree: "Master 2 Transmission des données et sécurité de l'information",
  school: "UCAD",
  bio: "Étudiant en Master 2 Transmission des données et sécurité de l'information à l'UCAD, administrateur système et cloud spécialisé DevSecOps et IA : détection de menaces, réponse aux incidents et automatisation sécurisée. Mathématicien de formation, je prépare un mémoire en cryptographie post-quantique sur les schémas d'identification zero-knowledge basés sur la métrique sum-rank. Je combine cette rigueur théorique avec une maîtrise opérationnelle des infrastructures Cloud AWS, de l'automatisation via Ansible et des solutions IA. Orienté Zero Trust, durcissement système, réduction de surface d'attaque et surveillance proactive des environnements critiques.",
  avatarUrl: "/ngouye.webp",
  githubUrl: "https://github.com/ngouye",
  linkedinUrl: "https://www.linkedin.com/in/ngouye-gning-316a812b3",
  availability: "Disponible — CDI, alternance & missions"
};

// CV téléchargeables (section « CV ») — PDF et aperçu de la 1re page dans public/cv/
export const resumes = [
  {
    id: "soc",
    title: "Analyste SOC",
    subtitle: "Cybersécurité & protection ransomware",
    summary: "Détection de menaces et réponse aux incidents : SIEM Wazuh, FortiGate, cryptographie et protection ransomware (CRPO).",
    tools: ["Wazuh", "FortiGate", "iptables", "VMware"],
    file: "/cv/cv-ngouye-gning-analyste-soc.pdf",
    preview: "/cv/cv-ngouye-gning-analyste-soc.jpg"
  },
  {
    id: "devsecops",
    title: "Ingénieur Cloud DevSecOps & IA",
    subtitle: "Cloud AWS, IaC & intelligence artificielle",
    summary: "Architectures AWS sécurisées, automatisation Terraform et Ansible, sécurité intégrée aux pipelines CI/CD et industrialisation de modèles d'IA.",
    tools: ["AWS", "Terraform", "Kubernetes", "TensorFlow"],
    file: "/cv/cv-ngouye-gning-devsecops-cloud-ia.pdf",
    preview: "/cv/cv-ngouye-gning-devsecops-cloud-ia.jpg"
  },
  {
    id: "sysadmin",
    title: "Administrateur Système & Cloud",
    subtitle: "Linux, AWS & automatisation",
    summary: "Administration Linux et AWS, automatisation de flotte avec Ansible, durcissement système, maintien en condition opérationnelle et haute disponibilité.",
    tools: ["Linux", "Ansible", "AWS", "Docker"],
    file: "/cv/cv-ngouye-gning-admin-systeme-cloud.pdf",
    preview: "/cv/cv-ngouye-gning-admin-systeme-cloud.jpg"
  }
];

// Domaines d'expertise — `icon` correspond à une clé de EXPERTISE_ICONS (Expertise.jsx)
export const expertise = [
  {
    id: "soc",
    icon: "shield",
    title: "SOC & détection",
    summary: "Supervision de la sécurité, collecte centralisée des logs, règles de détection personnalisées et réponse aux incidents de premier niveau.",
    tags: ["Wazuh", "SIEM", "FIM", "Alerting", "Réponse à incident"]
  },
  {
    id: "devsecops",
    icon: "git",
    title: "DevSecOps",
    summary: "Sécurité intégrée à chaque étape du pipeline CI/CD : analyse statique, dépendances, IaC, images, secrets et tests dynamiques.",
    tags: ["SonarQube", "Semgrep", "Trivy", "Checkov", "Gitleaks", "OWASP ZAP"]
  },
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud AWS & IaC",
    summary: "Infrastructures AWS provisionnées en code, multi-environnements, avec moindre privilège IAM, chiffrement et observabilité.",
    tags: ["AWS", "Terraform", "Ansible", "EKS", "IAM", "CloudWatch"]
  },
  {
    id: "pentest",
    icon: "target",
    title: "Pentesting Web & Infra",
    summary: "Audit d'applications et d'API (injections, authentification, autorisation) et des surfaces d'attaque réseau, avec rapports de remédiation priorisés.",
    tags: ["Burp Suite", "Nuclei", "Nmap", "Metasploit", "OWASP ASVS"]
  },
  {
    id: "network",
    icon: "lock",
    title: "Réseau & cryptographie",
    summary: "Segmentation DMZ / LAN / WAN, filtrage et IPS, durcissement Zero Trust — appuyés par une formation de mathématicien et un mémoire en cryptographie post-quantique (Master 2, UCAD).",
    tags: ["FortiGate", "VLAN", "iptables", "AES", "RSA", "Zero Trust"]
  },
  {
    id: "ai",
    icon: "cpu",
    title: "IA & MLOps",
    summary: "Modèles de machine learning et deep learning, et leur mise en production : pipelines, versionnement et monitoring.",
    tags: ["Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "MLOps"]
  }
];

// Étapes du workflow DevSecOps présenté dans « À propos »
export const workflow = [
  { title: "Pre-commit", description: "Détection de secrets avant tout ajout de code.", tools: ["Gitleaks", "TruffleHog"] },
  { title: "Build & CI", description: "Analyses statiques : SAST, SCA et scan de l'IaC.", tools: ["SonarQube", "Semgrep", "Trivy", "Checkov"] },
  { title: "Staging & DAST", description: "Tests dynamiques et validation des images.", tools: ["OWASP ZAP", "Nuclei", "Dockle"] },
  { title: "Production", description: "Déploiement blue/green, sous supervision.", tools: ["AWS CodeDeploy", "Amazon ECS", "Amazon EKS"] }
];

// Regroupement des catégories de `skills` pour la section Compétences
export const skillGroups = [
  {
    id: "appsec",
    label: "Sécurité applicative",
    categories: ["SAST", "DAST", "SCA", "Sécurité IaC", "Sécurité Images", "Détection Secrets"]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    categories: ["Cloud AWS", "Conteneurisation", "Infrastructure as Code", "CI/CD", "Observabilité"]
  },
  {
    id: "infra",
    label: "SOC & infrastructure",
    categories: ["SOC / SIEM", "Sécurité Réseau", "Virtualisation"]
  },
  {
    id: "dev",
    label: "Développement",
    categories: ["Développement"]
  },
  {
    id: "math",
    label: "Mathématiques",
    categories: ["Mathématiques & cryptographie"]
  }
];

export const projects = [
  {
    id: 0,
    title: "SamaBoutik",
    description: "Créez votre vitrine en 2 minutes. La solution e-commerce tout-en-un.",
    longDescription: "Gérez vos produits, recevez des commandes sur WhatsApp et suivez vos livraisons en temps réel. La plateforme idéale pour lancer son e-commerce sans friction.",
    imageUrl: "/samaboutik.jpg",
    demoUrl: "https://samaboutik-nine.vercel.app",
    category: "Full Stack",
    featured: true,
    startDate: "2026-08-01",
    endDate: "2026-09-01",
    technologies: ["React", "Vercel", "E-commerce", "SaaS"]
  },
  {
    id: 8,
    title: "SecureVault — Gestionnaire de mots de passe",
    description: "Coffre-fort de mots de passe chiffré de bout en bout, directement dans le navigateur.",
    longDescription: "Chaque identifiant (service, identifiant et mot de passe) est chiffré dans le navigateur en AES-256-GCM, avec un vecteur unique à chaque écriture et la détection de toute altération. La clé est dérivée localement du mot de passe maître (PBKDF2, 600 000 itérations) et n'est jamais stockée : le serveur ne reçoit que des données illisibles. Générateur de mots de passe sans biais statistique (8 à 64 caractères, force estimée en temps réel), verrouillage automatique après 5 min d'inactivité, effacement du presse-papiers après 30 s et bilan de sécurité des mots de passe faibles ou réutilisés.",
    imageUrl: "/securevault.jpg",
    demoUrl: "https://gestion-password.vercel.app/",
    category: "Sécurité applicative",
    featured: true,
    technologies: ["React", "Vite", "Supabase", "Web Crypto API", "AES-256-GCM", "PBKDF2", "Vercel"]
  },
  {
    id: 1,
    title: "Pipeline CI/CD DevSecOps — AWS CodePipeline",
    description: "Du git push à la production : 10 outils de sécurité bloquants et déploiement blue/green sur ECS et EC2.",
    longDescription: "Chaîne CI/CD qui met le code en production sur AWS sans intervention humaine, mais seulement s'il est sûr. À chaque push sur main, CodePipeline enchaîne : détection de secrets sur tout l'historique Git (Gitleaks, TruffleHog), SAST (Semgrep, Bearer, SonarQube) et scan IaC (Checkov, tfsec) en parallèle ; puis CodeBuild lance les tests unitaires (couverture minimale de 80 %), l'analyse des dépendances (Trivy), construit l'image Docker, la contrôle (Dockle, Trivy) et ne la pousse dans ECR que si tout est vert. CodeDeploy la déploie en blue/green sur ECS Fargate et sur EC2 (Auto Scaling Group), avec retour arrière automatique, puis OWASP ZAP scanne l'application déployée. Toute l'infrastructure (VPC, ALB, ECS, EC2, ECR, S3, KMS, IAM, pipeline) est décrite en Terraform, et les outils sont installés avec version épinglée et empreinte SHA-256 vérifiée. Les mêmes contrôles tournent sur chaque Pull Request dans GitHub Actions (shift-left).",
    imageUrl: "/projects/cicd-devsecops.jpg",
    githubUrl: "https://github.com/Ngouye/CI_CD_CodePipeline_AWS",
    category: "DevSecOps",
    featured: true,
    startDate: "2026-10-01",
    endDate: "2026-10-16",
    technologies: ["AWS", "CodePipeline", "CodeBuild", "CodeDeploy", "ECS", "EC2", "ECR", "Terraform", "Docker", "Node.js", "GitHub Actions", "Gitleaks", "TruffleHog", "Semgrep", "Bearer", "SonarQube", "Checkov", "tfsec", "Trivy", "Dockle", "OWASP ZAP"]
  },
  {
    id: 2,
    title: "Infrastructure as Code — Terraform AWS",
    description: "10 modules Terraform pour une plateforme AWS de production, sécurisée par défaut et testée en CI.",
    longDescription: "Modules Terraform réutilisables qui provisionnent une plateforme applicative complète sur AWS : VPC 3 tiers multi-AZ, ALB en TLS 1.3, ECS Fargate avec auto scaling et rollback automatique, RDS PostgreSQL 17 chiffré, IAM, S3 et ECR. Le state est stocké sur S3 avec verrouillage DynamoDB, et les environnements dev et prod sont séparés (HTTPS obligatoire en prod). Sécurité par défaut : chiffrement KMS partout, IAM au moindre privilège, Security Groups chaînés, base sans route Internet et aucun secret dans le code ni dans le state. Observabilité avec 11 alarmes CloudWatch, un dashboard et des notifications SNS. Qualité vérifiée en CI GitHub Actions via OIDC : 15 tests terraform test, TFLint et Checkov (326 contrôles, 0 échec).",
    imageUrl: "/projects/terraform-aws.jpg",
    githubUrl: "https://github.com/Ngouye/Terraformproject",
    category: "Cloud",
    featured: true,
    startDate: "2026-10-01",
    endDate: "2026-10-14",
    technologies: ["Terraform", "AWS", "ECS", "RDS", "VPC", "IAM", "KMS", "DynamoDB", "CloudWatch", "Checkov", "TFLint", "GitHub Actions"]
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
    description: "Une commande provisionne, durcit, supervise, déploie et valide une application web sur AWS.",
    longDescription: "Automatisation de bout en bout, reproductible et sécurisée, de la mise en ligne d'une application web sur AWS, en 6 rôles Ansible. Une seule commande (make site) crée l'infrastructure (VPC sur 2 zones, Security Groups, rôle IAM, instances EC2 en IMDSv2 avec disque chiffré), durcit les serveurs avec plus de 50 mesures inspirées du CIS (SSH, sysctl, nftables, auditd, fail2ban, mises à jour automatiques), installe la supervision (Prometheus node_exporter, agent CloudWatch, alarmes avec auto-recovery), déploie l'application serveur par serveur avec retour arrière automatique en cas d'échec, puis vérifie 12 contrôles de conformité et produit un rapport. Inventaire dynamique par tags AWS, secrets dans SSM Parameter Store chiffré par KMS, chaîne d'approvisionnement vérifiée (SHA-256, signature GPG). CI/CD GitHub Actions : yamllint, ansible-lint en profil production, gitleaks, tests Molecule sur Ubuntu 24.04 et Rocky 9, déploiement via OIDC sans clé AWS stockée et détection de dérive chaque nuit.",
    imageUrl: "/projects/ansible-aws.jpg",
    githubUrl: "https://github.com/Ngouye/ProjectAnsible",
    category: "DevSecOps",
    featured: false,
    startDate: "2026-10-01",
    endDate: "2026-10-14",
    technologies: ["Ansible", "AWS", "EC2", "VPC", "IAM", "Ubuntu", "Nginx", "Flask", "nftables", "fail2ban", "Prometheus", "CloudWatch", "Molecule", "Gitleaks", "GitHub Actions"]
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
    githubUrl: "https://github.com/ngouyegning/platmoi",
    category: "Full Stack",
    featured: false,
    startDate: "2025-01-01",
    endDate: "2026-06-06",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "GitHub Actions"]
  },
  // Projets repris des CV — images : illustrations de public/projects/ (à remplacer par des captures)
  {
    id: 9,
    title: "Secure File Monitor",
    description: "Surveillance de l'intégrité des fichiers : empreintes SHA-256, coffre-fort AES-256-GCM et rapports PDF d'audit.",
    longDescription: "Application web de sécurité applicative qui calcule et compare des empreintes SHA-256 (en flux, comparaison en temps constant) pour détecter toute modification, suppression ou apparition de fichiers, avec des scans planifiés sur un répertoire surveillé. Les documents sensibles sont chiffrés au repos en AES-256-GCM, avec une clé unique par fichier dérivée par PBKDF2-HMAC-SHA256 (600 000 itérations) et aucun octet restitué avant vérification du tag. Rapports PDF d'audit générés avec Apache PDFBox et archivés avec leur empreinte, dont l'authenticité se vérifie dans l'interface. Tableau de bord type SOC : radar d'intégrité, niveau de menace calculé en direct et 6 contrôles de sécurité évalués en continu. Sécurité d'accès : JWT révocables, mots de passe BCrypt, politique ANSSI / OWASP, anti force brute, rôles Administrateur / Auditeur et verrouillage de session après 15 min d'inactivité. API Spring Boot 3 (Java 21), interface React + TypeScript, PostgreSQL, le tout lancé avec Docker Compose.",
    imageUrl: "/projects/secure-file-monitor.jpg",
    githubUrl: "https://github.com/Ngouye/Secure-File-Monitor",
    category: "Sécurité applicative",
    featured: false,
    startDate: "2026-10-01",
    endDate: "2026-10-20",
    technologies: ["Spring Boot", "Java", "React", "TypeScript", "PostgreSQL", "Docker", "Nginx", "SHA-256", "AES-256-GCM", "PBKDF2", "JWT", "Apache PDFBox"]
  },
  {
    id: 10,
    title: "EmployeeManagement — Gestion des employés",
    description: "Application web Django de gestion des employés, avec authentification.",
    longDescription: "Application web développée en Python avec Django pour la gestion des employés : authentification des utilisateurs, gestion CRUD complète des fiches employés (création, consultation, modification, suppression) et interface utilisateur sécurisée.",
    imageUrl: "/projects/employee-management.svg",
    category: "Full Stack",
    featured: false,
    technologies: ["Python", "Django", "Authentification"]
  },
  {
    id: 11,
    title: "Modèle YOLOv5 — Détection d'objets",
    description: "Modèle de détection d'objets en temps réel basé sur YOLOv5.",
    longDescription: "Mise en œuvre d'un modèle YOLOv5 pour la détection d'objets en temps réel : localisation des objets dans l'image par des boîtes englobantes et identification de leur classe.",
    imageUrl: "/projects/yolov5-detection.svg",
    category: "IA",
    featured: false,
    technologies: ["Python", "YOLOv5", "PyTorch", "Vision par ordinateur"]
  },
  {
    id: 12,
    title: "Détection de spam — Classifieur bayésien",
    description: "Classification de messages en spam ou légitimes avec un modèle bayésien.",
    longDescription: "Développement d'un modèle de classification de messages utilisant le classifieur bayésien naïf multinomial, qui estime la probabilité qu'un message soit un spam à partir de la fréquence des mots qu'il contient.",
    imageUrl: "/projects/spam-detection.svg",
    category: "IA",
    featured: false,
    technologies: ["Python", "Naive Bayes", "NLP"]
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
    field: "Transmission des données et sécurité de l'information",
    location: "Dakar, Sénégal",
    description: "Mémoire : schémas d'identification zero-knowledge basés sur la métrique sum-rank. Transmission et protection des données : cryptographie, sécurité des réseaux et des systèmes d'information.",
    startDate: "2025-09-01",
    endDate: "2026-06-01",
    current: true
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
  { id: 58, name: "Git", category: "Développement", description: "Versioning & GitFlow", level: 90, icon: "📦" },

  // Mathématiques (non comptées dans les « outils maîtrisés » de l'accueil)
  { id: 59, name: "Théorie des codes correcteurs", category: "Mathématiques & cryptographie", description: "Codes en métriques de Hamming, rang et sum-rank" },
  { id: 60, name: "Cryptographie post-quantique", category: "Mathématiques & cryptographie", description: "Cryptographie fondée sur les codes correcteurs" },
  { id: 61, name: "Preuves zero-knowledge", category: "Mathématiques & cryptographie", description: "Protocoles d'identification, transformée de Fiat–Shamir" },
  { id: 62, name: "Algèbre & corps finis", category: "Mathématiques & cryptographie", description: "Corps finis 𝔽q et leurs extensions, algèbre linéaire" },
  { id: 63, name: "Cryptographie classique", category: "Mathématiques & cryptographie", description: "Chiffrement symétrique et asymétrique (AES, RSA), hachage (SHA-256)" }
];

// Mémoire de Master 2 (section « Recherche »)
export const research = {
  type: "Mémoire de Master 2",
  status: "En cours",
  period: "2025 – 2026",
  title: "Schémas d'identification zero-knowledge basés sur la métrique sum-rank",
  institution: "Université Cheikh Anta Diop de Dakar",
  program: "Master 2 Transmission des données et sécurité de l'information",
  summary: "Le mémoire porte sur des protocoles d'identification à divulgation nulle de connaissance dont la sécurité repose sur un problème de théorie des codes : le décodage par syndrome en métrique sum-rank. Cette métrique généralise à la fois la métrique de Hamming et la métrique rang, et ouvre la voie à des schémas cryptographiques résistants aux ordinateurs quantiques.",
  keywords: ["Cryptographie post-quantique", "Théorie des codes", "Métrique sum-rank", "Métrique rang", "Divulgation nulle de connaissance", "Protocole de Stern", "Transformée de Fiat–Shamir", "Corps finis"],
  pillars: [
    {
      icon: "hard",
      title: "Le problème difficile",
      text: "Retrouver un vecteur e de petit poids sum-rank tel que H·eᵀ = s, connaissant seulement H et s. On ne connaît pas d'algorithme efficace pour ce problème, ni classique ni quantique : il sert de fondement à la sécurité."
    },
    {
      icon: "zk",
      title: "Le protocole zero-knowledge",
      text: "Le prouveur convainc le vérifieur qu'il connaît le secret e sans rien en révéler, par un échange en trois passes répété sur plusieurs tours, dans l'esprit du protocole de Stern.",
      steps: ["Engagement", "Défi", "Réponse"]
    },
    {
      icon: "pq",
      title: "L'enjeu post-quantique",
      text: "L'algorithme de Shor casserait RSA et les courbes elliptiques sur un ordinateur quantique. Les schémas fondés sur les codes en sont une alternative, et la transformée de Fiat–Shamir convertit un schéma d'identification en signature numérique."
    }
  ]
};

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
