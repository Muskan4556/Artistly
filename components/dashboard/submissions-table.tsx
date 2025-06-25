"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Eye,
  Check,
  X,
  MapPin,
  Clock,
  ArrowUpDown,
  Search,
} from "lucide-react";
import { ArtistSubmission, formatFeeRange } from "@/data/dashboard/mocks";

interface SubmissionsTableProps {
  submissions: ArtistSubmission[];
  onAction: (id: string, action: "view" | "approve" | "reject") => void;
}

export default function SubmissionsTable({
  submissions,
  onAction,
}: SubmissionsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const getStatusBadge = (status: string) => {
    const colors = {
      pending:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
      approved:
        "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      rejected: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
    } as const;

    const statusKey = status as keyof typeof colors;
    const colorClass = colors[statusKey] || colors.pending;

    return <Badge className={`capitalize ${colorClass}`}>{status}</Badge>;
  };

  const columns = useMemo<ColumnDef<ArtistSubmission>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium hover:bg-transparent"
          >
            Artist Details
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => {
          const submission = row.original;
          return (
            <div className="min-w-0 max-w-xs pl-4">
              <div className="font-medium text-gray-900 dark:text-white truncate">
                {submission.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {submission.email}
              </div>
              <div className="flex items-center text-xs text-gray-400 dark:text-gray-500 mt-1">
                <Clock className="w-3 h-3 mr-1" />
                {submission.experience}{" "}
                {submission.experience === 1 ? "year" : "years"} exp
              </div>
            </div>
          );
        },
      },
      {
        id: "categories",
        accessorFn: (row) => row.categories.join(", "),
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium hover:bg-transparent"
          >
            Categories & Location
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => {
          const submission = row.original;
          return (
            <div className="min-w-0">
              <div className="flex flex-wrap gap-1 mb-2">
                {submission.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-3 h-3 mr-1" />
                {submission.location}
              </div>
            </div>
          );
        },
      },
      {
        id: "languages",
        accessorFn: (row) => row.languages.join(", "),
        header: "Languages",
        cell: ({ row }) => {
          const submission = row.original;
          return (
            <div className="text-sm text-gray-700 dark:text-gray-300">
              {submission.languages.slice(0, 2).join(", ")}
              {submission.languages.length > 2 && (
                <span className="text-xs text-gray-500 ml-1">
                  +{submission.languages.length - 2} more
                </span>
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "feeRange",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium hover:bg-transparent"
          >
            Fee Range
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ getValue }) => (
          <span className="font-medium text-gray-900 dark:text-white whitespace-nowrap">
            {formatFeeRange(getValue() as string)}
          </span>
        ),
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium hover:bg-transparent"
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ getValue }) => getStatusBadge(getValue() as string),
      },
      {
        accessorKey: "submittedAt",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium hover:bg-transparent"
          >
            Submitted
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ getValue }) => (
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {new Date(getValue() as string).toLocaleDateString()}
          </span>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const submission = row.original;
          return (
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onAction(submission.id, "view")}
                className="h-8 w-8 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                title="View Details"
              >
                <Eye className="h-4 w-4 text-blue-600" />
              </Button>
              {submission.status === "pending" && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onAction(submission.id, "approve")}
                    className="h-8 w-8 p-0 hover:bg-green-50 dark:hover:bg-green-900/20"
                    title="Approve"
                  >
                    <Check className="h-4 w-4 text-green-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onAction(submission.id, "reject")}
                    className="h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-900/20"
                    title="Reject"
                  >
                    <X className="h-4 w-4 text-red-600" />
                  </Button>
                </>
              )}
            </div>
          );
        },
      },
    ],
    [onAction]
  );

  const table = useReactTable({
    data: submissions,
    columns,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          placeholder="Search submissions..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="h-12">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-6">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center py-6"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400 px-2">
        Showing {table.getFilteredRowModel().rows.length} of{" "}
        {submissions.length} submissions
      </div>
    </div>
  );
}
