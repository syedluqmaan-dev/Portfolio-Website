import './projects.css';

function Projects() {
    const projects = [
        {
            title: "Africa Web Solutions",
            category: "wordpress",
            description: "A fully customized bus booking platform for our client in Africa. Transformed the traditional WooCommerce experience into a streamlined booking system using AJAX, custom SQL queries, and advanced session handling.",
        },
        {
            title: "Manhood Journey",
            category: "wordpress",
            description: "A site teaching men how to become better fathers. Customized My Account module using AJAX, custom SQL queries, and WooCommerce template customizations.",
        },
        {
            title: "Focus Waukesha",
            category: "wordpress",
            description: "A high-level custom WordPress project built with ACF blocks and a customized WooCommerce flow.",
        },
        {
            title: "502Hemp",
            category: "wordpress",
            description: "A fully functional eCommerce store designed for seamless sales of hemp-based products, featuring a user-friendly interface and secure checkout experience.",
        },
        {
            title: "RBundle",
            category: "wordpress",
            description: "An advanced online marketplace connecting businesses with professional services, built with extensive custom JavaScript solutions to handle complex functionalities and user interactions.",
        },
        {
            title: "Sahaj Holidays",
            category: "wordpress",
            description: "A dynamic hotel booking platform, featuring Booking.com API integration, custom plugins, and full multilingual support for a global audience.",
        },
        {
            title: "Portfolio",
            category: "react",
            description: "A fully functional portfolio designed to showcase skills and developer experience.",
        },
        {
            title: "Pokemon App",
            category: "react",
            description: "A fun and interactive app that lets users explore, search, and view detailed information about their favorite Pokémon.",
        },
        {
            title: "Todo List", 
            category: "react",
            description: "A simple task management app to help users organize their daily activities, set priorities, and track progress with ease.",
        }
    ];

    const wordpressProjects = projects.filter(project => project.category === "wordpress");
    const reactProjects = projects.filter(project => project.category === "react");
    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-heading">Projects</h2>
            <h3 className="projects-subheading">Wordpress Projects</h3>
            <div className="projects-grid">
                {wordpressProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="projects-subheading">React Projects</h3>
            <div className="projects-grid">
                {reactProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
