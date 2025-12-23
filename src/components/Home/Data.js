export const featuresData = [
  {
    id: 1,
    title: "One Click AI Analysis",
    description:
      "Run AI analysis instantly to highlight regions of interest, suspicious patterns, and key image indicators.",
    image: "/images/feature1.jpg",
  },
  {
    id: 2,
    title: "Secure Web Based Platform",
    description:
      "Access the platform securely through the web with strong encryption, data protection, and controlled user access.",
    image: "/images/feature2.jpg",
  },
  {
    id: 3,
    title: "Image Upload and Processing",
    description:
      "Upload mammography images and receive AI generated insights within moments, supporting fast and secure image analysis.",
    image: "/images/feature3.png",
  },
];

import { ImLoop2 } from "react-icons/im";
import { MdInsights } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

export const chooseData = [
  {
    id: 1,
    title: "Structured Insight Output",
    description:
      "From image upload to customized structured output within seconds.",
    icon: <MdInsights size={50} />,
    color: "#DC143C",
  },
  {
    id: 2,
    title: "Designed for Mammography Practice",
    description:
      "Fits naturally into mammography reading routines and existing clinical processes.",
    icon: <BiClinic size={50} />,
    color: "#0046FF",
  },
  {
    id: 3,
    title: "Continuous Improvement",
    description: "Models evolve through evaluation, feedback, and new data.",
    icon: <ImLoop2 size={50} />,
    color: "#08CB00",
  },
];

export const benefitsData = [
  {
    id: 1,
    title: "Time Savings",
    description: "Reduces time spent on repetitive image analysis tasks.",
  },
  {
    id: 2,
    title: "Consistency",
    description:
      "Supports more consistent mammography image analysis across cases.",
  },
  {
    id: 3,
    title: "Patient Privacy",
    description: "No identifiable patient data stored on the cloud.",
  },
  {
    id: 4,
    title: "Canadian Innovation",
    description: "Developed by Canadian experts in AI and medical imaging.",
  },
];
import { FaFileImage, FaClinicMedical, FaTools } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export const whoData = [
  {
    id: 1,
    desc: "Breast Imaging Radiologists",
    icon: <FaFileImage size={40} />,
  },
  {
    id: 2,
    desc: "Diagnostic Clinics and Hospitals",
    icon: <FaClinicMedical size={40} />,
  },
  {
    id: 3,
    desc: "Researchers working on mammography and AI",
    icon: <GiArtificialIntelligence size={40} />,
  },
  {
    id: 4,
    desc: "Centers seeking secure AI assisted mammography tools",
    icon: <FaTools size={40} />,
  },
];
