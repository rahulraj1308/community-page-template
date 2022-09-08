import { v4 as uuidv4 } from "uuid";
import Logo from "../assets/logo.svg";
import bannerImg from "../assets/hero-img.jpg";
import { manipulateDate } from "../utils";

export const LocalConfig = {
  Logo: Logo,
  communityName: "Planters",
  primaryColor: "#08BD80",
  HEADER: {
    logo: Logo,
    communityName: "Planters",
  },
  HERO: {
    tagData: [
      { bgColor: "#AEAFAE", value: "MEMBERS ACROSS GLOBE" },
      { bgColor: "#5AE4A7", value: "5k PlANTER FAMILY" },
      { bgColor: "#D5F8E5", value: "PLANTED 20K TREES" },
    ],
    heroImgUrl: bannerImg,
    mainText: "LET’S MAKE  MOTHER EARTH GREENER",
    subText:
      "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
  },
  HIGHLIGHT_BOX: {
    bgColor: "#f8f8f8",
    text: "We don’t inherit the earth from our ancestors, we borrow it from our children.",
  },
  ABOUT_US: {
    tagData_one: "Awesome team",
    tagData_two: "Value Collaboration",
    tagData_three: "Chance to become certified Planters",
    tagData_four: "Backed by government",
    tagData_five: "We serve mother Earth",
    description:
      "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. feeling and makes the place worth living. It is the easiest way to beautify the surrounding. feeling and makes the place worth living. It is the easiest way to beautify the surrounding. feeling and makes the place worth living. It is the easiest way to beautify the surrounding. feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
  },

  MEMBERS: {
    data: [
      {
        designation: "Co-founder",
        name: "Sergio Da Paula",
        imgUrl:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      },
      {
        designation: "Co-founder",
        name: "Jonas kakaroto",
        imgUrl:
          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      },
      {
        designation: "Newest and youngest member",
        name: "Lisa",
        imgUrl:
          "https://images.unsplash.com/photo-1513086670993-297187d3a281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      },
      {
        designation: "Event Planner",
        name: "Shelby Miller",
        imgUrl:
          "https://images.unsplash.com/photo-1523920716885-8a681115294f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3393&q=80",
      },
      {
        designation: "People Coordinator",
        name: "Ransford Quaye",
        imgUrl:
          "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      },
    ],
  },

  EVENTS: {
    data: [
      {
        id: uuidv4(),
        title: "1k Tree plantation program",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
        date: manipulateDate(3),
        place: "4th Avenvue Park Baner Pune",
        participantsJoined: 150,
        joiningLink: "https://www.google.com/",
        eventStatus: "upcoming",
      },
      {
        id: uuidv4(),
        title: "Urban plantation program day",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
        date: new Date().toDateString(),
        place: "4th Avenvue Park Baner Pune",
        participantsJoined: 90,
        joiningLink: "https://www.google.com/",
        eventStatus: "today",
      },
      {
        id: uuidv4(),
        title: "1k Tree plantation program",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
        date: manipulateDate(-3),
        place: "4th Avenvue Park Baner Pune",
        participantsJoined: 200,
        joiningLink: "https://www.google.com/",
        eventStatus: "past",
      },
      {
        id: uuidv4(),
        title: "Urban plantation program day",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.  feeling and makes the place worth living. It is the easiest way to beautify the surrounding.",
        date: manipulateDate(5),
        place: "4th Avenvue Park Baner Pune",
        participantsJoined: 8,
        joiningLink: "https://www.google.com/",
        eventStatus: "upcoming",
      },
    ],
  },
  EXPLORE_GROUP: {
    data: [
      {
        name: "Urban folks here",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80",
        size: 180,
        id: uuidv4(),
      },
      {
        name: "Remote folks here",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2208&q=80",
        size: 100,
        id: uuidv4(),
      },
      {
        name: "World famous folks here",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        size: 200,
        id: uuidv4(),
      },
      {
        name: "Nomad folks here",
        description:
          "Good feeling and makes the place worth living. It is the easiest way to beautify the surrounding. Trees are often planted on the parks, gardens, roadside, societies, and garden of our home for the purpose of reforming.",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        size: 500,
        id: uuidv4(),
      },
    ],
  },

  TESTIMONIAL: {
    data: [
      {
        id: uuidv4(),
        name: "Alexendria Seth",
        imgUrl:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3386&q=80",
        value:
          "Tree planting is the process in which tree seedlings are transplanted generally for forestry, land reclamation, or landscaping purposes. Tree plantation is very necessary because trees provide oxygen to the environment and make the air quality better",
      },
      {
        id: uuidv4(),
        name: "Simon Sen",
        imgUrl:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        value:
          "Tree planting is the process in which tree seedlings are transplanted generally for forestry, land reclamation, or landscaping purposes. Tree plantation is very necessary because trees provide oxygen to the environment and make the air quality better",
      },
      {
        id: uuidv4(),
        name: "Aditya Podaar",
        imgUrl:
          "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3466&q=80",
        value:
          "Tree planting is the process in which tree seedlings are transplanted generally for forestry, land reclamation, or landscaping purposes. Tree plantation is very necessary because trees provide oxygen to the environment and make the air quality better",
      },
      {
        id: uuidv4(),
        imgUrl: "",
        name: "Payal Singh",
        imgUrl:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        value:
          "Tree planting is the process in which tree seedlings are transplanted generally for forestry, land reclamation, or landscaping purposes. Tree plantation is very necessary because trees provide oxygen to the environment and make the air quality better",
      },
    ],
  },

  FAQ: {
    data: [
      {
        id: uuidv4(),
        question: "Why plant trees?",
        answer:
          "Every year, more and more of our forests are affected by natural disturbances that cause deforestation. Wildfire, insects and disease - exacerbated by climate change - are jeopardizing the future of our forests. Planting trees helps restore forest cover, ensuring that our forests can continue to provide wildlife habitat, supply water to millions of Americans, and help fight climate change.",
      },
      {
        id: uuidv4(),
        question: "Where are the trees planted?",
        answer:
          "We work directly with the U.S. Forest Service to select planting sites where the ecological need is greatest. From planting in areas burned by wildfire in the Western U.S. to restoring historic longleaf pine stands in the Southeast, we plant in all regions, responding to where trees are needed most.",
      },
      {
        id: uuidv4(),
        question:
          "How do you decide where to plant trees and what trees to plant?",
        answer:
          "We work directly with the U.S. Forest Service to select planting sites where the ecological need is greatest. From planting in areas burned by wildfire in the Western U.S. to restoring historic longleaf pine stands in the Southeast, we plant in all regions, responding to where trees are needed most. Climate change is creating new stressors for our forests by changing important environmental conditions like temperature and precipitation.",
      },
      {
        id: uuidv4(),
        question: "How do these trees help mitigate climate change?",
        answer:
          "Forests in the U.S. offset between 10 to 20 percent of U.S. carbon emissions each year. Reforestation helps sustain and increase the carbon sequestration potential of our National Forests, mitigating the effects of global climate change.",
      },
    ],
  },
};

export const AdminConfig = {
  Logo: Logo,
  communityName: "Planters",
  HEADER: {
    logo: Logo,
    communityName: "Planters",
  },
};
