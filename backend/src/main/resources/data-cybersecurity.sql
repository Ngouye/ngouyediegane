-- Insertion des données de cybersécurité (Expertise)
INSERT INTO cybersecurity_expertise (title, category, description, color, icon, level, featured) VALUES
('Pentesting Web & API', 'PENTESTING', 'Tests d''injection, XSS, CSRF, authentification, autorisation et sécurité REST/GraphQL', '#f472b6', '🔓', 5, true),
('Pentesting Infrastructure', 'PENTESTING', 'Évaluation des services réseau, conteneurs, Kubernetes et politiques de sécurité', '#22d3ee', '🏗️', 5, true),
('SAST - Static Code Analysis', 'DEVSECOPS', 'Analyse statique du code pour détecter vulnérabilités et patterns malveillants', '#34d399', '🔍', 4, true),
('DAST - Dynamic Testing', 'DEVSECOPS', 'Tests dynamiques en runtime avec spider, fuzzer et interception de requêtes', '#fb923c', '🕷️', 4, true),
('Container Security', 'CLOUD_SECURITY', 'Scan de sécurité des images Docker et conformité CIS Benchmarks', '#a78bfa', '🐳', 4, true),
('Infrastructure as Code', 'CLOUD_SECURITY', 'Scan Terraform, Kubernetes avec enforcement de policies de sécurité', '#fbbf24', '☁️', 4, true),
('Secret Detection', 'DEVSECOPS', 'Détection de clés API, tokens et credentials en dur dans le code', '#ef4444', '🔑', 5, true),
('Threat Analysis', 'THREAT_ANALYSIS', 'Modélisation des menaces et évaluation des risques de sécurité', '#ec4899', '⚠️', 4, false),
('SOC & SIEM', 'SOC', 'Collecte de logs, corrélation d’événements, détection de menaces et réponse aux incidents.', '#818cf8', '🛡️', 5, true),
('Protection Ransomware', 'RANSOMWARE', 'Stratégies de mitigation ransomware, sauvegarde immuable et durcissement des endpoints.', '#f97316', '🛡️', 5, true);

-- Ajout des tools
INSERT INTO cybersecurity_tools (expertise_id, tool) VALUES
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Web & API' LIMIT 1), 'OWASP ZAP'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Web & API' LIMIT 1), 'Burp Suite'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Web & API' LIMIT 1), 'Nuclei'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Web & API' LIMIT 1), 'sqlmap'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Infrastructure' LIMIT 1), 'Nmap'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Infrastructure' LIMIT 1), 'Metasploit'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Infrastructure' LIMIT 1), 'Wireshark'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SAST - Static Code Analysis' LIMIT 1), 'SonarQube'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SAST - Static Code Analysis' LIMIT 1), 'Semgrep'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SAST - Static Code Analysis' LIMIT 1), 'CodeQL'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'DAST - Dynamic Testing' LIMIT 1), 'Burp Suite'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'DAST - Dynamic Testing' LIMIT 1), 'OWASP ZAP'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Container Security' LIMIT 1), 'Trivy'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Container Security' LIMIT 1), 'Clair'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Infrastructure as Code' LIMIT 1), 'Checkov'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Infrastructure as Code' LIMIT 1), 'TerraForm Scan'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Secret Detection' LIMIT 1), 'TruffleHog'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Secret Detection' LIMIT 1), 'GitGuardian'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SOC & SIEM' LIMIT 1), 'Wazuh'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SOC & SIEM' LIMIT 1), 'ELK'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SOC & SIEM' LIMIT 1), 'FIM'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SOC & SIEM' LIMIT 1), 'XDR'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Protection Ransomware' LIMIT 1), 'Backups immuables'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Protection Ransomware' LIMIT 1), 'EDR'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Protection Ransomware' LIMIT 1), 'MFA');

-- Ajout des skills
INSERT INTO cybersecurity_skills (expertise_id, skill) VALUES
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Web & API' LIMIT 1), 'Exploitation'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Web & API' LIMIT 1), 'Tests d''injection'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Infrastructure' LIMIT 1), 'Reconnaissance'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Pentesting Infrastructure' LIMIT 1), 'Escalade de privilèges'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'SAST - Static Code Analysis' LIMIT 1), 'Analyse de code'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'DAST - Dynamic Testing' LIMIT 1), 'Interception'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Container Security' LIMIT 1), 'Scanning d''images'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Infrastructure as Code' LIMIT 1), 'Validation IaC'),
((SELECT id FROM cybersecurity_expertise WHERE title = 'Secret Detection' LIMIT 1), 'Prévention de fuites');

-- Insertion des certifications
INSERT INTO cybersecurity_certifications (name, issuer, credential_id, credential_url, description, issued_date, expiry_date, icon, active) VALUES
('OSCP', 'Offensive Security', 'OSCP-12345', 'https://www.credly.com', 'Certification pratique en pentesting', '2023-06-15', '2026-06-15', '🏅', true),
('CEH', 'EC-Council', 'CEH-67890', 'https://www.credly.com', 'Certified Ethical Hacker', '2022-12-01', '2025-12-01', '🎯', true),
('AZ-900', 'Microsoft', 'AZ-900-11111', 'https://www.credly.com', 'Azure Fundamentals', '2023-03-20', NULL, '☁️', true),
('CRPO', 'Certified Ransomware Protection Officer', 'CRPO-2025', 'https://www.credly.com', 'Certification en stratégies de protection et mitigation ransomware.', '2025-04-15', NULL, '🛡️', true),
('AWS Security', 'Amazon', 'AWS-22222', 'https://www.credly.com', 'AWS Security Fundamentals', '2023-01-15', NULL, '☁️', true);
