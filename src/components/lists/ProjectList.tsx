import React, { FC, useEffect, useState } from "react";
import { ProjectCard } from "../cards/ProjectCard";

import { ListPagination } from "./ProjectPaginationList";
import { ProjectListFilters } from "./ProjectListFilters";

interface Props {
  projects: IProject[];

  isLoading: boolean;
}

export const ProjectList: FC<Props> = ({ isLoading, projects }) => {
  const [data, setData] = useState(projects);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(3);

  const filteredData = data.filter((project) =>
    project.projectName.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (newValue: string) => {
    setFilter(newValue);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newValue: number) => {
    setItemsPerPage(newValue);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    setData(projects);
    setCurrentPage(1);
  }, [projects]);

  return (
    <div className="container mx-auto py-5">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProjectListFilters
            filter={filter}
            itemsPerPage={itemsPerPage}
            handleFilterChange={handleFilterChange}
            handleItemsPerPageChange={handleItemsPerPageChange}
          />

          <div className="grid grid-cols-1 gap-4">
            {currentData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <ListPagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};
