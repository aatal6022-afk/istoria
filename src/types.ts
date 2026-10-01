export interface TimelineEvent {
  id: string;
  year: string;
  numericYear: number;
  title: string;
  category: 'islam' | 'steppe' | 'interaction';
  description: string;
  significance: string;
  icon?: string;
  imageUrl?: string;
}

export interface PillarOfIslam {
  id: number;
  arabicName: string;
  ukrainianName: string;
  translation: string;
  description: string;
  details: string[];
  symbol: string;
}

export interface SteppeTribe {
  id: string;
  name: string;
  period: string;
  region: string;
  religion: string;
  lifestyle: string;
  relationWithRus: string;
  keyFacts: string[];
  bannerColor: string;
}

export interface MapLocation {
  id: string;
  name: string;
  ukrainianTitle: string;
  coords: { x: number; y: number }; // percentage on SVG map
  type: 'city' | 'battle' | 'region' | 'trade_route';
  category: 'arab' | 'steppe' | 'rus' | 'byzantine';
  description: string;
  historicalNote: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: 'arab' | 'steppe' | 'chronology' | 'terms';
  hint: string;
}

export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  definition: string;
  category: 'Арабський світ' | 'Великий Степ' | 'Військова справа' | 'Культура та побут';
  origin: string;
}

export interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  section: string;
  bulletPoints: string[];
  keyDateOrQuote?: {
    highlight: string;
    caption: string;
  };
  speakerNotes: string; // Шпаргалка для виступу на уроці
  badge: string;
  bgGradient: string;
}
