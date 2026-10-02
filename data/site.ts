// ---------------------------------------------------------------------------
// All editable website content lives here. Replace the lorem ipsum text,
// names, links, photos and documents as the project progresses.
// ---------------------------------------------------------------------------

export const site = {
  teamName: "T520",
  projectTitle: "Interactive Automated Kitting and Fulfillment System",
  // Hero title split into lines; the middle line gets the red→orange gradient.
  titleLines: ["Interactive Automated", "Kitting & Fulfillment", "System"],
  sponsorCompany: "Rockwell Automation",
  tagline:
    "A portable automated manufacturing system that lets a user select a LEGO-style build, then dispenses, verifies, packages, labels, and delivers the finished kit.",
  school: "FAMU-FSU College of Engineering",
  years: "2026–2027",
};

// Logos shown next to the team tag in the navbar (files live in /public/logos).
export const logos = [
  { src: "/logos/famufsulogo.png", alt: "FAMU-FSU College of Engineering", href: "https://eng.famu.fsu.edu/" },
  { src: "/logos/rockwell-automation.png", alt: "Rockwell Automation", href: "https://www.rockwellautomation.com/" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "abstract", label: "Abstract" },
  { id: "project", label: "Project" },
  { id: "sponsors", label: "Sponsors" },
  { id: "team", label: "Team" },
  { id: "deliverables", label: "Deliverables" },
];

export const abstract = {
  paragraphs: [
    "Student teams will design, build, validate, and demonstrate a portable automated manufacturing system that allows a user to select a LEGO-style build from a FactoryTalk Optix interface. The system will dispense the required parts into a standard container, verify the expected quantity, package the kit, apply the appropriate label, and deliver the completed package to a safe pickup station.",
    "The machine will use a Rockwell Automation CompactLogix controller for sequence control, recipe execution, interlocks, alarms, and diagnostics. FactoryTalk Optix will provide student-facing selection experience, operator controls, equipment status, production information, and educational content.",
  ],
  stats: [
    { value: 6, suffix: "", label: "Team Members" },
    { value: 3, suffix: "", label: "Disciplines" },
    { value: 4, suffix: "", label: "Sponsor Advisors" },
    { value: 2, suffix: "", label: "Semesters" },
  ],
};

export const project = {
  status: "To be updated",
  intro:
    "Select a build, and the machine does the rest: dispense the parts, verify the count, package the kit, label it, and deliver it to a safe pickup station. Detailed design information will be added as the project develops.",
  subsystems: [
    {
      icon: "cog",
      title: "Mechanical",
      text: "Part dispensing into a standard container, kit packaging, and transfer of the finished package to a safe pickup station.",
    },
    {
      icon: "zap",
      title: "Electrical",
      text: "Portable control panel, power distribution, and the sensors and actuators that verify part quantities and drive each station.",
    },
    {
      icon: "cpu",
      title: "Controls (CompactLogix)",
      text: "Sequence control, recipe execution, interlocks, alarms, and diagnostics on a Rockwell Automation CompactLogix controller.",
    },
    {
      icon: "boxes",
      title: "HMI (FactoryTalk Optix)",
      text: "Build selection for the user, plus operator controls, equipment status, production information, and educational content.",
    },
  ],
};

export type Person = {
  name: string;
  photo: string;
  linkedin: string;
};

export const sponsors: (Person & { title: string })[] = [
  { name: "Tajaey Young", title: "", photo: "/sponsors/sponsor-1.svg", linkedin: "https://www.linkedin.com/" },
  { name: "James Fadool", title: "Technical Lead", photo: "/sponsors/sponsor-2.svg", linkedin: "https://www.linkedin.com/" },
  { name: "Amanda Eason", title: "", photo: "/sponsors/sponsor-3.svg", linkedin: "https://www.linkedin.com/" },
  { name: "Shalay George", title: "COE Engagement", photo: "/sponsors/sponsor-4.svg", linkedin: "https://www.linkedin.com/" },
];

export const team: (Person & { major: string })[] = [
  { name: "James Riordan", major: "Mechanical Engineering", photo: "/team/member-1.svg", linkedin: "https://www.linkedin.com/" },
  { name: "Shamil Jones", major: "Mechanical Engineering", photo: "/team/member-2.svg", linkedin: "https://www.linkedin.com/" },
  { name: "Emilee Strom", major: "Mechanical Engineering", photo: "/team/member-3.svg", linkedin: "https://www.linkedin.com/" },
  { name: "Alan Bernal", major: "Computer Engineering", photo: "/team/member-4.svg", linkedin: "https://www.linkedin.com/" },
  { name: "Ravion Hyatt", major: "Computer Engineering", photo: "/team/member-5.svg", linkedin: "https://www.linkedin.com/" },
  { name: "Wole Senat", major: "Electrical Engineering", photo: "/team/member-6.svg", linkedin: "https://www.linkedin.com/" },
];

// Drop new files into /public/docs and add an entry here (newest first).
// `description` and `updated` are optional; leave them "" to hide them.
export const deliverables = [
  { title: "Customer Needs", description: "", updated: "2026-09-25", file: "/docs/SD T519 Customer Needs 260925.docx" },
  { title: "Project Charter", description: "", updated: "2026-09-18", file: "/docs/SD T519 Project Charter 260918.docx" },
  { title: "Code of Conduct", description: "", updated: "", file: "/docs/Code of Conduct.pdf" },
];

export const footer = {
  college: "FAMU-FSU College of Engineering",
  address: ["2525 Pottsdamer Street", "Tallahassee, FL 32310"],
  mapEmbed:
    "https://www.google.com/maps?q=FAMU-FSU+College+of+Engineering,+2525+Pottsdamer+St,+Tallahassee,+FL+32310&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=FAMU-FSU+College+of+Engineering+2525+Pottsdamer+St+Tallahassee+FL+32310",
  copyright: "© 2026–2027 T520 Website. All rights reserved.",
};
