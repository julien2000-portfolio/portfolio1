// Données du portfolio : modifie ce fichier pour ajouter tes PDF et ta veille.

const E5_SYNTHESE = { titre: "Tableau de synthèse E5", tag: "Synthèse", texte: "Vue d'ensemble de mes situations professionnelles.", pdf: "pdf/E5/tableau-synthese.pdf" };

const E5 = [
  { titre: "Déploiement d'un Active Directory", tag: "Système",       pdf: "pdf/E5/situation-1-active-directory.pdf" },
  { titre: "Configuration de switchs Cisco",    tag: "Réseau",        pdf: "pdf/E5/situation-2-switch-cisco.pdf" },
  { titre: "Installation de GLPI",              tag: "Support",       pdf: "pdf/E5/situation-3-glpi.pdf" },
  { titre: "Automatisation avec Ansible",       tag: "Scripts",       pdf: "pdf/E5/situation-4-ansible.pdf" },
];

const E6 = [
  { titre: "Projet E6",           tag: "Projet",  texte: "Présentation du projet : contexte, besoins, solution.", pdf: "pdf/E6/e6-fiche-realisation-2.pdf" },
  { titre: "Dossier de synthèse", tag: "Dossier", texte: "Documents de l'épreuve E6.",                            pdf: "pdf/E6/e6-fiche-realisation-2.pdf" }
];

const METHODE = [
  { etape: "Collecter", texte: "Je consulte mes sources chaque semaine : flux RSS, alertes CERT-FR, newsletters, forums officiels." },
  { etape: "Trier",     texte: "Je garde les informations fiables, récentes et utiles pour mon travail. Je vérifie la source et la date." },
  { etape: "Analyser",  texte: "Je résume l'information et je me demande ce qu'elle change pour mon entreprise et mes projets." },
  { etape: "Diffuser",  texte: "Je range mes synthèses dans ce portfolio et je les présente à mon tuteur ou à mes collègues." }
];

const VEILLE = [
  {
    id: "cyber",
    onglet: "Cybersécurité",
    titre: "Menaces cyber et rançongiciels en France",
    resume: "Suivre l'évolution des cyberattaques visant les entreprises et les collectivités, et les recommandations des autorités pour s'en protéger.",
    pourquoi: "Un administrateur système est en première ligne face aux attaques. Connaître les méthodes des attaquants (vol d'identifiants, vulnérabilités non corrigées, rançongiciels) me permet de mieux sécuriser un domaine Active Directory, un réseau ou un serveur.",
    sources: [
      { nom: "ANSSI (cyber.gouv.fr)", type: "Officielle", frequence: "Mensuelle", url: "https://cyber.gouv.fr" },
      { nom: "CERT-FR : alertes et avis", type: "Officielle", frequence: "Hebdomadaire", url: "https://www.cert.ssi.gouv.fr" },
      { nom: "Cybermalveillance.gouv.fr", type: "Officielle", frequence: "Mensuelle", url: "https://www.cybermalveillance.gouv.fr" },
      { nom: "LeMagIT", type: "Presse spécialisée", frequence: "Hebdomadaire", url: "https://www.lemagit.fr" },
      { nom: "ZATAZ", type: "Presse spécialisée", frequence: "Hebdomadaire", url: "https://www.zataz.com" }
    ],
    resultats: [
      { date: "11 mars 2026", titre: "Publication du Panorama de la cybermenace 2025",
        texte: "L'ANSSI a traité 3 586 événements de sécurité en 2025, soit 18 % de moins qu'en 2024. Le nombre d'incidents avérés reste pourtant stable, autour de 1 366, ce qui montre que la pression reste forte.",
        lien: "https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/", source: "ANSSI" },
      { date: "2025", titre: "Les rançongiciels visent surtout les petites structures",
        texte: "128 attaques par rançongiciel ont été recensées en 2025, un chiffre en légère baisse. Près de la moitié des victimes sont des TPE, PME ou entreprises de taille intermédiaire.",
        lien: "https://www.generation-nt.com/actualites/cybersecurite-bilan-france-2073695/amp", source: "Génération NT" },
      { date: "2025", titre: "Les vols de données augmentent",
        texte: "Les incidents d'exfiltration de données sont passés de 130 en 2024 à 196 en 2025. L'ANSSI s'inquiète surtout du cumul de ces données et des possibilités de les croiser entre elles.",
        lien: "https://www.banquedesterritoires.fr/panorama-cyber-derriere-les-attaques-lombre-de-la-russie-et-de-la-chine", source: "Banque des Territoires" },
      { date: "2025", titre: "Secteurs les plus touchés",
        texte: "L'éducation et la recherche représentent 34 % des signalements, les ministères et collectivités 24 %, la santé 10 % et les télécommunications 9 %.",
        lien: "https://www.banquepopulaire.fr/professionnels/conseils/panorama-cybermenace/", source: "ANSSI, via Banque Populaire" },
      { date: "2026", titre: "Priorités rappelées par l'ANSSI",
        texte: "Corriger vite les vulnérabilités, segmenter les systèmes et maîtriser les accès distants. La directive NIS 2 et le Cyber Resilience Act forment le nouveau cadre réglementaire.",
        lien: "https://www.solutions-numeriques.com/?p=247509", source: "Solutions Numériques" }
    ],
    retenir: [
      "Les attaquants exploitent vite les failles : les mises à jour doivent être régulières et suivies.",
      "Les comptes et les accès distants sont des portes d'entrée courantes : mots de passe solides, droits limités, authentification renforcée.",
      "Une sauvegarde testée et un plan de reprise limitent les dégâts d'un rançongiciel.",
      "Toutes les entreprises sont concernées, y compris les petites."
    ],
    liens: [
      "Active Directory : politique de mots de passe, verrouillage de session et droits par groupes.",
      "Switchs Cisco : segmentation par VLAN et sécurité des ports, comme le recommande l'ANSSI.",
      "GLPI : l'inventaire du parc permet de savoir quels postes doivent être mis à jour.",
      "SIAAP : le secteur de l'eau et de l'assainissement fait partie des secteurs visés par la directive NIS 2 (à confirmer avec ton tuteur)."
    ]
  },
  {
    id: "automatisation",
    onglet: "Automatisation (Ansible)",
    titre: "Automatisation de l'infrastructure avec Ansible",
    resume: "Suivre l'évolution d'Ansible et des pratiques d'automatisation pour gérer plusieurs serveurs de façon rapide, identique et fiable.",
    pourquoi: "Dans mon projet, j'ai utilisé Ansible pour automatiser mes tâches. Je veux savoir comment l'outil évolue, quelles versions sont maintenues et quelles nouveautés peuvent servir à mon entreprise.",
    sources: [
      { nom: "Documentation officielle Ansible", type: "Officielle", frequence: "À chaque version", url: "https://docs.ansible.com" },
      { nom: "Blog Red Hat (Ansible)", type: "Éditeur", frequence: "Mensuelle", url: "https://www.redhat.com/fr/blog" },
      { nom: "Forum de la communauté Ansible", type: "Communauté", frequence: "Hebdomadaire", url: "https://forum.ansible.com" },
      { nom: "GitHub : dépôt ansible/ansible", type: "Code source", frequence: "À chaque version", url: "https://github.com/ansible/ansible" }
    ],
    resultats: [
      { date: "Juin 2023", titre: "Event-Driven Ansible arrive dans la plateforme",
        texte: "La version 2.4 de la plateforme Ansible de Red Hat introduit l'automatisation déclenchée par des événements : une action se lance automatiquement quand un incident ou un changement est détecté.",
        lien: "https://www.redhat.com/fr/blog/end-of-maintenance-support-for-ansible-automation-platform-2.4", source: "Red Hat" },
      { date: "30 juin 2026", titre: "Fin du support de maintenance de la version 2.4",
        texte: "Red Hat arrête le développement actif de la plateforme 2.4. Les entreprises qui l'utilisent sont invitées à passer à la version 2.6 pour rester supportées.",
        lien: "https://www.redhat.com/fr/blog/end-of-maintenance-support-for-ansible-automation-platform-2.4", source: "Red Hat" },
      { date: "2026", titre: "Nouveautés de la plateforme 2.6",
        texte: "La version 2.6 apporte un assistant intelligent et un tableau de bord de l'automatisation, pour suivre les tâches exécutées et leur résultat.",
        lien: "https://www.redhat.com/fr/blog/end-of-maintenance-support-for-ansible-automation-platform-2.4", source: "Red Hat" },
      { date: "1er semestre 2026", titre: "Nouvelles versions du moteur ansible-core",
        texte: "Le moteur ansible-core a continué d'évoluer avec la branche 2.20, puis la 2.21 publiée en 2026. Il faut vérifier la compatibilité de ses playbooks et de sa version de Python à chaque changement.",
        lien: "https://www.versio.io/fr/product-release-end-of-life-eol-red-hat-ansible-core.html", source: "Versio.io" }
    ],
    retenir: [
      "Ansible fonctionne sans agent, par SSH ou WinRM : rien à installer sur les machines à gérer.",
      "Chaque version a une durée de support : il faut anticiper les mises à jour de l'outil lui-même.",
      "Tester ses playbooks avec --check avant de les lancer sur tout le parc évite les erreurs.",
      "L'automatisation sur événements est une piste pour réagir plus vite aux incidents."
    ],
    liens: [
      "Projet Ansible : mes playbooks de mise à jour et de création d'utilisateurs.",
      "Cybersécurité : automatiser les correctifs réduit le délai pendant lequel une faille reste ouverte.",
      "GLPI : l'inventaire peut servir à construire l'inventaire Ansible."
    ]
  }
];
