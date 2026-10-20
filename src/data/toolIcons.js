// Logo de chaque outil / technologie affiché dans le portfolio.
// Fichiers téléchargés depuis les sources officielles dans public/icons/tools/ :
//   - Simple Icons (logos de marque), icônes d'architecture AWS (awslabs),
//   - dépôts / sites officiels des projets (Bandit, Checkov, KICS, tfsec, Dockle, Nuclei, Nmap…),
//   - pictogrammes Lucide (préfixe « concept- ») pour les notions sans logo de marque.
// UFW n'ayant pas de logo propre, il utilise celui d'Ubuntu (UFW est le pare-feu d'Ubuntu).
// Apache PDFBox utilise le logo de la fondation Apache, YOLOv5 celui d'Ultralytics (son éditeur).
// nftables utilise le logo de netfilter (le projet qui le développe, comme iptables).
// TFLint n'a pas de logo officiel : il est représenté par un pictogramme de liste de contrôles.
const BASE = '/icons/tools/'

const ICONS = {
  // Conteneurisation / IaC / CI-CD
  'Docker': 'docker.svg',
  'Docker Compose': 'docker-compose.png',
  'Kubernetes': 'kubernetes.svg',
  'Helm': 'helm.svg',
  'Terraform': 'terraform.svg',
  'Ansible': 'ansible.svg',
  'Jenkins': 'jenkins.svg',
  'GitHub Actions': 'github-actions.svg',

  // AWS
  'AWS': 'aws.svg',
  'Amazon ECR': 'aws-ecr.png',
  'ECR': 'aws-ecr.png',
  'AWS CodeBuild': 'aws-codebuild.png',
  'CodeBuild': 'aws-codebuild.png',
  'AWS CodeDeploy': 'aws-codedeploy.png',
  'CodeDeploy': 'aws-codedeploy.png',
  'AWS CodePipeline': 'aws-codepipeline.png',
  'CodePipeline': 'aws-codepipeline.png',
  'Amazon EC2': 'aws-ec2.png',
  'EC2': 'aws-ec2.png',
  'Amazon ECS': 'aws-ecs.png',
  'ECS': 'aws-ecs.png',
  'Amazon EKS': 'aws-eks.png',
  'AWS EKS': 'aws-eks.png',
  'EKS': 'aws-eks.png',
  'Amazon S3': 'aws-s3.png',
  'Amazon Route 53': 'aws-route53.png',
  'Amazon CloudFront': 'aws-cloudfront.png',
  'Amazon Certificate Manager': 'aws-acm.png',
  'AWS Amplify': 'aws-amplify.png',
  'Amazon RDS': 'aws-rds.png',
  'RDS': 'aws-rds.png',
  'Amazon VPC': 'aws-vpc.png',
  'VPC': 'aws-vpc.png',
  'AWS IAM': 'aws-iam.png',
  'IAM': 'aws-iam.png',
  'AWS CloudWatch': 'aws-cloudwatch.png',
  'CloudWatch': 'aws-cloudwatch.png',
  'AWS Secrets Manager': 'aws-secrets-manager.png',
  'KMS': 'aws-kms.png',
  'DynamoDB': 'aws-dynamodb.png',
  'ALB': 'aws-elb.png',
  'SNS': 'aws-sns.png',

  // SOC / réseau / virtualisation
  'Wazuh': 'wazuh.png',
  'ELK': 'elastic-stack.svg',
  'FortiGate': 'fortinet.svg',
  'iptables': 'iptables.png',
  'nftables': 'iptables.png',
  'fail2ban': 'fail2ban.png',
  'Ubuntu': 'ubuntu.svg',
  'UFW': 'ubuntu.svg',
  'VMware': 'vmware.svg',

  // SAST
  'Bearer': 'bearer.png',
  'SonarQube': 'sonarqube.svg',
  'Semgrep': 'semgrep.png',
  'CodeQL': 'codeql.svg',
  'Bandit': 'bandit.png',

  // Sécurité IaC / images / secrets
  'Checkov': 'checkov.png',
  'TFLint': 'concept-lint.svg',
  'KICS': 'kics.svg',
  'tfsec': 'tfsec.png',
  'Dockle': 'dockle.png',
  'Gitleaks': 'gitleaks.png',
  'TruffleHog': 'trufflehog.png',

  // DAST / pentest
  'OWASP ZAP': 'owasp-zap.svg',
  'Burp Suite': 'burp-suite.svg',
  'Nikto': 'nikto.png',
  'Nuclei': 'nuclei.png',
  'Nmap + NSE': 'nmap.png',
  'Nmap': 'nmap.png',
  'mitmproxy': 'mitmproxy.png',
  'Metasploit': 'metasploit.svg',
  'OWASP ASVS': 'owasp.svg',

  // SCA
  'Trivy': 'trivy.svg',
  'Snyk': 'snyk.svg',
  'OWASP Dependency-Check': 'dependency-check.svg',
  'Grype': 'grype.png',

  // Observabilité / développement
  'Prometheus': 'prometheus.svg',
  'Grafana': 'grafana.svg',
  'Spring Boot': 'spring-boot.svg',
  'Java': 'java.svg',
  'TypeScript': 'typescript.svg',
  'JWT': 'jwt.svg',
  'React': 'react.svg',
  'PostgreSQL': 'postgresql.svg',
  'Linux / Bash': 'linux.svg',
  'Linux': 'linux.svg',
  'Bash': 'bash.svg',
  'Git': 'git.svg',
  'Vercel': 'vercel.svg',
  'Vite': 'vite.svg',
  'Supabase': 'supabase.svg',
  'Node.js': 'nodejs.svg',
  'Nginx': 'nginx.svg',
  'Flask': 'flask.svg',
  'Molecule': 'molecule.png',
  'Python': 'python.svg',
  'Django': 'django.svg',
  'Apache PDFBox': 'apache-pdfbox.svg',

  // IA
  'Scikit-learn': 'scikit-learn.svg',
  'PyTorch': 'pytorch.svg',
  'TensorFlow': 'tensorflow.svg',
  'Pandas': 'pandas.svg',
  'YOLOv5': 'yolov5.svg',

  // Notions sans logo de marque
  'SIEM': 'concept-siem.svg',
  'FIM': 'concept-fim.svg',
  'Alerting': 'concept-alerting.svg',
  'Réponse à incident': 'concept-incident.svg',
  'VLAN': 'concept-vlan.svg',
  'AES': 'concept-aes.svg',
  'AES-256-GCM': 'concept-aes.svg',
  'PBKDF2': 'concept-pbkdf2.svg',
  'Web Crypto API': 'concept-webcrypto.svg',
  'SHA-256': 'concept-sha256.svg',
  'Authentification': 'concept-auth.svg',
  'Vision par ordinateur': 'concept-vision.svg',
  'Naive Bayes': 'concept-bayes.svg',
  'NLP': 'concept-nlp.svg',
  'Théorie des codes correcteurs': 'concept-codes.svg',
  'Cryptographie post-quantique': 'concept-postquantum.svg',
  'Preuves zero-knowledge': 'concept-zk.svg',
  'Algèbre & corps finis': 'concept-bayes.svg',
  'Cryptographie à clé publique': 'concept-rsa.svg',
  'Cryptographie symétrique': 'concept-aes.svg',
  'Protocoles cryptographiques': 'concept-auth.svg',
  'RSA': 'concept-rsa.svg',
  'Zero Trust': 'concept-zero-trust.svg',
  'MLOps': 'concept-mlops.svg',
  'E-commerce': 'concept-ecommerce.svg',
  'SaaS': 'concept-saas.svg',
  'Security Hardening': 'concept-hardening.svg',
  'Firewall': 'concept-firewall.svg',
  'IPS': 'concept-ips.svg',
  'Segmentation': 'concept-segmentation.svg',
}

export function getToolIcon(name) {
  const file = ICONS[name]
  return file ? BASE + file : null
}
