interface RestGetAllResponse<Entity> {
    results: Array<Entity>;
  }
  
  interface RestApi<Entity> {
    getAll: () => Promise<RestGetAllResponse<Entity>>;
    save: (item: Entity) => Promise<Entity>;
    insert: (item: Entity) => Promise<Entity>;
    delete: (item: Entity) => Promise<boolean>;
  }
export { RestApi, RestGetAllResponse };