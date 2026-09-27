export const PREP_GUIDES = [
  {
    id: "eeg-prep",
    title: "EEG Preparation Guide",
    filename: "eeg-prep.pdf",
    description: "Complete guide for preparing for your EEG appointment, including medication instructions and sleep requirements.",
  },
  {
    id: "emg-prep",
    title: "EMG Preparation Guide",
    filename: "emg-prep.pdf",
    description: "Instructions for EMG and nerve conduction study preparation, including what to wear and medications to avoid.",
  },
  {
    id: "migraine-diary",
    title: "Migraine Diary Template",
    filename: "migraine-diary.pdf",
    description: "Printable migraine tracking diary to record triggers, symptoms, and treatment effectiveness for your neurologist.",
  },
  {
    id: "stroke-warning",
    title: "Stroke Warning Signs",
    filename: "stroke-warning.pdf",
    description: "Quick reference guide for recognizing stroke symptoms using BE FAST and when to seek emergency care.",
  },
] as const;

export type PrepGuide = typeof PREP_GUIDES[number];
export type PrepGuideId = PrepGuide["id"];
