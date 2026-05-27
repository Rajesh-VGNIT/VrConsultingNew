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
          path: "/services/php-web-application",
          newTab: false,
        },
        {
          id: 10,
          title: "Codeigniter Framework",
          path: "/services/codeigniter-framework",
          newTab: false,
        },
        {
          id: 11,
          title: "Laravel Development",
          path: "/services/laravel-web-application-development",
          newTab: false,
        },
        {
          id: 12,
          title: "E-Commerce Website Development",
          path: "/services/e-commerce-website-development",
          newTab: false,
        },
        {
          id: 13,
          title: "Node Js Development",
          path: "/services/node-js-development-company",
          newTab: false,
        },
        {
          id: 14,
          title: "Dot Net Development",
          path: "/services/dot-net-development-company",
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
          path: "/services/ios-application-development",
          newTab: false,
        },
        {
          id: 17,
          title: "Flutter Application Development",
          path: "/services/flutter-application-development",
          newTab: false,
        },
        {
          id: 18,
          title: "Android Application Development",
          path: "/services/android-app-development-company",
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
          path: "/services/magento-development",
          newTab: false,
        },
        {
          id: 21,
          title: "WordPress Development Services",
          path: "/services/wordpress-development-services",
          newTab: false,
        },
        {
          id: 22,
          title: "Drupal CMS Development Services",
          path: "/services/drupal-development",
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
          path: "/services/custom-web-design",
          newTab: false,
        },
        {
          id: 25,
          title: "Responsive Web Design",
          path: "/services/responsive-website-designing-development",
          newTab: false,
        },
        {
          id: 26,
          title: "User Interface Design-UI",
          path: "/services/user-interface-design-ux",
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
          path: "/services/custom-website-development-company",
          newTab: false,
        },
        {
          id: 29,
          title: "Custom Mobile Application Development",
          path: "/services/mobile-applications-development-company",
          newTab: false,
        },
        {
          id: 30,
          title: "React Native Application Development",
          path: "/services/react-native-application-development",
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
          path: "/services/seo-services-provider-company",
          newTab: false,
        },
        {
          id: 33,
          title: "PPC Management",
          path: "/services/ppc",
          newTab: false,
        },
        {
          id: 34,
          title: "Social Networking",
          path: "/services/social-networking",
          newTab: false,
        },
        {
          id: 35,
          title: "Social media Marketing",
          path: "/services/social-media-marketing",
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
          path: "/services/functional-testing",
          newTab: false,
        },
        {
          id: 38,
          title: "Performance Testing",
          path: "/services/performance-testing",
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
          path: "/services/domain-hosting",
          newTab: false,
        },
        {
          id: 41,
          title: "AWS /Azure/Docker Server",
          path: "/services/aws-server",
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
