export const featuresData = [
  {
    id: 1,
    title: "One-Click AI Analysis",
    description: "description1",
    image: "/images/feature1.jpg",
  },
  {
    id: 2,
    title: "Secure & Web-Based",
    description: "description2",
    image: "/images/feature2.jpg",
  },
  {
    id: 3,
    title: "Image Upload & Analysis",
    description: "description3",
    image: "/images/feature3.jpg",
  },
];

import { LuBrainCircuit } from "react-icons/lu";
import { RiStethoscopeFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";

export const chooseData = [
  {
    id: 1,
    title: "AI Report Generation",
    description:
      "Turns AI results into structured, physician-validated reports",
    icon: <LuBrainCircuit size={50} />,
    color: "#DC143C",
  },
  {
    id: 2,
    title: "Physician Review",
    description: "Physicians can review or modify AI findings",
    icon: <RiStethoscopeFill size={50} />,
    color: "#0046FF",
  },
  {
    id: 3,
    title: "Automated Reporting",
    description:
      "Automatic report generation including annotated images and segmentations",
    icon: <TbReportSearch size={50} />,
    color: "#08CB00",
  },
  {
    id: 4,
    title: "Workflow Adaptation",
    description: "Customizable & evolving based on your workflow",
    icon: <FaGear size={50} />,
    color: "#F25912",
  },
  {
    id: 5,
    title: "Continuous Improvement",
    description: "Regular AI model updates based on user feedback and new data",
    icon: <FiRefreshCcw size={50} />,
    color: "#E53888",
  },
];

export const benefitsData = [
  {
    id: 1,
    title: "Time Savings",
    description: "Significant reduction in radiology report writing time",
  },
  {
    id: 2,
    title: "Improved Diagnostic Accuracy",
    description: "AI-powered support for clinical decision-making",
  },
  {
    id: 3,
    title: "Full Patient Privacy",
    description: "No identifiable data stored on the cloud",
  },
  {
    id: 4,
    title: "Canadian Innovation",
    description: "Built by Canadian experts in medical imaging and AI",
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
    desc: "Researchers in Breast Cancer Detection using AI",
    icon: <GiArtificialIntelligence size={40} />,
  },
  {
    id: 4,
    desc: "Centers seeking faster, more accurate, and secure reporting tools",
    icon: <FaTools size={40} />,
  },
];
