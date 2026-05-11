import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "CRM Customer Relationship management",
    paragraph:
      "We at VR Consulting design tailored CRM solutions for your enterprise, improving efficiency and customer management in today’s fast-paced world, where CRM is essential for every modern business success growth.",
    image: "/images/blog/crm.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Customer Relationship management",
    },
    tags: ["CRM"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "MLM Multi Level Marketing",
    paragraph:
      "Let’s choose an incredible MLM business Plan. VR Consulting Delivers enterprise-level, fully integrated MLM software that is accomplished all sorts of MLM Business requirements of clients. We provide fully secure MLM Software with great customer support.",
    image: "/images/blog/mlm.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Multi Level Marketing",
    },
    tags: ["MLM"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "ERP Enterprise Resource Planning",
    paragraph:
      "We understand critical role efficient integrated ERP system plays in modern business success. Our solution streamlines operations, boosts productivity, enables sustainable growth for organizations effectively today.",
    image: "/images/blog/erp.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Enterprise Resource Planning",
    },
    tags: ["ERP"],
    publishDate: "2025",
  },
];
export default blogData;
