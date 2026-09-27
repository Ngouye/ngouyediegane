// Logo de chaque outil / technologie affiché dans le portfolio.
// Fichiers téléchargés depuis les sources officielles dans public/icons/tools/ :
//   - Simple Icons (logos de marque), icônes d'architecture AWS (awslabs),
//   - dépôts / sites officiels des projets (Bandit, Checkov, KICS, tfsec, Dockle, Nuclei, Nmap…),
//   - pictogrammes Lucide (préfixe « concept- ») pour les notions sans logo de marque.
// UFW n'ayant pas de logo propre, il utilise celui d'Ubuntu (UFW est le pare-feu d'Ubuntu).
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
  'AWS CodeBuild': 'aws-codebuild.png',
  'CodeBuild': 'aws-codebuild.png',
  'AWS CodeDeploy': 'aws-codedeploy.png',
  'CodeDeploy': 'aws-codedeploy.png',
  'AWS CodePipeline': 'aws-codepipeline.png',
  'CodePipeline': 'aws-codepipeline.png',
  'Amazon EC2': 'aws-ec2.png',
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

  // SOC / réseau / virtualisation
  'Wazuh': 'wazuh.png',
  'ELK': 'elastic-stack.svg',
  'FortiGate': 'fortinet.svg',
  'iptables': 'iptables.png',
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
  'React': 'react.svg',
  'PostgreSQL': 'postgresql.svg',
  'Linux / Bash': 'linux.svg',
  'Linux': 'linux.svg',
  'Bash': 'bash.svg',
  'Git': 'git.svg',
  'Vercel': 'vercel.svg',

  // IA
  'Scikit-learn': 'scikit-learn.svg',
  'PyTorch': 'pytorch.svg',
  'TensorFlow': 'tensorflow.svg',
  'Pandas': 'pandas.svg',

  // Notions sans logo de marque
  'SIEM': 'concept-siem.svg',
  'FIM': 'concept-fim.svg',
  'Alerting': 'concept-alerting.svg',
  'Réponse à incident': 'concept-incident.svg',
  'VLAN': 'concept-vlan.svg',
  'AES': 'concept-aes.svg',
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
