// Navigation configuration
// Set enabled: false to disable menu items while keeping content pages

export const navigationConfig = {
  about: {
    enabled: true,
    subItems: {
      foss4g: { enabled: true },
      map: { enabled: true },
      organizers: { enabled: true },
      concept: { enabled: true },
      codeOfConduct: { enabled: true },
      privacyPolicy: { enabled: true },
      termsConditions: { enabled: true },
      sponsors: { enabled: true }
    }
  },
  register: {
    enabled: true,
    subItems: {
      registration: { enabled: true },
      studentship: { enabled: false }, // Disabled per user request
      travelGrant: { enabled: false }, // Disabled per user request
      adoptATicket: { enabled: false }, // Disabled per user request
      volunteering: { enabled: false }, // Disabled per user request
      cancellation: { enabled: false } // Disabled per user request
    }
  },
  cfp: {
    enabled: true,
    subItems: {
      generalSessions: { enabled: true },
      academicTrack: { enabled: true },
      workshops: { enabled: true }
    }
  },
  program: {
    enabled: true,
    subItems: {
      outline: { enabled: true },
      keynote: { enabled: false }, // Disabled per user request
      presentations: { enabled: false }, // Disabled per user request
      workshops: { enabled: false }, // Disabled per user request
      events: { enabled: false } // Disabled per user request
    }
  },
  attending: {
    enabled: true,
    subItems: {
      venue: { enabled: true },
      transport: { enabled: false }, // Disabled per user request
      travelGuide: { enabled: false }, // Disabled per user request
      accommodation: { enabled: false } // Disabled per user request
    }
  },
  contact: {
    enabled: true
  }
}

// Helper function to check if a navigation item is enabled
export function isNavEnabled(section: string, subItem?: string): boolean {
  const config = navigationConfig as any
  
  if (!config[section]) return false
  
  if (subItem) {
    return config[section].enabled && config[section].subItems?.[subItem]?.enabled
  }
  
  return config[section].enabled
}
