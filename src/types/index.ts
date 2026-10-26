export type ScreenState = 
  | 'welcome' 
  | 'questions' 
  | 'final-reveal';

export interface QuestionData {
  id: number;
  questionNumber: number;
  title: string;
  question: string;
  illustrationType: 'panda-mirror' | 'teddy-heart' | 'panda-flower' | 'doll-heart';
  primaryBtnText: string;
  secondaryBtnText: string;
  isDodging?: boolean;
}
