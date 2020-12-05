/* 
Author: Devin Davis
Date: December 5th, 2020
File: SkillContainer.js
*/

class SkillContainer {
    constructor(name, desc, addonName, addons) {
        this.name = name;
        this.desc = desc;
        this.addons = addons;
        this.addonName = addonName;
    }

    create() {
        // create primary elements
        let element = document.createElement("article");
        let heading1 = document.createElement("h1").textContent = this.name;
        let description = document.createElement("p").textContent = this.desc;
        element.append(heading1, description);
        if(this.addonName && this.addons) {
           element = this.addAddons(element)
        }
        return element
    }

    addAddons(element) {
        let heading2 = document.createElement("h2").textContent = this.addonName;
        let addons = document.createElement("ul");
        // append each addon to addon list
        this.addons.forEach(name => {
            let addon = document.createElement("li");
            addon.textContent = name
            addons.append()
        });
        element.append(heading2, addons)
        return element
    }
}