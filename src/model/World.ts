import Item from "./Item";
import Building from "./industry/Building";
import Industry from "./industry/Industry";
import Industries from "./industry/Industries.json"

export default class World {
    m_industries: [Industry];
    m_buildings: [Building];
    m_items: [Item];

    constructor() {
        this.buildItems();
        this.buildBuildings();
        this.buildIndustries();
    }

    buildItems(): void {

    }

    buildBuildings(): void {

    }

    buildIndustries(): void {
        let industries: [Industry];
        
        Object.values(Industries)
            .forEach((industry: string) => {
                // industries.push(
                //     new Industry(
                //         industry,

                //     )
                // )
            });
    }

    // buildIndustry(items): Industry {
    //     return new Industry();
    // }

    getItemsInIndustry(items) {

    }
}