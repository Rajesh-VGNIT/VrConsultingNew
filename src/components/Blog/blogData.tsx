import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "CRM Customer Relationship Management",
    paragraph:
      "We at VR Consulting design tailored CRM solutions for your enterprise, improving efficiency and customer management in today’s fast-paced world.",
    
    image: "/images/blog/crm.png",

    tags: ["CRM"],

    publishDate: "2024",

    button: "Read More",

    link: "/crm-software-development-company",

    author: {
      name: "VR Consulting",
      designation: "Business Solutions",
      image: "/images/blog/author-01.png",
    },
  },

  {
    id: 2,
    title: "MLM Multi-Level Marketing",
    paragraph:
      "VR Consulting delivers enterprise-level MLM software with complete security and excellent customer support.",

    image: "/images/blog/mlm.jpg",

    tags: ["MLM"],

    publishDate: "2025",

    button: "Read More",

    link: "/mlm-software-development-company",

    author: {
      name: "VR Consulting",
      designation: "Marketing Solutions",
      image: "/images/blog/author-02.png",
    },
  },

  {
    id: 3,
    title: "ERP Enterprise Resource Planning",
    paragraph:
      "Our ERP solutions streamline operations, improve productivity, and support sustainable business growth.",

    image: "/images/blog/erp.jpg",

    tags: ["ERP"],

    publishDate: "2026",

    button: "Read More",

    link: "/enterprise-resource-planning",

    author: {
      name: "VR Consulting",
      designation: "ERP Solutions",
      image: "/images/blog/author-03.png",
    },
  },
];

export default blogData;