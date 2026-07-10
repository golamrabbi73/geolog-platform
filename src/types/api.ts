export interface Pagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    pagination?: Pagination;
}