//Country class
export class Country {
    constructor(id, name, goldMedalCount, silverMedalCount, bronzeMedalCount) {
        this.id = id || 0;
        this.name = name || '';
        this.bronzeMedalCount = bronzeMedalCount || 0;
        this.silverMedalCount = silverMedalCount || 0;
        this.goldMedalCount = goldMedalCount || 0;
    }
}





