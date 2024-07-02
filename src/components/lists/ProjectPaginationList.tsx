import { FC } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export const ListPagination: FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers: number[] = [];

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const getDisplayedPages = () => {
    if (totalPages <= 3) {
      return pageNumbers;
    }

    if (currentPage <= 2) {
      return [1, 2, 3];
    }

    if (currentPage >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const displayedPages = getDisplayedPages();

  return (
    <Pagination className="mt-2 md:mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => paginate(currentPage - 1)}
            className={
              currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>

        {currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {displayedPages.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              onClick={() => paginate(number)}
              isActive={number === currentPage}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => paginate(currentPage + 1)}
            className={
              currentPage >= totalPages
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
