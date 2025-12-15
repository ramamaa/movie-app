import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type PaginationCompProps = {
  page: string;
  url: string;
  totalPages: number;
};
export const PaginationComp = ({
  page,
  url,
  totalPages,
}: PaginationCompProps) => {
  return (
    <Pagination className="justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${url}page=${Number(page) - 1}`}
            aria-disabled={Number(page) <= 1}
            tabIndex={Number(page) <= 1 ? -1 : undefined}
            className={
              Number(page) <= 1 ? "pointer-events-none opacity-30" : undefined
            }
          />
        </PaginationItem>
        {page !== "1" && (
          <>
            <PaginationItem>
              <PaginationLink href={`${url}page=${Number(page) - 1}`}>
                {Number(page) - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink isActive href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
        {Number(page) < totalPages && (
          <>
            <PaginationItem>
              <PaginationLink href={`${url}page=${Number(page) + 1}`}>
                {Number(page) + 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href={`${url}page=${Number(page) + 1}`}
            aria-disabled={Number(page) >= totalPages}
            tabIndex={Number(page) >= totalPages ? -1 : undefined}
            className={
              Number(page) >= totalPages
                ? "pointer-events-none opacity-30"
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
