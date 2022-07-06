import ItemService from "./services/Item";
import Item from "./model/Item";
import GlobalItem from "./model/GlobalItem";

export default class ItemManager {
    itemService: ItemService;

    gameItems: Item[];
    
    constructor() {
        this.itemService = new ItemService();
    }

    buildItems(): void {
        const worldItems = new Array<Item>();

        const globalItems = this.itemService.getGlobalItems();
        globalItems
            .forEach((globalItem) => {
                worldItems.push(this.buildItem(globalItem));
            });

        this.gameItems = this.sortItemsToIdOrderedArray(globalItems);
    }

    buildItem(globalItem): Item {
        const itemName = this.parseNameFromImageUrl(globalItem.image);
        const itemId = globalItem.kind;
        
        return new Item(
            itemName,
            itemId
        );
    }

    sortItemsToIdOrderedArray(items: Item[]): Item[] {
        return items.sort((itemA, itemB) => {
            return itemA.id - itemB.id;
        });
    }

    parseNameFromImageUrl(url: string): string {
        const nameRegex = new RegExp(/(?:images\/resources\/)(.*)(?:\.png)/);
        return nameRegex.exec(url)[1];
    }
}