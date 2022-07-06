export default class Item {
    name: string;
    id: number;

    materials: [Item];

    sourceCost: number;
    marketCost: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;

        this.materials = null;

        this.sourceCost = 0;
        this.marketCost = 0;
    }

    initMaterials(materials:[Item]): void {

    }
}