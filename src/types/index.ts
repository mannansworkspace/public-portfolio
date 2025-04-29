export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  media: MediaItem[];
  featured: boolean;
  highlights: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: {
    start: string;
    end: string | 'Present';
  };
  technologies: string[];
  summary: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  longBio: string;
  phone: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    upwork?: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  duration: {
    start: string;
    end: string;
  };
  location: string;
  cgpa: string;
  description: string;
  courses: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies?: string[];
}

export interface TimeSlot {
  start: string;
  end: string;
  isAvailable: boolean;
}

export interface BookingSlot {
  date: string;
  slots: TimeSlot[];
}

export interface BookingRequest {
  name: string;
  email: string;
  date: string;
  timeSlot: string;
  purpose: string;
} 