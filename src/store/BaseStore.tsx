import { observable, action, computed } from "mobx";
import * as toastr from 'toastr';
import { Author, IRestEntity } from "interface";
import { RestApi } from "api/RestApi";
import { IRestApi } from "api/IRestApi";

const DELETE_FAILED = 'DELETE_FAILED';

class BaseStore<Entity extends IRestEntity>   {
    defaultItem: Entity;
    @observable items: Array<Entity> = [];
    @observable item: Entity;
    loadPromise: any = undefined;
    api: IRestApi<Entity>;

    constructor(api: IRestApi<Entity>, defaultItem: Entity) {
        this.api = api;
        this.defaultItem = defaultItem;
        this.item = this.defaultItem;
    }

    @action
    setItems = () => {
        this.loadPromise = this.api.getAll().then((itemsResults: any) => {
            this.items = itemsResults.results;
        });
    }

    @action
    setItem = (ItemId: number) => {

        this.loadPromise.then(() => {
            const item = this.items.find(element => element.id === ItemId);
            if (item) {
                this.item = item;
            }
            else {
                this.item = this.defaultItem;
            }
        });
    }

    @action
    saveItem = () => {
        let promise = undefined;
        if (this.item.id) {
            promise = this.api.update(this.item, this.item.id).then((savedDataItem: any) => {
                let index = this.items.findIndex(item => item.id === savedDataItem.id);
                this.items[index] = savedDataItem;
            });
        } else {
            promise = this.api.insert(this.item).then((savedDataItem: any) => {
                this.items.push(savedDataItem);
            });
        }
        return promise.then(() => {
            return true;
        })
            .catch((error: any) => {
                toastr.error(error);
                return false;
            });

    }

    @action
    changeItem = (event: any) => {
        const field = event.target.name;
        this.item[field] = event.target.value;
    }

    @action
    deleteItem = (itemId?: number) => {
        if (itemId) {
            return this.api.delete(itemId)
                .then((success: any) => {
                    if (success) {
                        toastr.success("Course deleted");
                        this.items = this.items.filter(author => author.id !== itemId);
                    }
                })
                .catch((error: any) => {
                    if (error.message === DELETE_FAILED) {
                        toastr.error('Cannot delete, because author is active on one or more courses');
                    } else {
                        toastr.error(error);
                    }
                });
        }
        else {
            return Promise.reject("");
        }

    }
}

export { BaseStore };
