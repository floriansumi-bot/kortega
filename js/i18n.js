/* ============================================================
   KORTEGA — i18n (FR / EN / DE) · « L'Atelier : encre & papier »
   ============================================================ */
(function () {
  'use strict';

  var ULINE = '<svg viewBox="0 0 240 12" preserveAspectRatio="none" aria-hidden="true"><path d="M3 8 C 60 2, 150 11, 237 4" stroke="#7E2E2A" stroke-width="4" fill="none" stroke-linecap="round"/></svg>';
  function h1(pre, em) { return pre + ' <span class="uline">' + em + ULINE + '</span>'; }
  function trades(words, tail) {
    return words.map(function (w) { return w; }).join(' <span class="orn">◆</span> ') +
      ' <span class="orn">◆</span> <span class="reg">' + tail + '</span>';
  }

  var I18N = {
    fr: {
      "meta.title": "Kortega — L'atelier web près de Neuchâtel",
      "meta.desc": "Kortega est un petit atelier près de Neuchâtel. On crée le site internet, la présence en ligne et les applications des commerces et des particuliers — sans jargon, sans facture surprise.",
      "nav.services": "Services", "nav.real": "Réalisations", "nav.atelier": "Notre atelier", "nav.tarifs": "Tarifs", "nav.contact": "Contact", "nav.phone_note": "on décroche",
      "hero.eyebrow": "Atelier web — à deux pas de Neuchâtel",
      "hero.h1": h1("On fabrique votre site comme le boulanger fait son pain :", "avec les mains."),
      "hero.lead": "Kortega est un petit atelier près de Neuchâtel. On crée le site internet, la présence en ligne et les applications des commerces qui ont une histoire à raconter — la vôtre, par exemple. Sans jargon, et sans facture surprise.",
      "hero.cta1": "Prenons un café", "hero.cta2": "Voir nos réalisations",
      "hero.reassure": "Deux artisans, un numéro de téléphone, zéro charabia. Vous nous parlez, c'est nous qui répondons.",
      "stamp.found": "Trouvé", "stamp.google": "sur Google",
      "clip.q": "boulangerie · Neuchâtel", "clip.who": "Boulangerie du Lac · Marin", "clip.stars": "4,9 · 128 avis",
      "clip.res2": "Un concurrent, plus bas…", "clip.cap": "— et hop, c'est vous tout en haut.",
      "trust.1": "Fait main en Suisse romande", "trust.2": "Hébergé en Suisse", "trust.3": "Devis clair, sans surprise",
      "services.eyebrow": "Nos services", "services.title": "Ce qu'on sait faire pour vous",
      "svc1.t": "Site internet", "svc1.d": "Un site clair, rapide et impeccable sur mobile, qui présente votre commerce, vos horaires et vous rend joignable en un clic.",
      "svc2.t": "Présence sur Google", "svc2.d": "Fiche Google, avis clients, référencement local : on fait en sorte que vos futurs clients vous trouvent avant le voisin.",
      "svc3.t": "Boutique en ligne", "svc3.d": "Vendez vos produits en ligne, paiement par carte et TWINT, gestion des stocks. Pour les producteurs, artisans et commerces.",
      "svc4.t": "Réservation & applications sur mesure", "svc4.d": "Vos clients réservent une table ou un créneau en ligne, 24 h/24. Et pour le reste, on fabrique l'outil dont vous avez besoin.",
      "svc5.t": "Entretien & refonte", "svc5.d": "Un vieux site illisible sur mobile ? On le remet à neuf et on s'occupe de tout : mises à jour, sécurité, petites modifs.",
      "pourqui.eyebrow": "Pour qui", "pourqui.title": "Pour les commerces qui ont une histoire",
      "pourqui.trades": trades(["boulanger", "boucher", "horloger", "garagiste", "coiffeur", "vigneron", "menuisier", "fleuriste", "pompes funèbres"], "et les particuliers qui ont un projet."),
      "real.eyebrow": "Nos réalisations", "real.title": "Des sites qu'on a déjà fabriqués",
      "real.sub": "On ne montre pas des images : voici de vraies applications en ligne, qu'on a conçues et que vous pouvez ouvrir et tester.",
      "real.by": "Réalisé par nous · WebGL", "real.by2": "Réalisé par nous · PWA", "real.by3": "Réalisé par nous · Plateforme", "real.by4": "Réalisé par nous · Outil web", "real.by5": "Réalisé par nous · Application bureau",
      "work.open": "Ouvrir le projet →", "work.note": "Démonstration sur demande",
      "work.hyper.t": "HyperFractal — visuel pour scènes live", "work.hyper.d": "Visualiseur de fractales à zoom infini pour concerts et mapping de projection.",
      "work.pilot.t": "Pilot — académie Raspberry Pi", "work.pilot.d": "Cours interactif avec un vrai terminal et une platine électronique, directement dans le navigateur.",
      "work.construct.t": "The Construct — apprendre à coder", "work.construct.d": "Apprentissage de 6 langages, chacun exécuté pour de vrai dans le navigateur.",
      "work.sheet.t": "SheetGenie — générateur Excel", "work.sheet.d": "Décrivez ce qu'il vous faut et obtenez un vrai fichier Excel, prêt à télécharger.",
      "work.red.t": "RED MATRIX — gestionnaire musical", "work.red.d": "Logiciel de bureau Windows : bibliothèque, lecteur, visualiseur, export USB et gravure CD.",
      "proc.eyebrow": "Notre méthode", "proc.title": "Comment ça se passe, étape par étape", "proc.sub": "De la première poignée de main à la mise en ligne, vous savez toujours où en est votre projet.",
      "proc1.t": "On se rencontre", "proc1.d": "On discute de votre commerce et de vos clients autour d'un café. C'est gratuit et sans engagement.",
      "proc2.t": "On dessine", "proc2.d": "On vous montre une proposition claire et un prix fixe, écrit d'avance. Pas de surprise.",
      "proc3.t": "On fabrique", "proc3.d": "On construit votre site avec soin, et on vous tient au courant à chaque étape.",
      "proc4.t": "On vous livre les clés", "proc4.d": "Mise en ligne, petite formation, et on reste joignable. Le site est à vous.",
      "tarifs.eyebrow": "Nos prix", "tarifs.title": "Nos prix, annoncés d'avance",
      "tarifs.sub": "Deux façons de payer, au choix : un petit montant chaque mois, ou le site à vous une fois pour toutes — payable en plusieurs fois.",
      "price.from": "dès", "price.quote": "sur devis", "price.permonth": "/mois",
      "price.abo.name": "Abonnement", "price.abo.tag": "le plus accessible", "price.abo.for": "Petits commerces & budgets serrés", "price.abo.pay": "Sans avance · tout compris",
      "price.abo.f1": "Site, nom de domaine & hébergement", "price.abo.f2": "Maintenance & petites modifications", "price.abo.f3": "Engagement 24 mois, sans piège",
      "price.ess.name": "Essentiel", "price.ess.for": "Particuliers & petits commerces", "price.ess.pay": "comptant ou en 3× sans frais",
      "price.ess.f1": "Jusqu'à 5 pages, parfait sur mobile", "price.ess.f2": "Google Maps & formulaire de contact", "price.ess.f3": "Le site est à vous",
      "price.pro.name": "Professionnel", "price.pro.for": "Artisans, PME & restaurants", "price.pro.pay": "comptant ou en 3-4× sans frais",
      "price.pro.f1": "Jusqu'à 10 pages + blog", "price.pro.f2": "Réservation, menu, galerie", "price.pro.f3": "Référencement local avancé",
      "price.cust.name": "Sur mesure", "price.cust.for": "Boutique en ligne & application", "price.cust.pay": "paiement échelonné",
      "price.cust.f1": "Boutique en ligne (carte & TWINT)", "price.cust.f2": "Application web sur mesure", "price.cust.f3": "Multilingue, intégrations",
      "price.note": "Paiement en plusieurs fois, sans frais, sur tous les forfaits. Pas d'abonnement piège : avec l'achat, le site est à vous et vous gardez les clés.",
      "why.eyebrow": "Pourquoi nous", "why.title": "Le sérieux d'un artisan, pas le baratin d'une agence",
      "why1.t": "Vous parlez à la bonne personne", "why1.d": "Deux artisans, un seul numéro de téléphone, zéro intermédiaire. Vous nous parlez, c'est nous qui répondons.",
      "why2.t": "Pas content ? Vous ne payez pas", "why2.d": "Si la première maquette ne vous plaît pas, vous ne payez rien. C'est aussi simple que ça.",
      "why3.t": "En français normal", "why3.d": "On vous explique tout sans jargon. Si vous ne comprenez pas, c'est qu'on a mal fait notre travail.",
      "why4.t": "Fait main en Suisse", "why4.d": "Conçu en Suisse romande, hébergé en Suisse. Et le site vous appartient, à 100 %.",
      "why.seal": "Devis fixe, signé d'avance — la facture finale, c'est le prix annoncé.",
      "team.eyebrow": "Notre atelier", "team.title": "Deux artisans, un seul numéro de téléphone",
      "team.intro": "On s'est rencontrés au Lycée Jean-Piaget, à Neuchâtel, et on développe notre réseau ensemble depuis. Deux profils complémentaires : la technique et le produit d'un côté, l'administration et les finances de l'autre.",
      "team.fs.role": "Co-fondateur · développement & produit",
      "team.fs.d1": "Ingénieur logiciel près de Neuchâtel, en grande partie autodidacte, je me forme de façon structurée — notamment Python via CS50, le cursus d'informatique de l'Université Harvard. Je conçois et je fabrique de vraies applications, en gardant la maîtrise de la qualité du début à la fin.",
      "team.fs.d2": "Mon parcours en médias et communication (Master à l'Université de Lausanne) explique ma façon de travailler : je fais des sites pour de vraies personnes, pas pour des informaticiens.",
      "team.as.role": "Co-fondateur · administration & finances",
      "team.as.d1": "Fort de plus de 10 ans d'expérience comme comptable et dans l'administration d'entreprise, Arthur s'occupe de la gestion, des finances et du suivi des projets. Il garantit des devis clairs, des budgets tenus et des délais respectés.",
      "team.as.d2": "C'est lui qui assure le sérieux administratif et la relation de confiance, du premier devis au suivi après livraison — pour que tout reste simple de votre côté.",
      "faq.eyebrow": "Questions fréquentes", "faq.title": "Les questions qu'on nous pose souvent",
      "faq1.q": "Combien de temps pour avoir mon site ?", "faq1.a": "Un site vitrine est généralement prêt en 2 à 3 semaines. Pour les projets plus grands (boutique, application), on fixe le délai ensemble dès le départ.",
      "faq2.q": "Je n'y connais rien en informatique, c'est grave ?", "faq2.a": "Pas du tout — c'est notre métier. On s'occupe de tout, du nom de domaine à la mise en ligne, et on vous explique l'essentiel sans jargon. Vous n'avez rien de technique à gérer.",
      "faq3.q": "Le site m'appartient vraiment ?", "faq3.a": "Oui, à 100 % (avec l'achat). Contrairement à une page sur les réseaux sociaux, votre site et votre nom de domaine sont à vous, pour toujours.",
      "faq4.q": "Et si je n'ai pas un gros budget ?", "faq4.a": "On a une formule à partir de CHF 49.–/mois, sans avance, tout compris. Et tous nos sites se paient en plusieurs fois, sans frais. On trouve une solution.",
      "faq5.q": "Vous travaillez en dehors de Neuchâtel ?", "faq5.a": "Oui, dans toute la Suisse, à distance ou en personne. On réalise des projets en français, allemand, italien et anglais.",
      "faq6.q": "Comment se passe le paiement ?", "faq6.a": "Un acompte au départ, le solde à la livraison — ou en mensualités. Facture suisse avec QR-facture, paiement par virement ou TWINT. Tout est écrit d'avance.",
      "contact.eyebrow": "Contact", "contact.title": "On en parle autour d'un café ?",
      "contact.d": "Dites-nous en deux mots votre projet (ou juste « j'aimerais un site »). On vous répond vite, avec des idées concrètes et un devis gratuit, sans engagement.",
      "contact.l_phone": "Téléphone", "contact.l_mail": "E-mail", "contact.l_loc": "Où", "contact.loc": "Région de Neuchâtel · toute la Suisse",
      "form.name": "Votre nom", "form.name.ph": "Prénom et nom", "form.shop": "Votre commerce", "form.shop.ph": "Nom de votre commerce (optionnel)",
      "form.email": "E-mail ou téléphone", "form.email.ph": "Pour qu'on vous recontacte", "form.msg": "Votre projet", "form.msg.ph": "Quelques mots sur ce que vous aimeriez…",
      "form.submit": "Envoyer", "form.hint": "Réponse sous 24 h · gratuit & sans engagement",
      "footer.tagline": "L'atelier web près de Neuchâtel. Sites, présence en ligne et applications, faits main en Suisse romande.",
      "footer.made": "Fait main près de Neuchâtel ✳"
    },

    en: {
      "meta.title": "Kortega — the web workshop near Neuchâtel",
      "meta.desc": "Kortega is a small workshop near Neuchâtel. We build the websites, online presence and apps of local businesses and individuals — no jargon, no surprise invoices.",
      "nav.services": "Services", "nav.real": "Our work", "nav.atelier": "The workshop", "nav.tarifs": "Pricing", "nav.contact": "Contact", "nav.phone_note": "we pick up",
      "hero.eyebrow": "Web workshop — just outside Neuchâtel",
      "hero.h1": h1("We build your website the way a baker makes bread:", "by hand."),
      "hero.lead": "Kortega is a small workshop near Neuchâtel. We build the websites, online presence and apps of businesses with a story to tell — yours, for instance. No jargon, and no surprise invoices.",
      "hero.cta1": "Let's grab a coffee", "hero.cta2": "See our work",
      "hero.reassure": "Two craftspeople, one phone number, zero gibberish. You talk to us, and we're the ones who answer.",
      "stamp.found": "Found", "stamp.google": "on Google",
      "clip.q": "bakery · Neuchâtel", "clip.who": "Boulangerie du Lac · Marin", "clip.stars": "4.9 · 128 reviews",
      "clip.res2": "A competitor, further down…", "clip.cap": "— and there you are, right at the top.",
      "trust.1": "Handmade in French-speaking Switzerland", "trust.2": "Hosted in Switzerland", "trust.3": "Clear quote, no surprises",
      "services.eyebrow": "Our services", "services.title": "What we can do for you",
      "svc1.t": "Website", "svc1.d": "A clear, fast, mobile-perfect site that shows your business and hours and makes you reachable in one click.",
      "svc2.t": "Presence on Google", "svc2.d": "Google profile, customer reviews, local SEO: we make sure future customers find you before the neighbour.",
      "svc3.t": "Online shop", "svc3.d": "Sell your products online with card and TWINT payments and stock management. For producers, artisans and shops.",
      "svc4.t": "Booking & custom apps", "svc4.d": "Your customers book a table or a slot online, 24/7. And for the rest, we build the exact tool you need.",
      "svc5.t": "Upkeep & redesign", "svc5.d": "An old site that's unreadable on mobile? We bring it back to life and handle everything: updates, security, small edits.",
      "pourqui.eyebrow": "Who it's for", "pourqui.title": "For businesses with a story",
      "pourqui.trades": trades(["baker", "butcher", "watchmaker", "garage", "hairdresser", "winemaker", "carpenter", "florist", "funeral home"], "and private projects too."),
      "real.eyebrow": "Our work", "real.title": "Sites we've already built",
      "real.sub": "We don't just show pictures: here are real, live applications we designed — ones you can open and test yourself.",
      "real.by": "Built by us · WebGL", "real.by2": "Built by us · PWA", "real.by3": "Built by us · Platform", "real.by4": "Built by us · Web tool", "real.by5": "Built by us · Desktop app",
      "work.open": "Open the project →", "work.note": "Demo on request",
      "work.hyper.t": "HyperFractal — visuals for live shows", "work.hyper.d": "Infinite-zoom fractal visualizer for concerts and projection mapping.",
      "work.pilot.t": "Pilot — Raspberry Pi academy", "work.pilot.d": "Interactive course with a real terminal and an electronics board, right in the browser.",
      "work.construct.t": "The Construct — learn to code", "work.construct.d": "Learn 6 languages, each running for real inside the browser.",
      "work.sheet.t": "SheetGenie — Excel generator", "work.sheet.d": "Describe what you need and get a real Excel file, ready to download.",
      "work.red.t": "RED MATRIX — music manager", "work.red.d": "Windows desktop software: library, player, visualizer, USB export and CD burning.",
      "proc.eyebrow": "Our method", "proc.title": "How it works, step by step", "proc.sub": "From the first handshake to going live, you always know where your project stands.",
      "proc1.t": "We meet", "proc1.d": "We chat about your business and your customers over a coffee. Free, no obligation.",
      "proc2.t": "We sketch", "proc2.d": "We show you a clear proposal and a fixed price, written down in advance. No surprises.",
      "proc3.t": "We build", "proc3.d": "We craft your site carefully and keep you posted at every step.",
      "proc4.t": "We hand over the keys", "proc4.d": "Go-live, a short walk-through, and we stay reachable. The site is yours.",
      "tarifs.eyebrow": "Pricing", "tarifs.title": "Our prices, stated up front",
      "tarifs.sub": "Two ways to pay, your choice: a small amount each month, or the site yours once and for all — payable in instalments.",
      "price.from": "from", "price.quote": "on quote", "price.permonth": "/month",
      "price.abo.name": "Subscription", "price.abo.tag": "most accessible", "price.abo.for": "Small shops & tight budgets", "price.abo.pay": "No upfront · all included",
      "price.abo.f1": "Site, domain name & hosting", "price.abo.f2": "Maintenance & small edits", "price.abo.f3": "24-month term, no traps",
      "price.ess.name": "Essential", "price.ess.for": "Individuals & small shops", "price.ess.pay": "in full or 3× interest-free",
      "price.ess.f1": "Up to 5 pages, perfect on mobile", "price.ess.f2": "Google Maps & contact form", "price.ess.f3": "The site is yours",
      "price.pro.name": "Professional", "price.pro.for": "Artisans, SMEs & restaurants", "price.pro.pay": "in full or 3-4× interest-free",
      "price.pro.f1": "Up to 10 pages + blog", "price.pro.f2": "Booking, menu, gallery", "price.pro.f3": "Advanced local SEO",
      "price.cust.name": "Custom", "price.cust.for": "Online shop & application", "price.cust.pay": "staged payment",
      "price.cust.f1": "Online shop (card & TWINT)", "price.cust.f2": "Custom web application", "price.cust.f3": "Multilingual, integrations",
      "price.note": "Pay in several instalments, interest-free, on every package. No subscription trap: with a purchase, the site is yours and you keep the keys.",
      "why.eyebrow": "Why us", "why.title": "A craftsman's seriousness, not an agency's spin",
      "why1.t": "You talk to the right person", "why1.d": "Two craftspeople, one phone number, no middlemen. You talk to us, and we're the ones who answer.",
      "why2.t": "Not happy? You don't pay", "why2.d": "If you don't like the first mock-up, you pay nothing. It's that simple.",
      "why3.t": "In plain language", "why3.d": "We explain everything without jargon. If you don't understand, it means we did our job badly.",
      "why4.t": "Handmade in Switzerland", "why4.d": "Designed in French-speaking Switzerland, hosted in Switzerland. And the site is 100% yours.",
      "why.seal": "Fixed quote, signed in advance — the final invoice is the price we quoted.",
      "team.eyebrow": "The workshop", "team.title": "Two craftspeople, one phone number",
      "team.intro": "We met at Lycée Jean-Piaget in Neuchâtel and have built our network together ever since. Two complementary profiles: technology and product on one side, administration and finance on the other.",
      "team.fs.role": "Co-founder · development & product",
      "team.fs.d1": "A largely self-taught software engineer near Neuchâtel, I train in a structured way — notably Python through CS50, Harvard University's computer-science course. I design and build real applications, keeping control of quality from start to finish.",
      "team.fs.d2": "My background in media and communication (Master's at the University of Lausanne) explains how I work: I build sites for real people, not for engineers.",
      "team.as.role": "Co-founder · administration & finance",
      "team.as.d1": "With over 10 years of experience as an accountant and in business administration, Arthur handles management, finances and project tracking. He ensures clear quotes, budgets kept and deadlines met.",
      "team.as.d2": "He's the one who ensures administrative reliability and a relationship of trust, from the first quote to post-delivery support — so everything stays simple on your side.",
      "faq.eyebrow": "FAQ", "faq.title": "The questions we get asked most",
      "faq1.q": "How long until my site is ready?", "faq1.a": "A showcase site is usually ready in 2 to 3 weeks. For bigger projects (shop, app) we set the timeline together from the start.",
      "faq2.q": "I know nothing about computers — is that a problem?", "faq2.a": "Not at all — that's our job. We handle everything, from the domain name to going live, and explain the essentials without jargon. Nothing technical for you to manage.",
      "faq3.q": "Do I really own the site?", "faq3.a": "Yes, 100% (with a purchase). Unlike a social media page, your site and domain name are yours, forever.",
      "faq4.q": "What if I don't have a big budget?", "faq4.a": "We have a plan from CHF 49.–/month, no upfront, all included. And every site can be paid in instalments, interest-free. We'll find a solution.",
      "faq5.q": "Do you work outside Neuchâtel?", "faq5.a": "Yes, across Switzerland, remotely or in person. We deliver projects in French, German, Italian and English.",
      "faq6.q": "How does payment work?", "faq6.a": "A deposit to start, the balance on delivery — or in instalments. Swiss invoice with QR-bill, payment by transfer or TWINT. Everything written down in advance.",
      "contact.eyebrow": "Contact", "contact.title": "Shall we talk over a coffee?",
      "contact.d": "Tell us about your project in a few words (or just “I'd like a website”). We reply quickly with concrete ideas and a free, no-obligation quote.",
      "contact.l_phone": "Phone", "contact.l_mail": "Email", "contact.l_loc": "Where", "contact.loc": "Neuchâtel region · all of Switzerland",
      "form.name": "Your name", "form.name.ph": "First and last name", "form.shop": "Your business", "form.shop.ph": "Your business name (optional)",
      "form.email": "Email or phone", "form.email.ph": "So we can get back to you", "form.msg": "Your project", "form.msg.ph": "A few words about what you'd like…",
      "form.submit": "Send", "form.hint": "Reply within 24 h · free & no obligation",
      "footer.tagline": "The web workshop near Neuchâtel. Sites, online presence and apps, handmade in French-speaking Switzerland.",
      "footer.made": "Handmade near Neuchâtel ✳"
    },

    de: {
      "meta.title": "Kortega — die Web-Werkstatt bei Neuenburg",
      "meta.desc": "Kortega ist eine kleine Werkstatt bei Neuenburg. Wir bauen Websites, Online-Präsenz und Apps für lokale Betriebe und Privatpersonen — ohne Fachjargon, ohne Überraschungsrechnung.",
      "nav.services": "Leistungen", "nav.real": "Referenzen", "nav.atelier": "Die Werkstatt", "nav.tarifs": "Preise", "nav.contact": "Kontakt", "nav.phone_note": "wir gehen ran",
      "hero.eyebrow": "Web-Werkstatt — gleich bei Neuenburg",
      "hero.h1": h1("Wir bauen Ihre Website, wie der Bäcker sein Brot macht:", "von Hand."),
      "hero.lead": "Kortega ist eine kleine Werkstatt bei Neuenburg. Wir bauen Websites, Online-Präsenz und Apps für Betriebe mit einer Geschichte — Ihre zum Beispiel. Ohne Fachjargon und ohne Überraschungsrechnung.",
      "hero.cta1": "Auf einen Kaffee?", "hero.cta2": "Unsere Referenzen",
      "hero.reassure": "Zwei Handwerker, eine Telefonnummer, null Kauderwelsch. Sie sprechen mit uns — und wir gehen ran.",
      "stamp.found": "Gefunden", "stamp.google": "auf Google",
      "clip.q": "Bäckerei · Neuenburg", "clip.who": "Boulangerie du Lac · Marin", "clip.stars": "4,9 · 128 Bewertungen",
      "clip.res2": "Ein Mitbewerber, weiter unten…", "clip.cap": "— und schwupp, Sie ganz oben.",
      "trust.1": "Von Hand in der Westschweiz", "trust.2": "In der Schweiz gehostet", "trust.3": "Klare Offerte, keine Überraschungen",
      "services.eyebrow": "Unsere Leistungen", "services.title": "Was wir für Sie tun können",
      "svc1.t": "Website", "svc1.d": "Eine klare, schnelle und mobil perfekte Seite, die Ihren Betrieb und Ihre Öffnungszeiten zeigt und Sie mit einem Klick erreichbar macht.",
      "svc2.t": "Präsenz auf Google", "svc2.d": "Google-Profil, Kundenbewertungen, lokales SEO: Wir sorgen dafür, dass künftige Kunden Sie vor dem Nachbarn finden.",
      "svc3.t": "Online-Shop", "svc3.d": "Verkaufen Sie online, Zahlung per Karte und TWINT, Lagerverwaltung. Für Produzenten, Handwerker und Läden.",
      "svc4.t": "Reservation & individuelle Apps", "svc4.d": "Ihre Kunden buchen online einen Tisch oder Termin, rund um die Uhr. Und sonst bauen wir genau das Werkzeug, das Sie brauchen.",
      "svc5.t": "Pflege & Relaunch", "svc5.d": "Eine alte Seite, mobil unlesbar? Wir machen sie wieder fit und kümmern uns um alles: Updates, Sicherheit, kleine Änderungen.",
      "pourqui.eyebrow": "Für wen", "pourqui.title": "Für Betriebe mit einer Geschichte",
      "pourqui.trades": trades(["Bäcker", "Metzger", "Uhrmacher", "Garage", "Coiffeur", "Winzer", "Schreiner", "Florist", "Bestattung"], "und auch private Projekte."),
      "real.eyebrow": "Unsere Referenzen", "real.title": "Seiten, die wir schon gebaut haben",
      "real.sub": "Wir zeigen nicht nur Bilder: Hier sind echte, live laufende Anwendungen, die wir gestaltet haben — zum Öffnen und Ausprobieren.",
      "real.by": "Von uns gebaut · WebGL", "real.by2": "Von uns gebaut · PWA", "real.by3": "Von uns gebaut · Plattform", "real.by4": "Von uns gebaut · Web-Tool", "real.by5": "Von uns gebaut · Desktop-App",
      "work.open": "Projekt öffnen →", "work.note": "Demo auf Anfrage",
      "work.hyper.t": "HyperFractal — Visuals für Live-Shows", "work.hyper.d": "Fraktal-Visualizer mit unendlichem Zoom für Konzerte und Projection-Mapping.",
      "work.pilot.t": "Pilot — Raspberry-Pi-Akademie", "work.pilot.d": "Interaktiver Kurs mit echtem Terminal und Elektronik-Board, direkt im Browser.",
      "work.construct.t": "The Construct — programmieren lernen", "work.construct.d": "6 Sprachen lernen, jede läuft echt im Browser.",
      "work.sheet.t": "SheetGenie — Excel-Generator", "work.sheet.d": "Beschreiben Sie, was Sie brauchen, und erhalten Sie eine echte Excel-Datei zum Download.",
      "work.red.t": "RED MATRIX — Musikverwaltung", "work.red.d": "Windows-Desktop-Software: Bibliothek, Player, Visualizer, USB-Export und CD-Brennen.",
      "proc.eyebrow": "Unsere Methode", "proc.title": "So läuft es ab, Schritt für Schritt", "proc.sub": "Vom ersten Händedruck bis zum Livegang wissen Sie stets, wo Ihr Projekt steht.",
      "proc1.t": "Wir lernen uns kennen", "proc1.d": "Wir sprechen bei einem Kaffee über Ihren Betrieb und Ihre Kunden. Kostenlos und unverbindlich.",
      "proc2.t": "Wir entwerfen", "proc2.d": "Wir zeigen Ihnen einen klaren Vorschlag und einen Festpreis, im Voraus schriftlich. Keine Überraschung.",
      "proc3.t": "Wir bauen", "proc3.d": "Wir bauen Ihre Seite mit Sorgfalt und halten Sie bei jedem Schritt auf dem Laufenden.",
      "proc4.t": "Wir übergeben die Schlüssel", "proc4.d": "Livegang, kurze Einführung, und wir bleiben erreichbar. Die Seite gehört Ihnen.",
      "tarifs.eyebrow": "Preise", "tarifs.title": "Unsere Preise, im Voraus genannt",
      "tarifs.sub": "Zwei Zahlungswege zur Wahl: ein kleiner Betrag pro Monat, oder die Seite ein für alle Mal Ihre — in Raten zahlbar.",
      "price.from": "ab", "price.quote": "auf Anfrage", "price.permonth": "/Monat",
      "price.abo.name": "Abo", "price.abo.tag": "am zugänglichsten", "price.abo.for": "Kleine Läden & knappe Budgets", "price.abo.pay": "Ohne Anzahlung · alles inklusive",
      "price.abo.f1": "Seite, Domainname & Hosting", "price.abo.f2": "Wartung & kleine Änderungen", "price.abo.f3": "24 Monate Laufzeit, ohne Falle",
      "price.ess.name": "Essential", "price.ess.for": "Private & kleine Läden", "price.ess.pay": "bar oder in 3× zinsfrei",
      "price.ess.f1": "Bis zu 5 Seiten, perfekt mobil", "price.ess.f2": "Google Maps & Kontaktformular", "price.ess.f3": "Die Seite gehört Ihnen",
      "price.pro.name": "Professional", "price.pro.for": "Handwerker, KMU & Restaurants", "price.pro.pay": "bar oder in 3-4× zinsfrei",
      "price.pro.f1": "Bis zu 10 Seiten + Blog", "price.pro.f2": "Reservation, Menü, Galerie", "price.pro.f3": "Erweitertes lokales SEO",
      "price.cust.name": "Massgeschneidert", "price.cust.for": "Online-Shop & Anwendung", "price.cust.pay": "Zahlung in Etappen",
      "price.cust.f1": "Online-Shop (Karte & TWINT)", "price.cust.f2": "Individuelle Web-App", "price.cust.f3": "Mehrsprachig, Integrationen",
      "price.note": "Zahlung in mehreren Raten, zinsfrei, bei allen Paketen. Keine Abo-Falle: beim Kauf gehört die Seite Ihnen und Sie behalten die Schlüssel.",
      "why.eyebrow": "Warum wir", "why.title": "Die Seriosität eines Handwerkers, nicht das Gerede einer Agentur",
      "why1.t": "Sie sprechen mit der richtigen Person", "why1.d": "Zwei Handwerker, eine Telefonnummer, keine Zwischenhändler. Sie sprechen mit uns, und wir gehen ran.",
      "why2.t": "Nicht zufrieden? Sie zahlen nicht", "why2.d": "Gefällt Ihnen der erste Entwurf nicht, zahlen Sie nichts. So einfach ist das.",
      "why3.t": "In normaler Sprache", "why3.d": "Wir erklären alles ohne Fachjargon. Wenn Sie es nicht verstehen, haben wir unsere Arbeit schlecht gemacht.",
      "why4.t": "Von Hand in der Schweiz", "why4.d": "Gestaltet in der Westschweiz, gehostet in der Schweiz. Und die Seite gehört zu 100 % Ihnen.",
      "why.seal": "Festpreis, im Voraus unterzeichnet — die Schlussrechnung ist der genannte Preis.",
      "team.eyebrow": "Die Werkstatt", "team.title": "Zwei Handwerker, eine Telefonnummer",
      "team.intro": "Wir haben uns am Lycée Jean-Piaget in Neuenburg kennengelernt und bauen seither gemeinsam unser Netzwerk auf. Zwei sich ergänzende Profile: Technik und Produkt auf der einen, Verwaltung und Finanzen auf der anderen Seite.",
      "team.fs.role": "Mitgründer · Entwicklung & Produkt",
      "team.fs.d1": "Als grösstenteils autodidaktischer Softwareentwickler bei Neuenburg eigne ich mir das Programmieren strukturiert an — insbesondere Python über CS50, den Informatikkurs der Harvard University. Ich gestalte und baue echte Anwendungen und behalte die Qualität von Anfang bis Ende in der Hand.",
      "team.fs.d2": "Mein Hintergrund in Medien und Kommunikation (Master an der Universität Lausanne) erklärt meine Arbeitsweise: Ich baue Seiten für echte Menschen, nicht für Techniker.",
      "team.as.role": "Mitgründer · Verwaltung & Finanzen",
      "team.as.d1": "Mit über 10 Jahren Erfahrung als Buchhalter und in der Unternehmensverwaltung kümmert sich Arthur um Verwaltung, Finanzen und Projektbegleitung. Er sorgt für klare Offerten, eingehaltene Budgets und Termine.",
      "team.as.d2": "Er sichert die administrative Verlässlichkeit und das Vertrauensverhältnis, von der ersten Offerte bis zur Betreuung nach der Lieferung — damit auf Ihrer Seite alles einfach bleibt.",
      "faq.eyebrow": "Häufige Fragen", "faq.title": "Die Fragen, die man uns oft stellt",
      "faq1.q": "Wie lange dauert es bis zu meiner Seite?", "faq1.a": "Eine Visitenkarten-Website ist meist in 2 bis 3 Wochen fertig. Bei grösseren Projekten (Shop, App) legen wir den Zeitrahmen von Anfang an gemeinsam fest.",
      "faq2.q": "Ich kenne mich mit Computern nicht aus — schlimm?", "faq2.a": "Überhaupt nicht — das ist unser Job. Wir kümmern uns um alles, vom Domainnamen bis zum Livegang, und erklären das Wesentliche ohne Fachjargon. Nichts Technisches für Sie.",
      "faq3.q": "Gehört mir die Seite wirklich?", "faq3.a": "Ja, zu 100 % (beim Kauf). Anders als eine Social-Media-Seite gehören Ihre Website und Ihr Domainname Ihnen, für immer.",
      "faq4.q": "Und wenn ich kein grosses Budget habe?", "faq4.a": "Wir haben ein Angebot ab CHF 49.–/Monat, ohne Anzahlung, alles inklusive. Und jede Seite kann zinsfrei in Raten bezahlt werden. Wir finden eine Lösung.",
      "faq5.q": "Arbeiten Sie auch ausserhalb von Neuenburg?", "faq5.a": "Ja, schweizweit, aus der Ferne oder persönlich. Wir realisieren Projekte auf Französisch, Deutsch, Italienisch und Englisch.",
      "faq6.q": "Wie läuft die Bezahlung ab?", "faq6.a": "Eine Anzahlung zum Start, der Rest bei Lieferung — oder in Raten. Schweizer Rechnung mit QR-Rechnung, Zahlung per Überweisung oder TWINT. Alles im Voraus schriftlich.",
      "contact.eyebrow": "Kontakt", "contact.title": "Sprechen wir bei einem Kaffee?",
      "contact.d": "Sagen Sie uns in zwei Worten Ihr Projekt (oder einfach „ich möchte eine Website“). Wir antworten rasch, mit konkreten Ideen und einer kostenlosen, unverbindlichen Offerte.",
      "contact.l_phone": "Telefon", "contact.l_mail": "E-Mail", "contact.l_loc": "Wo", "contact.loc": "Region Neuenburg · ganze Schweiz",
      "form.name": "Ihr Name", "form.name.ph": "Vor- und Nachname", "form.shop": "Ihr Betrieb", "form.shop.ph": "Name Ihres Betriebs (optional)",
      "form.email": "E-Mail oder Telefon", "form.email.ph": "Damit wir Sie zurückrufen können", "form.msg": "Ihr Projekt", "form.msg.ph": "Ein paar Worte zu Ihren Wünschen…",
      "form.submit": "Senden", "form.hint": "Antwort innert 24 Std. · kostenlos & unverbindlich",
      "footer.tagline": "Die Web-Werkstatt bei Neuenburg. Seiten, Online-Präsenz und Apps, von Hand in der Westschweiz.",
      "footer.made": "Von Hand bei Neuenburg ✳"
    }
  };

  function apply(lang) {
    var dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (dict[k] != null) el.setAttribute('placeholder', dict[k]);
    });
    if (dict['meta.title']) document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md && dict['meta.desc']) md.setAttribute('content', dict['meta.desc']);
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('kortega-lang', lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('kortega-lang'); } catch (e) {}
  var initial = saved || ((navigator.language || 'fr').slice(0, 2).toLowerCase());
  if (!I18N[initial]) initial = 'fr';

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });

  apply(initial);
  window.__kortegaSetLang = apply;
})();
