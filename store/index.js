import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Portfolio",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Abe Weiner Paintings",
      category: "Web Development",
      img: "images/web-project-2.jpg",
      publishDate: "May 15, 2022",
      tag: "Family, Elementor, WordPress",
      objectivesTitle: "Objective",
      objectivesDetails:
        "I felt compelled to develop this site because, of those in my family, I had some technical experience with web design. Not long after starting, this project connected me with the grandfather I never had an opportunity to really know. I was captivated by his art. He was quite the painter in his time. Once featured in TIME Magazine in 1950, Grandpa won several prestigious artistic awards, with pieces showcased in New York, Pittsburgh, Chicago and Washington D.C. I found the time I had with each of his paintings to be a visually moving experience. I have enjoyed the incredible experience in sharing this project with a group of his former students at the Ivy School of Professional Art in Pittsburgh, who often share memorable stories of their experiences with him as a teacher and friend. This is the second iteration of the project, developed late last year using Elementor, a Wordpress plugin.",
      techTitle: "Tools & Technologies",
      projectImages: [
        {
          id: uuidv4(),
          title: "Abe Weiner Paintings",
          img: "images/web-project-2.jpg",
        },
      ],
      technologies: [
        "Wordpress",
        "Elementor CMS"
      ],
      links: [
        {
          id: uuidv4(),
          icon: "external-link",
          url: [
            "https://www.abeweinerpaintings.com", 
          ],
          urlText: [
            "Website"
          ]
        },
        {
          id: uuidv4(),
          icon: "external-link",
          url: [
            "https://nodebb.org/blog/the-faceless-master/"
          ],
          urlText: [
            "The Faceless Master - NodeBB Developer Blog"
          ]
        }
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
      title: "Performing Cellist",
      category: "Music",
      img: "images/mobile-project-2.jpg",
      tag: "Cello, Performance",
      projectImages: [
        {
          id: uuidv4(),
          title: "Music Performance",
          img: "images/mobile-project-2.jpg",
        },
      ],
      technologies: [],
      linkTitle: "Recent Performances",
      links: [
        {
          id: uuidv4(),
          icon: "youtube",
          url: [
            "https://youtu.be/aX9T7kEgmK4",
          ],
          urlText: [
            "You Raise Me Up - Southeast Christian Church",
          ],
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
      title: "String Pedagogy",
      category: "Education",
      img: "images/mobile-project-1.jpg",
      tag: "Music Education, Orchestra, Strings",
      objectivesTitle: "Background",
      objectivesDetails:
        "As an educator, my background is in string pedagogy and instruction. Through college and professional learning, I have gained a strong working knowledge of appropriate instrumental techniques for children of all ages and abilities. As someone who loves to learn, I have a passion for the process of facilitating positive learning experiences for others.",
      projectImages: [
        {
          id: uuidv4(),
          title: "Orchestra Director",
          img: "images/mobile-project-1.jpg",
        },
      ],
      technologies: [],
      linkTitle: "",
      links: [
        {
          id: uuidv4(),
          url: [
            "",
          ],
          urlText: [ " ",

          ],
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Inventory Console App",
      category: "Software Development",
      img: "images/ui-project-1.jpg",
      publishDate: "June 21 2022",
      tag: "Software Development",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Console app for Inventory Management. I created this to help organize personal items to prepare for a move. This was my first project using C#. ",
      techTitle: "Tools & Technologies",
      projectImages: [
        {
          id: uuidv4(),
          title: "Inventory Management Console App",
          img: "images/ui-project-1.jpg",
        },
      ],
      technologies: [
        "C#",
        ".NET5.0"
      ],
      linkTitle: "Links",
      links: [
        {
          id: uuidv4(),
          icon: "github",
          url: [
            "https://github.com/nicholasaweiner/inventory-mgmt"
          ],
          urlText: [
            "Inventory Management Tool"
          ]
        },
        {
          id: uuidv4(),
          icon: "download",
          download: "nweiner_inventory_console_app_wireframe.png",
          url: [],
          urlText: [
            "Wireframe"
          ]
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Cryptocurrency Budget Tool",
      category: "Web Development",
      img: "images/web-project-1.jpg",
      publishDate: "May 11, 2022",
      tag: "Code Louisville, Web Development Pathway, Vanilla JavaScript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "My excitement toward blockchain tech led me to invest on impulse. I designed this website because I wanted a tool that would help keep track of how much I was investing in cryptocurrencies. This project was designed while taking Code Louisville's Web Development bootcamp.",
      techTitle: "Tools & Technologies",
      projectImages: [
        {
          id: uuidv4(),
          title: "Cryptocurrency Budget Tool",
          img: "images/web-project-1.jpg",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Vanilla JavaScript",
        "JQuery",
        "Bootstrap 4",
      ],
      linkTitle: "Link",
      links: [
        {
          id: uuidv4(),
          icon: "github",
          url: [
            "https://github.com/nicholasaweiner/crypto-budget-tool",
          ],
          urlText: [
            "Cryptocurrency Budget Tool"
          ]
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
      title: "Bootstrap 4 Portfolio",
      category: "Web Development",
      img: "images/ui-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "Bootstrap 4, HTML, CSS",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This was a project for my first course in Code Louisville. The portfolio's intended purpose was to demonstrate present and past accomplishments. The website featured three categories of content: Latest Projects, Experience, and Professional Interests.",
      techTitle: "Tools & Technologies",
      projectImages: [
        {
          id: uuidv4(),
          title: "Bootstrap 4 Portfolio",
          img: "images/ui-project-2.jpg",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap 4",
        "Vanilla JavaScript"
      ],
      linkTitle: "Link",
      links: [
        {
          id: uuidv4(),
          icon: "github",
          url: [
            "https://github.com/nicholasaweiner/nick_digital_portfolio",
          ],
          urlText: [
            "Bootstrap Portfolio"
          ]
        },
      ],
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Hi! My name is Nick and I'm from Louisville, Kentucky. I serve as a high school orchestra director in Louisville, Kentucky. I am particularly passionate about innovation in tech and education. I'm currently a Masters student in Human-Computer Interaction at Indiana University-Purdue University Indianapolis (IUPUI). I recently completed Code Louisville's Web Development Pathway. I have earned a Masters in Educational Leadership with an emphasis in Educational Technology from the University of Kentucky. Prior to teaching, I attended the University of Louisville on a music scholarship graduating with a Bachelor\'s in Music Education. I perform actively as a professional cellist in the Louisville area.",
    },
    {
      id: uuidv4(),
      bio: "In my free time, I enjoy playing board games with my wife, Stephanie, and spoiling our cats, Stella and Luna. I also enjoy binge-watching new sci-fi and drama shows like Obi-Wan Kenobi, Star Trek: Picard, and NCIS.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/nicholasaweiner",
    },
    {
      id: uuidv4(),
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/nick-weiner-995972106/",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/nicholasaweiner",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Development",
    },
    {
      id: uuidv4(),
      value: "software",
      name: "Software Development",
    },
    {
      id: uuidv4(),
      value: "music",
      name: "Music",
    },
    {
      id: uuidv4(),
      value: "education",
      name: "Education",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
