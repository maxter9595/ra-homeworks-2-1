import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import projectsData from "../data/projectsData.json";

export default function Portfolio() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredProjects =
    selectedFilter === "All"
        ? projectsData
        : projectsData.filter((project) => project.category === selectedFilter);

    return (
        <div className="portfolio">
            <Toolbar
            filters={filters}
            selected={selectedFilter}
            onSelectFilter={setSelectedFilter}
            />
            <ProjectList projects={filteredProjects} />
        </div>
    );
}
