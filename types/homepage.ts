import type { SanityDocument } from "@sanity/client";

export interface Statistique {
  _type: 'statistique';
  _key: string;
  texteExplicatif: string;
  valeur: number;
}

export interface BoutonAction {
  texteBouton: string;
  lienBouton: string;
}

export interface SectionAccueil {
  texteDescription: string;
  titrePrincipal: string;
  boutonAction: BoutonAction;
  statistiques: Statistique[];
}

export interface Formule {
  prix: number;
  _key: string;
  nomFormule: string;
  caracteristiques: string[];
  periodicite: 'mensuel' | 'annuel';
}

export interface Tarification {
  titreTarification: string;
  formules: Formule[];
}

export interface Etape {
  descriptionEtape: string;
  _key: string;
  titreEtape: string;
}

export interface ProcessusUtilisation {
  etapes: Etape[];
  titreSectionProcessus: string;
}

export interface QuestionFrequente {
  _key: string;
  reponse: string;
  question: string;
}

export interface Temoignage {
  commentaire: string;
  note: number;
  roleUtilisateur: string;
  nomUtilisateur: string;
  _key: string;
}

export interface Fonctionnalite {
  _type: 'fonctionnalite';
  description: string;
  _key: string;
  couleurFond: string;
  titreFonctionnalite: string;
}

export interface Avantage {
  titreAvantage: string;
  _key: string;
}

export interface Homepage extends SanityDocument {
  tarification: Tarification;
  sectionAccueil: SectionAccueil;
  titrePrincipal: string;
  avantages: Avantage[];
  processusUtilisation: ProcessusUtilisation;
  questionsFrequentes: QuestionFrequente[];
  temoignages: Temoignage[];
  fonctionnalites: Fonctionnalite[];
  _type: 'homepage';
}