export default class Item {
    m_materials: [Item];
    m_sourceCost: number;
    m_marketCost: number;

    constructor(materials: [Item]) {
        this.m_materials = materials;
        this.m_sourceCost = 0;
        this.m_marketCost = 0;
    }

    get materials(): [Item] {
        return this.m_materials
    }
}