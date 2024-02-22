document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            name: "Road Scenes Segmentation with ResNet Encoder and FPN Decoder",
            description: "End-to-end semantic segmentation of road scenes using FCN style architecture, trained with various loss functions.",
            link: "https://github.com/saahu27/road-scenes-segmentation"
        },
        {
            name: "Path Planning in ROS",
            description: "Implemented various path planning algorithms and a data-driven approach for motion planning of an autonomous robot.",
            link: "https://github.com/saahu27/path-planning-ros"
        },
        {
            name: "ARIAC 2023",
            description: "Developed a software control system for industrial manufacturing, improving robot agility and reducing sensor costs.",
            link: "https://github.com/saahu27/ariac-2023"
        },
        {
            name: "Structure from Motion",
            description: "Reconstructed 3D scenes and obtained camera poses using geometric vision techniques and unsupervised learning.",
            link: "https://github.com/saahu27/structure-from-motion"
        }
    ];

    function displayProjects() {
        const projectContainer = document.getElementById("projects");
        if (!projectContainer) return;

        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.className = "project";

            const title = document.createElement("h3");
            title.textContent = project.name;

            const description = document.createElement("p");
            description.textContent = project.description;

            const link = document.createElement("a");
            link.href = project.link;
            link.textContent = "View on GitHub";
            link.target = "_blank";

            projectElement.appendChild(title);
            projectElement.appendChild(description);
            projectElement.appendChild(link);

            projectContainer.appendChild(projectElement);
        });
    }

    displayProjects();
});
