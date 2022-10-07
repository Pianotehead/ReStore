export interface MetaData {
   currentPage: number;
   totalPages: number;
   pageSize: number;
   totalCount: number;
}

//{"currentPage":1,"totalPages":1,"pageSize":6,"totalCount":4}

export class PaginatedResponse<T> {
   items: T;
   metaData: MetaData;

   constructor(items: T, metaData: MetaData) {
      this.items = items;
      this.metaData = metaData;
   }
}