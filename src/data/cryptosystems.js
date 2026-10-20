// Cryptosystèmes présentés dans la section « Cryptosystèmes », par famille.
// Les formules sont en LaTeX (rendu KaTeX) ; String.raw évite de doubler les antislashs.
const T = String.raw

export const cryptoFamilies = [
  {
    id: 'sym',
    label: 'Symétrique',
    intro: 'Une même clé secrète pour chiffrer et déchiffrer.',
    items: [
      {
        name: 'AES (Rijndael)',
        tag: 'Chiffrement par blocs · FIPS 197',
        formulas: [
          T`\mathbb{F}_{2^8} \;\cong\; \mathbb{F}_2[X] \,/\, (X^8 + X^4 + X^3 + X + 1)`,
          T`\mathrm{SubBytes}(a) = A\,a^{-1} \oplus b \qquad (0^{-1} := 0)`,
          T`\mathrm{MixColumns} : c(X) \longmapsto \big(\{03\}X^3 + X^2 + X + \{02\}\big)\, c(X) \bmod (X^4 + 1)`,
        ],
        note: 'Blocs de 128 bits, clés de 128, 192 ou 256 bits (10, 12 ou 14 tours). La boîte S est l’inversion dans le corps fini suivie d’une transformation affine sur F₂.',
      },
      {
        name: 'AES-GCM',
        tag: 'Chiffrement authentifié · NIST SP 800-38D',
        formulas: [
          T`C_i = P_i \oplus E_K(\mathrm{ctr}_i), \qquad H = E_K\big(0^{128}\big)`,
          T`\mathrm{GHASH}_H(X_1, \dots, X_n) = \sum_{i=1}^{n} X_i \, H^{\,n-i+1} \in \mathbb{F}_{2^{128}}`,
        ],
        note: 'Mode compteur pour la confidentialité, et polynôme évalué en H dans F₂[X]/(X¹²⁸ + X⁷ + X² + X + 1) pour l’authenticité.',
      },
      {
        name: 'Masque jetable',
        tag: 'Sécurité parfaite · Shannon, 1949',
        formulas: [
          T`c = m \oplus k, \qquad k \xleftarrow{\$} \{0,1\}^{|m|}`,
          T`\Pr[M = m \mid C = c] = \Pr[M = m]`,
        ],
        note: 'Le chiffré n’apporte aucune information sur le clair. Shannon a montré que la sécurité parfaite impose une clé au moins aussi longue que le message.',
      },
    ],
  },
  {
    id: 'hash',
    label: 'Hachage & MAC',
    intro: 'Empreintes, intégrité et authentification des messages.',
    items: [
      {
        name: 'SHA-256',
        tag: 'Merkle–Damgård · FIPS 180-4',
        formulas: [
          T`H_0 = \mathrm{IV}, \qquad H_i = f\big(H_{i-1}, M_i\big), \qquad h(M) = H_N`,
          T`\text{collision générique en } \approx 2^{n/2} = 2^{128} \text{ évaluations}`,
        ],
        note: 'Fonction de compression itérée sur des blocs de 512 bits ; la borne des anniversaires fixe la résistance aux collisions.',
      },
      {
        name: 'SHA-3 (Keccak)',
        tag: 'Construction éponge · FIPS 202',
        formulas: [
          T`b = r + c = 1600, \qquad \text{sécurité générique} \;\approx\; 2^{c/2}`,
        ],
        note: 'Absorption du message par blocs de r bits, puis essorage ; la capacité c fixe le niveau de sécurité.',
      },
      {
        name: 'HMAC',
        tag: 'Code d’authentification · RFC 2104',
        formulas: [
          T`\mathrm{HMAC}_K(m) = H\Big( (K \oplus \mathrm{opad}) \,\big\|\, H\big( (K \oplus \mathrm{ipad}) \,\|\, m \big) \Big)`,
        ],
        note: 'Construit un MAC sûr à partir d’une fonction de hachage, sans les faiblesses de H(K ‖ m) face aux extensions de longueur.',
      },
    ],
  },
  {
    id: 'pk',
    label: 'Clé publique',
    intro: 'Factorisation et logarithme discret : la cryptographie asymétrique classique.',
    items: [
      {
        name: 'RSA',
        tag: 'Rivest–Shamir–Adleman, 1977',
        formulas: [
          T`n = pq, \qquad e\,d \equiv 1 \pmod{\varphi(n)}, \qquad \varphi(n) = (p-1)(q-1)`,
          T`c = m^{e} \bmod n, \qquad m = c^{d} \bmod n`,
        ],
        note: 'La correction découle du petit théorème de Fermat et du théorème chinois ; la sécurité repose sur la difficulté de factoriser n.',
      },
      {
        name: 'Diffie–Hellman',
        tag: 'Échange de clés, 1976',
        formulas: [
          T`G = \langle g \rangle, \quad |G| = q, \qquad A = g^{a}, \quad B = g^{b}`,
          T`K = B^{a} = A^{b} = g^{ab}`,
        ],
        note: 'Sûr sous l’hypothèse Diffie–Hellman calculatoire, qui implique la difficulté du logarithme discret dans G.',
      },
      {
        name: 'ElGamal',
        tag: 'Chiffrement, 1985',
        formulas: [
          T`h = g^{x}, \qquad (c_1, c_2) = \big(g^{r},\; m\,h^{r}\big)`,
          T`m = c_2 \, c_1^{-x}`,
        ],
        note: 'Chiffrement probabiliste, IND-CPA sous l’hypothèse Diffie–Hellman décisionnelle (DDH).',
      },
      {
        name: 'Courbes elliptiques',
        tag: 'ECDH · ECDSA · Ed25519',
        formulas: [
          T`E : y^2 = x^3 + ax + b \ \text{ sur } \mathbb{F}_p, \qquad 4a^3 + 27b^2 \neq 0`,
          T`r = x\big([k]G\big) \bmod n, \qquad s = k^{-1}\big(H(m) + r\,d\big) \bmod n`,
        ],
        note: 'Sécurité fondée sur le logarithme discret elliptique (retrouver k depuis [k]P). Ed25519 utilise la courbe d’Edwards tordue −x² + y² = 1 + d·x²y² sur F_(2²⁵⁵ − 19).',
      },
      {
        name: 'Signature de Schnorr',
        tag: 'Identification et signature, 1989',
        formulas: [
          T`R = g^{k}, \qquad c = H(R \,\|\, m), \qquad s = k + c\,x \bmod q`,
          T`\text{vérification : } \; g^{s} = R \cdot X^{c}, \qquad X = g^{x}`,
        ],
        note: 'Issue d’un protocole d’identification à divulgation nulle de connaissance par la transformée de Fiat–Shamir.',
      },
    ],
  },
  {
    id: 'pq',
    label: 'Post-quantique',
    intro: 'Résister à l’algorithme de Shor : codes, réseaux euclidiens et hachage.',
    items: [
      {
        name: 'McEliece',
        tag: 'Codes de Goppa · 1978',
        formulas: [
          T`G_{\mathrm{pub}} = S \, G \, P, \qquad c = m \, G_{\mathrm{pub}} + e, \qquad \operatorname{wt}_{\mathrm{H}}(e) = t`,
        ],
        note: 'S inversible et P de permutation masquent un code de Goppa binaire que seul le détenteur de la clé sait décoder. Classic McEliece en est la version moderne.',
      },
      {
        name: 'Niederreiter',
        tag: 'Version duale · 1986',
        formulas: [
          T`s = H_{\mathrm{pub}} \, e^{\top}, \qquad \operatorname{wt}_{\mathrm{H}}(e) = t`,
        ],
        note: 'Le message est encodé dans l’erreur e ; la sécurité est équivalente à celle de McEliece et repose sur le décodage par syndrome.',
      },
      {
        name: 'HQC',
        tag: 'Codes quasi-cycliques · retenu par le NIST en 2025',
        formulas: [
          T`\mathcal{R} = \mathbb{F}_2[X]/(X^n - 1), \qquad \mathrm{pk} = \big(h,\; s = x + h\,y\big)`,
          T`u = r_1 + h\,r_2, \qquad v = m\,G + s\,r_2 + e`,
        ],
        note: 'Le déchiffrement décode v − u·y = mG + (x·r₂ − r₁·y + e), dont l’erreur reste de petit poids.',
      },
      {
        name: 'ML-KEM (Kyber)',
        tag: 'Réseaux euclidiens · FIPS 203',
        formulas: [
          T`R_q = \mathbb{Z}_q[X]/(X^{256} + 1), \qquad q = 3329`,
          T`\mathbf{t} = \mathbf{A}\,\mathbf{s} + \mathbf{e}, \qquad \mathbf{s}, \mathbf{e} \text{ à petits coefficients}`,
        ],
        note: 'Mécanisme d’encapsulation de clé dont la sécurité repose sur le problème Module-LWE.',
      },
      {
        name: 'ML-DSA (Dilithium)',
        tag: 'Réseaux euclidiens · FIPS 204',
        formulas: [
          T`\mathbf{z} = \mathbf{y} + c\,\mathbf{s}_1, \qquad \text{rejet si } \|\mathbf{z}\|_\infty \ge \gamma_1 - \beta`,
        ],
        note: 'Signature « Fiat–Shamir with aborts » : le rejet rend z indépendant du secret. Sécurité fondée sur Module-LWE et Module-SIS.',
      },
      {
        name: 'SLH-DSA (SPHINCS+)',
        tag: 'Hachage · FIPS 205',
        formulas: [
          T`\sigma_i = F^{\,b_i}\big(\mathrm{sk}_i\big), \qquad \text{vérification : } F^{\,w-1-b_i}(\sigma_i) = \mathrm{pk}_i`,
        ],
        note: 'Signatures sans état fondées uniquement sur une fonction de hachage : chaînes de Winternitz (WOTS+) et arbres de Merkle.',
      },
      {
        name: 'Métrique rang',
        tag: 'LRPC · ROLLO · RQC · RYDE',
        formulas: [
          T`H e^{\top} = s^{\top}, \qquad \operatorname{wt}_{\mathrm{R}}(e) = \dim_{\mathbb{F}_q}\langle e_1, \dots, e_n \rangle_{\mathbb{F}_q} \le r`,
        ],
        note: 'Le problème RSD permet des clés plus compactes qu’en métrique de Hamming. RYDE, signature issue d’une preuve zero-knowledge de RSD, est candidate au 2ᵉ tour de l’appel du NIST pour de nouvelles signatures (2024).',
      },
    ],
  },
  {
    id: 'proto',
    label: 'Protocoles',
    intro: 'Briques de construction : preuves zero-knowledge, engagements, partage de secret.',
    items: [
      {
        name: 'Protocole de Stern',
        tag: 'Identification zero-knowledge · 1993',
        formulas: [
          T`H e^{\top} = s^{\top}, \qquad \operatorname{wt}_{\mathrm{H}}(e) = t`,
          T`\Pr[\text{fraude}] \le (2/3)^{\delta} \text{ après } \delta \text{ tours}`,
        ],
        note: 'Premier protocole d’identification fondé sur le décodage par syndrome : engagements, défi dans {0, 1, 2}, réponse. Point de départ de mon mémoire en métrique sum-rank.',
      },
      {
        name: 'Transformée de Fiat–Shamir',
        tag: 'De l’identification à la signature · 1986',
        formulas: [
          T`b = \mathcal{H}\big(\mathsf{msg} \,\|\, \mathsf{com}\big)`,
        ],
        note: 'Le défi du vérifieur est remplacé par un haché : tout protocole d’identification de ce type devient une signature, sûre dans le modèle de l’oracle aléatoire.',
      },
      {
        name: 'Engagement de Pedersen',
        tag: 'Schéma d’engagement · 1991',
        formulas: [
          T`C = g^{m} h^{r}, \qquad r \xleftarrow{\$} \mathbb{Z}_q`,
        ],
        note: 'Parfaitement masquant et calculatoirement liant sous l’hypothèse du logarithme discret (log_g h inconnu).',
      },
      {
        name: 'Partage de secret de Shamir',
        tag: 'Seuil (k, n) · 1979',
        formulas: [
          T`f(X) = s + a_1 X + \cdots + a_{k-1} X^{k-1} \in \mathbb{F}_p[X]`,
          T`\text{parts : } \big(x_j,\, y_j = f(x_j)\big), \quad 1 \le j \le n`,
          T`s = f(0) = \sum_{j=1}^{k} y_j \prod_{i \neq j} \frac{x_i}{x_i - x_j}`,
        ],
        note: 'k parts suffisent à reconstruire le secret par interpolation de Lagrange ; k − 1 parts n’en révèlent rien.',
      },
    ],
  },
]
