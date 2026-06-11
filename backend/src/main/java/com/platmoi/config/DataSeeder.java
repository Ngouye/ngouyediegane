package com.platmoi.config;

import com.platmoi.model.*;
import com.platmoi.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final ProfileRepository profileRepository;
    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;

    @Value("${platmoi.seed.refresh:false}")
    private boolean refreshSeed;

    @Override
    public void run(String... args) {
        if (profileRepository.count() > 0 && !refreshSeed) return;

        if (refreshSeed) {
            skillRepository.deleteAll();
            projectRepository.deleteAll();
            experienceRepository.deleteAll();
            educationRepository.deleteAll();
            profileRepository.deleteAll();
        }

        profileRepository.save(Profile.builder()
                .fullName("NGOUYE DIEGANE GNING")
                .title("Analyste SOC | Administrateur Système & Cloud | DevSecOps & AI")
                .email("gningngouye2001@gmail.com")
                .phone("+221 77 952 77 84")
                .location("Dakar, Sénégal")
                .bio("Administrateur système et cloud avec une spécialisation DevSecOps et IA, spécialisé dans la détection de menaces, la réponse aux incidents et l'automatisation sécurisée. " +
                        "Je combine des connaissances théoriques en cryptographie (Master UCAD) avec une maîtrise opérationnelle des infrastructures Cloud AWS, de l'automatisation via Ansible et des solutions IA. " +
                        "Orienté Zero Trust, durcissement système, réduction de surface d'attaque et surveillance proactive des environnements critiques.")
                .avatarUrl("/ngouye.png")
                .githubUrl("https://github.com/ngouyegning")
                .linkedinUrl("https://www.linkedin.com/in/ngouye-gning-316a812b3")
                .cvUrl("#")
                .build());

        projectRepository.saveAll(List.of(
                Project.builder()
                        .title("Pipeline CI/CD AWS CodePipeline")
                        .description("Pipeline complet CodeBuild → CodeDeploy avec intégration sécurisée.")
                        .longDescription("Conception et déploiement d'un pipeline CI/CD sur AWS : " +
                                "CodePipeline pour l'orchestration, CodeBuild pour la compilation et les tests, " +
                                "CodeDeploy pour le déploiement blue/green sur EC2 et ECS. " +
                                "Intégration SAST (Bearer, SonarQube, Semgrep), scan IaC (Checkov, tfsec), " +
                                "secrets (Gitleaks, TruffleHog), images (Dockle), SCA (Trivy) et DAST (OWASP ZAP).")
                        .imageUrl("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600")
                        .githubUrl("https://github.com/ngouyegning/aws-cicd-pipeline")
                        .category("DevSecOps")
                        .featured(true)
                        .startDate(LocalDate.of(2025, 1, 1))
                        .endDate(LocalDate.of(2026, 6, 6))
                        .technologies(List.of("AWS", "CodePipeline", "CodeBuild", "CodeDeploy", "Docker", "GitHub Actions"))
                        .build(),
                Project.builder()
                        .title("Infrastructure as Code — Terraform AWS")
                        .description("Provisioning multi-environnements (dev/staging/prod) avec Terraform.")
                        .longDescription("Modules Terraform réutilisables pour provisionner VPC, ECS Fargate, RDS PostgreSQL, " +
                                "ALB, IAM roles et S3. State remote sur S3 avec locking DynamoDB. " +
                                "Politiques de sécurité intégrées : encryption at rest, least privilege IAM, " +
                                "Security Groups restrictifs et CloudWatch alerting.")
                        .imageUrl("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600")
                        .githubUrl("https://github.com/ngouyegning/terraform-aws-infra")
                        .category("Cloud")
                        .featured(true)
                        .startDate(LocalDate.of(2024, 8, 1))
                        .endDate(LocalDate.of(2025, 3, 1))
                        .technologies(List.of("Terraform", "AWS", "ECS", "RDS", "VPC", "IAM"))
                        .build(),
                Project.builder()
                        .title("Cluster Kubernetes Production")
                        .description("Déploiement K8s avec Helm, monitoring et sécurité renforcée.")
                        .longDescription("Mise en place d'un cluster Kubernetes (EKS) avec namespaces isolés, " +
                                "Ingress NGINX, cert-manager pour TLS automatique, Horizontal Pod Autoscaler. " +
                                "Charts Helm pour le déploiement des microservices Spring Boot. " +
                                "Stack observabilité : Prometheus, Grafana, Loki. Politiques NetworkPolicy et RBAC.")
                        .imageUrl("https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600")
                        .githubUrl("https://github.com/ngouyegning/k8s-production")
                        .category("DevSecOps")
                        .featured(true)
                        .startDate(LocalDate.of(2024, 4, 1))
                        .endDate(LocalDate.of(2024, 12, 1))
                        .technologies(List.of("Kubernetes", "Docker", "Helm", "AWS EKS", "Prometheus", "Grafana"))
                        .build(),
                Project.builder()
                        .title("Automatisation Cloud AWS avec Ansible")
                        .description("Gestion et administration d'une infrastructure cloud AWS via Ansible.")
                        .longDescription("Playbooks Ansible pour provisionner et durcis des serveurs Linux sur AWS, " +
                                "installer des agents de supervision et automatiser des déploiements sécurisés. " +
                                "Workflow avec pipelines CI/CD, hardening système et validation de configurations.")
                        .imageUrl("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600")
                        .githubUrl("https://github.com/ngouyegning/ansible-jenkins-automation")
                        .category("DevSecOps")
                        .featured(false)
                        .startDate(LocalDate.of(2024, 1, 1))
                        .endDate(LocalDate.of(2024, 6, 1))
                        .technologies(List.of("Ansible", "AWS", "Linux", "Security Hardening", "Bash"))
                        .build(),
                Project.builder()
                        .title("Plateforme SIEM Wazuh")
                        .description("Déploiement complet d'une architecture Wazuh pour supervision de la sécurité.")
                        .longDescription("Installation et configuration de Wazuh Manager, agents et indexer. " +
                                "Collecte centralisée de logs, règles de détection personnalisées, dashboards d'analyse et réponse aux incidents de premier niveau.")
                        .imageUrl("https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600")
                        .category("SOC")
                        .featured(false)
                        .startDate(LocalDate.of(2024, 9, 1))
                        .endDate(LocalDate.of(2025, 2, 1))
                        .technologies(List.of("Wazuh", "ELK", "SIEM", "FIM", "Alerting"))
                        .build(),
                Project.builder()
                        .title("Segmentation Réseau & Durcissement FortiGate")
                        .description("Architecture sécurisée DMZ / LAN / WAN avec politiques FortiGate avancées.")
                        .longDescription("Conception d'une segmentation réseau pour isoler services critiques, " +
                                "déploiement de règles IPS, NAT, filtrage applicatif et zonage sécurisé sur FortiGate.")
                        .imageUrl("https://images.unsplash.com/photo-1518770660439-4636190af475?w=600")
                        .category("Sécurité Réseau")
                        .featured(false)
                        .startDate(LocalDate.of(2024, 10, 1))
                        .endDate(LocalDate.of(2025, 3, 1))
                        .technologies(List.of("FortiGate", "Firewall", "IPS", "Segmentation", "VLAN"))
                        .build(),
                Project.builder()
                        .title("PlatMoi — Portfolio DevSecOps")
                        .description("Plateforme portfolio Spring Boot + React avec PostgreSQL containerisé.")
                        .longDescription("Application portfolio full stack : API REST Spring Boot, frontend React, " +
                                "base PostgreSQL. Docker Compose pour le dev local, pipeline GitHub Actions " +
                                "pour CI/CD, déploiement containerisé prêt pour Kubernetes.")
                        .imageUrl("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600")
                        .demoUrl("http://localhost:5173")
                        .githubUrl("https://github.com/ngouyegning/platmoi")
                        .category("Full Stack")
                        .featured(false)
                        .startDate(LocalDate.of(2025, 1, 1))
                        .endDate(LocalDate.of(2026, 6, 6))
                        .technologies(List.of("Spring Boot", "React", "PostgreSQL", "Docker", "GitHub Actions"))
                        .build()
        ));

        experienceRepository.saveAll(List.of(
                Experience.builder()
                        .company("Freelance / Projets Cloud")
                        .role("Profil DevSecOps")
                        .location("Dakar, Sénégal")
                        .description("Conception et implémentation de pipelines CI/CD, infrastructures cloud AWS " +
                                "et pratiques DevSecOps pour des équipes de développement.")
                        .startDate(LocalDate.of(2024, 1, 1))
                        .current(true)
                        .achievements(List.of(
                                "Mise en place de pipelines AWS CodePipeline pour 3+ applications",
                                "Déploiement de clusters Kubernetes (EKS) en production",
                                "Automatisation IaC avec Terraform sur multi-environnements",
                                "Intégration SAST, DAST et SCA dans les pipelines CI/CD",
                                "Réduction du temps de déploiement de 45 min à 8 min"
                        ))
                        .build()
        ));

        educationRepository.saveAll(List.of(
                Education.builder()
                        .institution("Université Cheikh Anta Diop de Dakar")
                        .degree("Master 2")
                        .field("Mathématiques, Cryptographie et Sécurité")
                        .location("Dakar, Sénégal")
                        .description("Master orienté cryptographie, sécurité des systèmes et protection des données.")
                        .startDate(LocalDate.of(2025, 9, 1))
                        .endDate(LocalDate.of(2026, 6, 1))
                        .build(),
                Education.builder()
                        .institution("Université Cheikh Anta Diop de Dakar")
                        .degree("Master 1")
                        .field("Mathématiques, Cryptographie et Sécurité")
                        .location("Dakar, Sénégal")
                        .description("Approfondissement des protocoles cryptographiques, sécurité des réseaux et systèmes.")
                        .startDate(LocalDate.of(2024, 9, 1))
                        .endDate(LocalDate.of(2025, 6, 1))
                        .build(),
                Education.builder()
                        .institution("Université Cheikh Anta Diop de Dakar")
                        .degree("Licence")
                        .field("Mathématiques, Cryptographie et Sécurité")
                        .location("Dakar, Sénégal")
                        .description("Formation initiale en mathématiques appliquées, cryptographie et cybersécurité.")
                        .startDate(LocalDate.of(2023, 9, 1))
                        .endDate(LocalDate.of(2024, 6, 1))
                        .build(),
                Education.builder()
                        .institution("Lycée d'enseignement général de Ndondol")
                        .degree("Baccalauréat S2")
                        .field("Sciences Mathématiques")
                        .location("Sénégal")
                        .description("Diplôme de fin d'études secondaires spécialisé en mathématiques et sciences.")
                        .startDate(LocalDate.of(2019, 9, 1))
                        .endDate(LocalDate.of(2020, 6, 1))
                        .build()
        ));

        skillRepository.saveAll(List.of(
                // Conteneurisation
                Skill.builder().name("Docker").category("Conteneurisation")
                        .description("Build, run & gestion d'images conteneurs").level(92).icon("🐳").build(),
                Skill.builder().name("Docker Compose").category("Conteneurisation")
                        .description("Orchestration multi-conteneurs en local").level(88).icon("📦").build(),
                Skill.builder().name("Kubernetes").category("Conteneurisation")
                        .description("Orchestration, scaling & haute dispo").level(88).icon("☸️").build(),
                Skill.builder().name("Helm").category("Conteneurisation")
                        .description("Charts & déploiements K8s versionnés").level(82).icon("⛵").build(),
                Skill.builder().name("Amazon ECR").category("Conteneurisation")
                        .description("Registry privé d'images Docker").level(80).icon("🏪").build(),

                // Infrastructure as Code
                Skill.builder().name("Terraform").category("Infrastructure as Code")
                        .description("Provisioning cloud déclaratif & state").level(90).icon("🏗️").build(),
                Skill.builder().name("Ansible").category("Infrastructure as Code")
                        .description("Configuration, déploiement & automation").level(85).icon("📋").build(),

                // CI/CD
                Skill.builder().name("Jenkins").category("CI/CD")
                        .description("Pipelines déclaratifs & multi-branches").level(88).icon("🔧").build(),
                Skill.builder().name("GitHub Actions").category("CI/CD")
                        .description("Workflows CI/CD intégrés au repo Git").level(90).icon("⚡").build(),
                Skill.builder().name("AWS CodeBuild").category("CI/CD")
                        .description("Compilation, tests & build automatisés").level(85).icon("🔨").build(),
                Skill.builder().name("AWS CodeDeploy").category("CI/CD")
                        .description("Déploiement blue/green & rolling").level(85).icon("🚀").build(),
                Skill.builder().name("AWS CodePipeline").category("CI/CD")
                        .description("Orchestration complète du pipeline AWS").level(87).icon("🔗").build(),

                // Cloud AWS
                Skill.builder().name("Amazon EC2").category("Cloud AWS")
                        .description("Instances compute & auto-scaling").level(85).icon("💻").build(),
                Skill.builder().name("Amazon ECS").category("Cloud AWS")
                        .description("Orchestration conteneurs managée").level(83).icon("📦").build(),
                Skill.builder().name("Amazon EKS").category("Cloud AWS")
                        .description("Kubernetes managé sur AWS").level(82).icon("☸️").build(),
                Skill.builder().name("Amazon S3").category("Cloud AWS")
                        .description("Stockage objets & artefacts CI/CD").level(84).icon("🪣").build(),
                Skill.builder().name("Amazon RDS").category("Cloud AWS")
                        .description("Bases de données managées").level(78).icon("🗄️").build(),
                Skill.builder().name("Amazon VPC").category("Cloud AWS")
                        .description("Réseau isolé, subnets & NAT").level(80).icon("🌐").build(),
                Skill.builder().name("AWS IAM").category("Cloud AWS")
                        .description("Rôles, policies & least privilege").level(86).icon("🔑").build(),
                Skill.builder().name("AWS CloudWatch").category("Cloud AWS")
                        .description("Logs, métriques & alerting").level(82).icon("📊").build(),
                Skill.builder().name("AWS Secrets Manager").category("Cloud AWS")
                        .description("Rotation & injection de secrets").level(80).icon("🔐").build(),
                Skill.builder().name("Wazuh").category("SOC / SIEM")
                        .description("Déploiement et gestion d'une plateforme SIEM pour surveillance et détection.").level(84).icon("🛡️").build(),
                Skill.builder().name("FortiGate").category("Sécurité Réseau")
                        .description("Firewalling, IPS et segmentation réseau avancés.").level(82).icon("🧱").build(),
                Skill.builder().name("iptables").category("Sécurité Réseau")
                        .description("Filtrage de paquets Linux et règles NAT.").level(80).icon("🛡️").build(),
                Skill.builder().name("UFW").category("Sécurité Réseau")
                        .description("Pare-feu simplifié pour serveurs Ubuntu et Debian.").level(78).icon("🔒").build(),
                Skill.builder().name("VMware").category("Virtualisation")
                        .description("Administration d'environnements VMware pour serveurs Linux et Windows.").level(80).icon("🖥️").build(),

                // SAST — Static Application Security Testing
                Skill.builder().name("Bearer").category("SAST")
                        .description("OWASP Top 10, CWE Top 25, flux sensibles & privacy RGPD — JS, Java, Python, Go…").level(86).icon("🛡️").build(),
                Skill.builder().name("SonarQube").category("SAST")
                        .description("25+ langages — qualité + sécurité, tableau de bord centralisé").level(88).icon("🔍").build(),
                Skill.builder().name("Semgrep").category("SAST")
                        .description("30+ langages — règles personnalisables, rapide & open source").level(85).icon("📐").build(),
                Skill.builder().name("CodeQL").category("SAST")
                        .description("Java, JS, Python, Go, C++ — requêtes puissantes, intégré GitHub").level(82).icon("🧬").build(),
                Skill.builder().name("Bandit").category("SAST")
                        .description("Python — analyse simple & spécialisée sécurité").level(80).icon("🐍").build(),

                // Securite IaC
                Skill.builder().name("Checkov").category("Sécurité IaC")
                        .description("Terraform, K8s, Dockerfile, ARM — 1000+ règles, policies as code").level(88).icon("✅").build(),
                Skill.builder().name("KICS").category("Sécurité IaC")
                        .description("Multi-IaC — large couverture Terraform, K8s, CloudFormation…").level(82).icon("🔎").build(),
                Skill.builder().name("tfsec").category("Sécurité IaC")
                        .description("Terraform — scan spécialisé, précis & rapide").level(84).icon("🏗️").build(),

                // Securite Images Docker
                Skill.builder().name("Dockle").category("Sécurité Images")
                        .description("Images Docker — bonnes pratiques & CIS Benchmarks").level(86).icon("🐳").build(),

                // Detection Secrets
                Skill.builder().name("Gitleaks").category("Détection Secrets")
                        .description("Scan secrets Git — rapide, règles complètes & pre-commit hooks").level(90).icon("🔑").build(),
                Skill.builder().name("TruffleHog").category("Détection Secrets")
                        .description("Détection secrets — vérification credentials actifs en ligne").level(85).icon("🐷").build(),

                // DAST — Automatisés (spider + fuzzer)
                Skill.builder().name("OWASP ZAP").category("DAST — Spider + Fuzzer")
                        .description("Référence open source — spider, active scan, fuzzing, idéal CI/CD").level(88).icon("🕷️").build(),
                Skill.builder().name("Burp Suite").category("DAST — Spider + Fuzzer")
                        .description("Fonctionnalités avancées, fuzzer puissant — Community/Pro").level(85).icon("🎯").build(),
                Skill.builder().name("Nikto").category("DAST — Spider + Fuzzer")
                        .description("Simple, rapide — détection misconfigurations serveur web").level(78).icon("🔎").build(),

                // DAST — Basés sur templates
                Skill.builder().name("Nuclei").category("DAST — Templates")
                        .description("Ultra-rapide — 11 000+ templates communautaires, CVE connues").level(90).icon("⚡").build(),
                Skill.builder().name("Nmap + NSE").category("DAST — Templates")
                        .description("Classique & polyvalent — scripts NSE pour vulnérabilités connues").level(82).icon("🗺️").build(),

                // DAST — Proxies d'interception
                Skill.builder().name("mitmproxy").category("DAST — Proxy")
                        .description("Proxy scriptable en Python — capture, modification & rejeu requêtes").level(84).icon("🔀").build(),

                // SCA — Software Composition Analysis
                Skill.builder().name("Trivy").category("SCA")
                        .description("CVE dans images Docker, OS packages & dépendances").level(88).icon("🛡️").build(),
                Skill.builder().name("Snyk").category("SCA")
                        .description("Vulnérabilités dépendances npm, Maven, pip").level(85).icon("📦").build(),
                Skill.builder().name("OWASP Dependency-Check").category("SCA")
                        .description("Détection CVE dans bibliothèques tierces").level(82).icon("🔗").build(),
                Skill.builder().name("Grype").category("SCA")
                        .description("Analyse CVE packages & images conteneurs").level(78).icon("🔬").build(),

                // Observabilite
                Skill.builder().name("Prometheus").category("Observabilité")
                        .description("Collecte métriques & alerting").level(80).icon("📈").build(),
                Skill.builder().name("Grafana").category("Observabilité")
                        .description("Dashboards & visualisation").level(78).icon("📉").build(),

                // Developpement
                Skill.builder().name("Spring Boot").category("Développement")
                        .description("API REST & microservices Java").level(85).icon("🍃").build(),
                Skill.builder().name("React").category("Développement")
                        .description("Interfaces web modernes").level(82).icon("⚛️").build(),
                Skill.builder().name("PostgreSQL").category("Développement")
                        .description("Base relationnelle production").level(78).icon("🐘").build(),
                Skill.builder().name("Linux / Bash").category("Développement")
                        .description("Administration serveurs & scripting").level(88).icon("🐧").build(),
                Skill.builder().name("Git").category("Développement")
                        .description("Versioning & GitFlow").level(90).icon("📦").build()
        ));
    }
}