// Structure du menu principal, reprise de l'arborescence du site actuel (brief section 3-4).
// Modifie ce fichier pour ajouter/renommer une page dans la navigation.

export type NavLink = {
  label: string;
  href: string;
};

// Arbre récursif : un NavGroup sans `children` est une simple feuille
// (rendue comme un lien). Un NavGroup SANS `href` est un label purement
// groupant (ex: "3G & Circuit Switched"), qui ne fait que déplier ses
// enfants — il ne navigue nulle part, comme sur le site actuel.
export type NavGroup = {
  label: string;
  href?: string;
  children?: NavGroup[];
};

export const productsMenu: NavGroup[] = [
  { label: 'Catalog', href: '/products/catalog' },
  { label: 'Common API Framework', href: '/products/capif-core-function' },
  {
    label: 'API Exposure Functions',
    href: '/products/api-exposure-functions',
    children: [
      {
        label: '3G & Circuit Switched',
        children: [
          { label: 'CAP-AEF', href: '/products/api-exposure-functions/3g-circuit-switched/cap-aef' },
          { label: 'MAP-AEF', href: '/products/api-exposure-functions/3g-circuit-switched/map-aef' },
          { label: 'USSD-AEF', href: '/products/api-exposure-functions/3g-circuit-switched/ussd-aef' },
          { label: 'INAP-AEF', href: '/products/api-exposure-functions/3g-circuit-switched/inap-aef' },
        ],
      },
      {
        label: '4G & Packet Switched',
        children: [
          { label: 'ISC-AEF', href: '/products/api-exposure-functions/4g-packet-switched/isc-aef' },
          { label: 'DMT-AEF', href: '/products/api-exposure-functions/4g-packet-switched/dmt-aef' },
        ],
      },
      {
        label: 'Cross-domain',
        children: [
          { label: 'SMS-AEF', href: '/products/api-exposure-functions/cross-domain/sms-aef' },
          { label: 'CPaaS-AEF', href: '/products/api-exposure-functions/cross-domain/cpaas-aef' },
          { label: 'SCS-AEF', href: '/products/api-exposure-functions/cross-domain/scs-aef' },
        ],
      },
    ],
  },
  {
    label: 'Application Functions',
    href: '/products/application-functions',
    children: [{ label: 'NRD-AF', href: '/products/application-functions/nrd-af' }],
  },
  {
    label: 'Interworking Functions',
    href: '/products/interworking-functions',
    children: [
      { label: 'Charging IWF (CHF-IWF)', href: '/products/interworking-functions/charging-iwf' },
      { label: 'IP Multimedia IWF', href: '/products/interworking-functions/ip-multimedia-iwf' },
      { label: 'Short Message IWF', href: '/products/interworking-functions/short-message-iwf' },
    ],
  },
  { label: 'Load Balancers', href: '/products/load-balancers' },
];

export const useCasesMenu: NavLink[] = [
  { label: 'Single Engine', href: '/use-cases/single-engine' },
  { label: 'Value Added Services', href: '/use-cases/value-added-services' },
  { label: '3rd Party API Exposure', href: '/use-cases/3rd-party-api-exposure' },
  { label: 'Charging Interworking', href: '/use-cases/charging-interworking' },
  { label: 'Private Networks', href: '/use-cases/private-networks' },
  { label: '5G Northbound APIs', href: '/use-cases/5g-northbound-apis' },
];

export const mainNav: NavLink[] = [
  { label: 'Telco Cloud Experts', href: '/' },
  { label: 'Technology', href: '/technology' },
  { label: 'Products', href: '/products' },
  { label: 'Use cases', href: '/use-cases' },
  { label: 'Articles', href: '/articles' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  products: [
    { label: 'Common API Framework', href: '/products/capif-core-function' },
    { label: 'API Exposure Functions', href: '/products/api-exposure-functions' },
    { label: 'Application Functions', href: '/products/application-functions' },
    { label: 'Interworking Functions', href: '/products/interworking-functions' },
    { label: 'Load Balancers', href: '/products/load-balancers' },
  ],
  useCases: useCasesMenu,
  company: [
    { label: 'About', href: '/about' },
    { label: 'Technology', href: '/technology' },
    { label: 'Expertise', href: '/about#expertise' },
    { label: 'Services', href: '/about#services' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const siteInfo = {
  name: 'Slicce',
  legalName: 'Slicce: Self-contained Lightweight Cloud Communication Engines',
  address: '101 W Renner Rd, Richardson TX 75082, United States',
  phone: '+1 (646) 513-2698',
  whatsapp: 'https://wa.me/16465132698',
  email: 'info@slicce.co',
  linkedin: 'https://www.linkedin.com/company/slicce',
  youtube: 'https://www.youtube.com/@slicce-telco-cloud-service',
};
