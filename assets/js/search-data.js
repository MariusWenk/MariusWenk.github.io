// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "My projects, ranging from resources to executable programs",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My GitHub stats and some of my most relevant repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a brief summary of my background and interests.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-my-first-blog",
      
        title: "My first blog",
      
      description: "this is what a future blog of mine might look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/photo-blog-ai/";
        
      },
    },{id: "news-the-website-is-now-up-and-operational-new-blog-posts-are-still-to-come",
          title: 'The website is now up and operational! New blog posts are still to...',
          description: "",
          section: "News",},{id: "projects-resources",
          title: 'Resources',
          description: "for learning ML",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MLresources/";
            },},{id: "projects-pet-classifier",
          title: 'Pet classifier',
          description: "trained with fast.ai in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PetClassifier/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4D%61%72%69%75%73_%57%65%6E%6B@%67%6D%78.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MariusWenk# your GitHub user name", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/mariuswenk", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/MariusWenk", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
