import { observable, action, computed } from "mobx";
import * as toastr from 'toastr';

const DELETE_FAILED = 'DELETE_FAILED';

class BaseStore {
    defaultItem: { id: number, firstName: string, lastName: string } = { id: 0, firstName: '', lastName: '' };
    @observable items: { id: number, firstName: string, lastName: string }[] = [];
    @observable item = this.defaultItem;
    loadPromise: any = undefined;
    api: any;

    constructor(api: any, defaultItem: any) {
        this.api = api;
        this.defaultItem = defaultItem;
    }

    @action
    setItems() {
        this.loadPromise = this.api.getAll().then((itemsResults: any) => {
            this.items = itemsResults.results;
        });
    }

    @action
    setItem(ItemId: number) {

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
    saveItem() {
        let promise = undefined;
        if (this.item.id) {
            promise = this.api.save(this.item).then((savedDataItem: any) => {
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
    changeItem(event: any) {
        const field = event.target.name;
        this.item[field] = event.target.value;
    }

    @action
    deleteItem(itemId: number) {
        let item = this.items.filter(element => element.id === itemId)[0];

        this.api.delete(item)
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
}

export { BaseStore };
