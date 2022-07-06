// Test Subject
import ItemManager from "./ItemManager";

// Dependencies and Mocks
import ITEMS_EXAMPLE from "../examples/market.json";

import ItemService from "./services/Item";
jest.mock("./services/Item");

import Item from "./model/Item";
jest.mock("./model/Item", () => {
    return function(name, id) {
        this.name = name;
        this.id = id;
    };
});

describe('ItemManager', () => {
    let itemManager: ItemManager;

    // Mock items
    const power = new Item('power', 0);
    const water = new Item('water', 1);
    const seeds = new Item('seeds', 2);
    const potatoes = new Item('potatoes', 3);

    const expectedGameItems = [
        power,
        water, 
        seeds, 
        potatoes
    ];

    beforeEach(() => {
        itemManager = new ItemManager();
        itemManager.itemService.getGlobalItems = jest.fn().mockImplementation(() => {
            return ITEMS_EXAMPLE
        });
    });

    describe('Item initialisation', () => {
        beforeEach(() => {
            itemManager.sortItemsToIdOrderedArray = jest.fn(() => {return expectedGameItems});
            itemManager.buildItem = jest.fn((globalItem) => {return new Item(globalItem.image, globalItem.kind)})
        });

        it('Should build gameItems into an ordered array', () => {
            // Given
            // ItemService has been initialised during construction

            // When 
            // We call buildItems
            itemManager.buildItems();

            // Then
            // ItemService should be called to get global items
            expect(itemManager.itemService.getGlobalItems).toHaveBeenCalled();
            // We should have built items for every item in the global item list
            expect(itemManager.buildItem).toHaveBeenCalledTimes(ITEMS_EXAMPLE.length);
            // gameItems should be set to the expected output array
            expect(itemManager.gameItems).toBe(expectedGameItems);
        });
    });

    describe('Helper functions', () => {
        describe('parseNameFromImageUrl', () => {
            const expectedName = "reinforced-concrete";
            const validUrl = "images/resources/reinforced-concrete.png";
            const emptyUrl = "";
            const objectUrl = {};
            const numberUrl = 123;

            it('Should parse the item name from an image url', () => {
                // Given
                // ItemManager is initialised (beforeEach)

                // When 
                // The parseNameFromImageUrl function is called
                const name = itemManager.parseNameFromImageUrl(validUrl);

                // Then
                // We should get the correct item name and format
                expect(name).toBe(expectedName);
            });
        });

        describe('sortItemsToIdOrderedArray', () => {

            it('Should correctly sort items by their id for indexing', () => {
                // Given
                // World is initialised (beforeEach)
                // We have an array of unsorted items
                const unsortedItems = [seeds, power, potatoes, water ];
                // We know what the expected sorted array looks like;
                const expectedSortedItems = expectedGameItems;

                // When 
                // The sortItems function is called
                const sortedItems = itemManager.sortItemsToIdOrderedArray(unsortedItems);

                // Then
                // We should get the expected ordering
                expect(sortedItems).toEqual(expectedSortedItems);
            });
        });
    });
});