interface RestGetAllResponse<Entity> {
    results: Array<Entity>;
  }
  
  interface IRestApi<Entity> {
    getAll: () => Promise<RestGetAllResponse<Entity>>;
    save: (item: Entity) => Promise<Entity>;
    insert: (item: Entity) => Promise<Entity>;
    delete: (itemId: number) => Promise<boolean>;
  }
export { IRestApi, RestGetAllResponse };
