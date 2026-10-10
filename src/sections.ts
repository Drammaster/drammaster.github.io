export interface Section {
  id: string;
  label: string;
}

export const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "mythicvitals", label: "MythicVitals" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const RESUME_URL = `${process.env.PUBLIC_URL}/Csaba Darazs CV.pdf`;
export const GITHUB_URL = "https://github.com/Drammaster";
export const EMAIL = "Csabi1996@windowslive.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/csaba-darazs-04052b176/";
