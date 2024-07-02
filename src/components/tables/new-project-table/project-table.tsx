import { FC, useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { ProjectListFilters } from "@/components/lists/ProjectListFilters";
import { ListPagination } from "@/components/lists/ProjectPaginationList";

interface Props {
  projects: IProject[];
  isLoading: boolean;
  deleteProjectById: (id: string) => void;
}

export const ProjectTable: FC<Props> = ({
  projects,
  isLoading,
  deleteProjectById,
}) => {
  const [data, setData] = useState(projects);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(5);

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
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {projects.length === 0 ? (
            <div className="text-center">No projects found</div>
          ) : (
            <>
              <ProjectListFilters
                filter={filter}
                itemsPerPage={itemsPerPage}
                handleFilterChange={handleFilterChange}
                handleItemsPerPageChange={handleItemsPerPageChange}
              />
              <DataTable
                projects={currentData}
                deleteProjectById={deleteProjectById}
              />
              <ListPagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredData.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
