
export class InventoryModel{

    private inventoryName: string;
    private inventoryPrice: number;

    constructor(inventoryName: string, inventoryPrice: number){
        this.inventoryName = inventoryName;
        this.inventoryPrice = inventoryPrice;
    }
}