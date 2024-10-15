import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Tech Stack Compliance Dashboard',
        description: "Designed and developed UI components for a scalable dashboard application using Angular and Spring Boot with Micro Frontends. Reducing deployment conflicts by 60%. Optimized front-end performance through lazy loading cutting load times by 50%. Integrated 3rd libraries & optimized SQL/Snowflake queries, improving data retrieval speed by 35%.",
        tools: ['Angular 8+','TypeScript', 'HTML5', 'CSS3', 'Spring Boot', 'Java', 'Snowflake', 'SQL', 'Karma/Jasmine', 'JUnit'],
        role: 'Software Engineer (Apprenticeship)',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Curability Prediction Models For Anemia Using ML',
        description: 'Developed a machine learning solution for anemia forecasting using Python and scikit-learn to predict future patient cases. I implemented advanced predictive models and optimized machine learning algorithms, applying data preprocessing techniques and algorithm tuning to enhance accuracy and reliability. This work contributed to proactive patient management and improved resource allocation, enabling healthcare providers to anticipate and address anemia cases more effectively.',
        tools: ['Python', 'Scikit-learn', "Pandas", "NumPy", "Matplotlib/Seaborn", "Jupyter Notebook", "Statsmodels", "Featuretools"],
        role: 'ML Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },