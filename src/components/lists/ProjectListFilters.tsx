import React, { FC } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface Props {
  filter: string;
  itemsPerPage: number;
  handleFilterChange: (newValue: string) => void;
  handleItemsPerPageChange: (newValue: number) => void;
}

export const ProjectListFilters: FC<Props> = ({
  filter,
  itemsPerPage,
  handleFilterChange,
  handleItemsPerPageChange,
}) => {
  return (
    <div className="md:flex md:flex-row md:justify-between md:items-center md:mb-2">
      <Input
        placeholder="Filter projects..."
        value={filter}
        onChange={(event) => handleFilterChange(event.target.value)}
        className="max-w-sm"
      />
      <div className="flex gap-2 items-center my-2">
        <p>Rows per page:</p>
        <Select
          defaultValue={itemsPerPage.toString()}
          onValueChange={(value) => {
            handleItemsPerPageChange(parseInt(value));
          }}
        >
          <SelectTrigger className="w-[60px]">
            <SelectValue placeholder="Select a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Rows per page</SelectLabel>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
