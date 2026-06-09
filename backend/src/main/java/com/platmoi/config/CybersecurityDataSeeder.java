package com.platmoi.config;

import com.platmoi.model.*;
import com.platmoi.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.Arrays;

@Configuration
@RequiredArgsConstructor
public class CybersecurityDataSeeder {

    private final CybersecurityExpertiseRepository expertiseRepository;
    private final CybersecurityCertificationRepository certificationRepository;

    @Bean
    public CommandLineRunner seedCybersecurityData() {
        return args -> {
            // Vérifier si les données existent déjà
            if (expertiseRepository.count() > 0) {
                return; // Les données sont déjà en base
            }

            // Créer les expertises
            CybersecurityExpertise pentestWeb = CybersecurityExpertise.builder()
                    .title("Pentesting Web & API")
                    .category("PENTESTING")
                    .description("Tests d'injection, XSS, CSRF, authentification, autorisation et sécurité REST/GraphQL")
                    .color("#f472b6")
                    .icon("🔓")
                    .level(5)
                    .featured(true)
                    .tools(Arrays.asList("OWASP ZAP", "Burp Suite", "Nuclei", "sqlmap", "Postman"))
                    .skills(Arrays.asList("Exploitation", "Tests d'injection", "Fuzzing", "Contournement auth"))
                    .build();

            CybersecurityExpertise pentestInfra = CybersecurityExpertise.builder()
                    .title("Pentesting Infrastructure")
                    .category("PENTESTING")
                    .description("Évaluation des services réseau, conteneurs, Kubernetes et politiques de sécurité")
                    .color("#22d3ee")
                    .icon("🏗️")
                    .level(5)
                    .featured(true)
                    .tools(Arrays.asList("Nmap", "Metasploit", "Wireshark", "Nessus", "Cobalt Strike"))
                    .skills(Arrays.asList("Reconnaissance", "Exploitation services", "Escalade privilèges"))
                    .build();

            CybersecurityExpertise sast = CybersecurityExpertise.builder()
                    .title("SAST - Static Code Analysis")
                    .category("DEVSECOPS")
                    .description("Analyse statique du code pour détecter vulnérabilités et patterns malveillants")
                    .color("#34d399")
                    .icon("🔍")
                    .level(4)
                    .featured(true)
                    .tools(Arrays.asList("SonarQube", "Semgrep", "CodeQL", "Bandit", "Bearer"))
                    .skills(Arrays.asList("Analyse de code", "Détection patterns", "Audit dépendances"))
                    .build();

            CybersecurityExpertise dast = CybersecurityExpertise.builder()
                    .title("DAST - Dynamic Testing")
                    .category("DEVSECOPS")
                    .description("Tests dynamiques en runtime avec spider, fuzzer et interception de requêtes")
                    .color("#fb923c")
                    .icon("🕷️")
                    .level(4)
                    .featured(true)
                    .tools(Arrays.asList("Burp Suite", "OWASP ZAP", "Nikto", "mitmproxy"))
                    .skills(Arrays.asList("Tests runtime", "Interception", "Fuzzing dynamique"))
                    .build();

            CybersecurityExpertise container = CybersecurityExpertise.builder()
                    .title("Container Security")
                    .category("CLOUD_SECURITY")
                    .description("Scan de sécurité des images Docker et conformité CIS Benchmarks")
                    .color("#a78bfa")
                    .icon("🐳")
                    .level(4)
                    .featured(true)
                    .tools(Arrays.asList("Trivy", "Clair", "Anchore", "Grype"))
                    .skills(Arrays.asList("Scanning images", "Analyse Docker", "Détection vulnérabilités"))
                    .build();

            CybersecurityExpertise iac = CybersecurityExpertise.builder()
                    .title("Infrastructure as Code")
                    .category("CLOUD_SECURITY")
                    .description("Scan Terraform, Kubernetes avec enforcement de policies de sécurité")
                    .color("#fbbf24")
                    .icon("☁️")
                    .level(4)
                    .featured(true)
                    .tools(Arrays.asList("Checkov", "TerraForm Scan", "Polaris", "KICS"))
                    .skills(Arrays.asList("Validation IaC", "Audit Kubernetes", "Policy as Code"))
                    .build();

            CybersecurityExpertise secretDetection = CybersecurityExpertise.builder()
                    .title("Secret Detection")
                    .category("DEVSECOPS")
                    .description("Détection de clés API, tokens et credentials en dur dans le code")
                    .color("#ef4444")
                    .icon("🔑")
                    .level(5)
                    .featured(true)
                    .tools(Arrays.asList("TruffleHog", "GitGuardian", "detect-secrets", "Talisman"))
                    .skills(Arrays.asList("Prévention fuites", "Scan Git", "Détection secrets"))
                    .build();

            CybersecurityExpertise threatAnalysis = CybersecurityExpertise.builder()
                    .title("Threat Analysis")
                    .category("THREAT_ANALYSIS")
                    .description("Modélisation des menaces et évaluation des risques de sécurité")
                    .color("#ec4899")
                    .icon("⚠️")
                    .level(4)
                    .featured(false)
                    .tools(Arrays.asList("STRIDE", "CVSS", "Risk Calculator"))
                    .skills(Arrays.asList("Modélisation menaces", "Évaluation risques", "Forensics"))
                    .build();

            CybersecurityExpertise socOperations = CybersecurityExpertise.builder()
                    .title("SOC & SIEM")
                    .category("SOC")
                    .description("Collecte de logs, corrélation d'événements, détection de menaces et réponse aux incidents.")
                    .color("#818cf8")
                    .icon("🛡️")
                    .level(5)
                    .featured(true)
                    .tools(Arrays.asList("Wazuh", "ELK", "SIEM", "FIM", "XDR"))
                    .skills(Arrays.asList("Surveillance", "Corrélation d'événements", "Réponse incidents"))
                    .build();

            CybersecurityExpertise ransomwareProtection = CybersecurityExpertise.builder()
                    .title("Protection Ransomware")
                    .category("RANSOMWARE")
                    .description("Stratégies de mitigation ransomware, sauvegarde immuable et durcissement des endpoints.")
                    .color("#f97316")
                    .icon("🛡️")
                    .level(5)
                    .featured(true)
                    .tools(Arrays.asList("Backups immuables", "EDR", "Segmentation réseau", "MFA"))
                    .skills(Arrays.asList("Mitigation ransomware", "Durcissement systèmes", "Protection données"))
                    .build();

            // Sauvegarder les expertises
            expertiseRepository.saveAll(Arrays.asList(
                    pentestWeb, pentestInfra, sast, dast, container, iac, secretDetection, threatAnalysis, socOperations, ransomwareProtection
            ));

            // Créer les certifications
            CybersecurityCertification oscp = CybersecurityCertification.builder()
                    .name("OSCP")
                    .issuer("Offensive Security")
                    .credentialId("OSCP-12345")
                    .credentialUrl("https://www.credly.com")
                    .description("Certification pratique reconnue en pentesting")
                    .issuedDate(LocalDate.of(2023, 6, 15))
                    .expiryDate(LocalDate.of(2026, 6, 15))
                    .icon("🏅")
                    .active(true)
                    .build();

            CybersecurityCertification ceh = CybersecurityCertification.builder()
                    .name("CEH")
                    .issuer("EC-Council")
                    .credentialId("CEH-67890")
                    .credentialUrl("https://www.credly.com")
                    .description("Certified Ethical Hacker")
                    .issuedDate(LocalDate.of(2022, 12, 1))
                    .expiryDate(LocalDate.of(2025, 12, 1))
                    .icon("🎯")
                    .active(true)
                    .build();

            CybersecurityCertification az900 = CybersecurityCertification.builder()
                    .name("AZ-900")
                    .issuer("Microsoft")
                    .credentialId("AZ-900-11111")
                    .credentialUrl("https://www.credly.com")
                    .description("Azure Fundamentals")
                    .issuedDate(LocalDate.of(2023, 3, 20))
                    .expiryDate(null)
                    .icon("☁️")
                    .active(true)
                    .build();

            CybersecurityCertification crpo = CybersecurityCertification.builder()
                    .name("CRPO")
                    .issuer("Certified Ransomware Protection Officer")
                    .credentialId("CRPO-2025")
                    .credentialUrl("https://www.credly.com")
                    .description("Certification en stratégies de protection et mitigation ransomware.")
                    .issuedDate(LocalDate.of(2025, 4, 15))
                    .expiryDate(null)
                    .icon("🛡️")
                    .active(true)
                    .build();

            CybersecurityCertification awsSec = CybersecurityCertification.builder()
                    .name("AWS Security")
                    .issuer("Amazon")
                    .credentialId("AWS-22222")
                    .credentialUrl("https://www.credly.com")
                    .description("AWS Security Fundamentals")
                    .issuedDate(LocalDate.of(2023, 1, 15))
                    .expiryDate(null)
                    .icon("☁️")
                    .active(true)
                    .build();

            CybersecurityCertification cs50p = CybersecurityCertification.builder()
                    .name("CS50P - Introduction to Programming with Python")
                    .issuer("Harvard University")
                    .credentialId("CS50P-2025")
                    .credentialUrl(null)
                    .description("Certificat d'achèvement du cours CS50P de l'Université Harvard couvrant la programmation Python avancée, les structures de données, et les bonnes pratiques de développement.")
                    .issuedDate(LocalDate.of(2025, 1, 1))
                    .expiryDate(null)
                    .icon("🎓")
                    .active(true)
                    .build();

            CybersecurityCertification ebios = CybersecurityCertification.builder()
                    .name("Introduction à la méthode EBIOS Risk Manager")
                    .issuer("Club EBIOS")
                    .credentialId("EBIOS-2025")
                    .credentialUrl(null)
                    .description("Introduction à la méthode EBIOS — gestion des risques cyber.")
                    .issuedDate(LocalDate.of(2025, 12, 1))
                    .expiryDate(null)
                    .icon("🧭")
                    .active(true)
                    .build();

            CybersecurityCertification forcen = CybersecurityCertification.builder()
                    .name("Certificat en Intelligence Artificielle")
                    .issuer("FORCE-N Sénégal")
                    .credentialId("FORCE-N-2026")
                    .credentialUrl(null)
                    .description("Formation en Intelligence Artificielle délivrée par FORCE-N Sénégal.")
                    .issuedDate(LocalDate.of(2026, 2, 1))
                    .expiryDate(null)
                    .icon("🤖")
                    .active(true)
                    .build();

            CybersecurityCertification studentSoc = CybersecurityCertification.builder()
                    .name("Student SOC Program Foundations - Microsoft")
                    .issuer("Microsoft")
                    .credentialId("SOC-2016")
                    .credentialUrl(null)
                    .description("Programme Foundations pour analystes SOC — notions et bonnes pratiques.")
                    .issuedDate(LocalDate.of(2016, 3, 1))
                    .expiryDate(null)
                    .icon("🏅")
                    .active(true)
                    .build();

            // Sauvegarder les certifications
            certificationRepository.saveAll(Arrays.asList(oscp, ceh, az900, crpo, awsSec, cs50p, ebios, forcen, studentSoc));

            System.out.println("✅ Données cybersécurité initialisées avec succès!");
        };
    }
}
