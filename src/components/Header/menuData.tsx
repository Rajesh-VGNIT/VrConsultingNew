import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 3,
        title: "Why Vr Consultings",
        path: "/why-vr-consultings",
        newTab: false,
      },
      {
        id: 4,
        title: "Our Skills",
        path: "/our-skills",
        newTab: false,
      }
    ]
  },
  {
    id: 5,
    title: "Products",
    path: "/our-products",
    newTab: false,
  },
  
  {
  id: 7,
  title: "Services",
  newTab: false,
  submenu: [
    {
      id: 8,
      title: "Web Development",
      newTab: false,
      submenu: [
        {
          id: 9,
          title: "PHP Web Application Development",
          path: "/php-web-application",
          newTab: false,
        },
        {
          id: 10,
          title: "Codeigniter Framework",
          path: "/codeigniter-framework",
          newTab: false,
        },
        {
          id: 11,
          title: "Laravel Development",
          path: "/laravel-web-application-development",
          newTab: false,
        },
        {
          id: 12,
          title: "E-Commerce Website Development",
          path: "/e-commerce-website-development",
          newTab: false,
        },
        {
          id: 13,
          title: "Node Js Development",
          path: "/node-js-development-company",
          newTab: false,
        },
        {
          id: 14,
          title: "Dot Net Development",
          path: "/dot-net-development-company",
          newTab: false,
        }
      ]
    },

    {
      id: 15,
      title: "Mobile Application Development",
      newTab: false,
      submenu: [
        {
          id: 16,
          title: "IOS Application Development",
          path: "/ios-application-development",
          newTab: false,
        },
        {
          id: 17,
          title: "Flutter Application Development",
          path: "/flutter-application-development",
          newTab: false,
        },
        {
          id: 18,
          title: "Android Application Development",
          path: "/android-app-development-company",
          newTab: false,
        },
      ]
    },

    {
      id: 19,
      title: "CMS Development Services",
      newTab: false,
      submenu: [
        {
          id: 20,
          title: "Magento CMS Development Services",
          path: "/magento-development",
          newTab: false,
        },
        {
          id: 21,
          title: "WordPress Development Services",
          path: "/wordpress-development-services",
          newTab: false,
        },
        {
          id: 22,
          title: "Drupal CMS Development Services",
          path: "/drupal-development",
          newTab: false,
        },
      ]
    },
    {
      id: 23,
      title: "Web Design (UI/UX Design)",
      newTab: false,
      submenu: [
        {
          id: 24,
          title: "Custom Web Design",
          path: "/custom-web-design",
          newTab: false,
        },
        {
          id: 25,
          title: "Responsive Web Design",
          path: "/responsive-website-designing-development",
          newTab: false,
        },
        {
          id: 26,
          title: "User Interface Design-UI",
          path: "/user-interface-design-ux",
          newTab: false,
        },
      ]
    },
    {
      id: 27,
      title: "Custom Development Services",
      newTab: false,
      submenu: [
        {
          id: 28,
          title: "Custom Web Application Development",
          path: "/custom-website-development-company",
          newTab: false,
        },
        {
          id: 29,
          title: "Custom Mobile Application Development",
          path: "/mobile-applications-development-company",
          newTab: false,
        },
        {
          id: 30,
          title: "React Native Application Development",
          path: "/react-native-application-development",
          newTab: false,
        },
      ]
    },
    {
      id: 31,
      title: "Digital Marketing",
      newTab: false,
      submenu: [
        {
          id: 32,
          title: "SEO Service",
          path: "/seo-services-provider-company",
          newTab: false,
        },
        {
          id: 33,
          title: "PPC Management",
          path: "/ppc",
          newTab: false,
        },
        {
          id: 34,
          title: "Social Networking",
          path: "/social-networking",
          newTab: false,
        },
        {
          id: 35,
          title: "Social media Marketing",
          path: "/social-media-marketing",
          newTab: false,
        },
      ]
    },
    {
      id: 36,
      title: "Testing & QA",
      newTab: false,
      submenu: [
        {
          id: 37,
          title: "Functional Testing",
          path: "/functional-testing",
          newTab: false,
        },
        {
          id: 38,
          title: "Performance Testing",
          path: "/performance-testing",
          newTab: false,
        }
      ]
    },
    {
      id: 39,
      title: "Testing & QA",
      newTab: false,
      submenu: [
        {
          id: 40,
          title: "Domain Hosting",
          path: "/domain-hosting",
          newTab: false,
        },
        {
          id: 41,
          title: "AWS /Azure/Docker Server",
          path: "/aws-server",
          newTab: false,
        }
      ]
    }
  ]
},
{
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  }
  ,
{
    id: 70,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  }
];
export default menuData;
