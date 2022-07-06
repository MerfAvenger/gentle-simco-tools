import Item from "./model/Item";
import Building from "./model/industry/Building";
import Industry from "./model/industry/Industry";

import BuildingService from "./services/Building";

import Industries from "./model/industry/Industries.json";

export default class World {
    m_industries: Industry[];
    m_buildings: Building[];

    m_buildingService: BuildingService;

    constructor() {
        this.m_buildingService = new BuildingService();
    }

    init() {
        this.buildBuildings();
        this.buildIndustries();
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